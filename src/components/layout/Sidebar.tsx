import { useState } from 'react'
import { 
  MessageCircle, 
  Users, 
  BarChart3, 
  Settings, 
  Home,
  Menu,
  X,
  Bot,
  Smartphone,
  Calendar
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface SidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const navigation = [
  { id: 'dashboard', name: 'Dashboard', icon: Home, gradient: 'whatsapp-gradient-light' },
  { id: 'conversations', name: 'Conversations', icon: MessageCircle, gradient: 'ai-gradient-light' },
  { id: 'customers', name: 'Customers', icon: Users, gradient: 'crm-gradient-light' },
  { id: 'analytics', name: 'Analytics', icon: BarChart3, gradient: 'ai-gradient-light' },
  { id: 'events', name: 'Events', icon: Calendar, gradient: 'crm-gradient-light' },
  { id: 'settings', name: 'Settings', icon: Settings, gradient: 'whatsapp-gradient-light' },
]

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-4 left-4 z-50 modern-card"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-72 sidebar-gradient border-r border-white/20 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 p-6 border-b border-white/10">
            <div className="w-12 h-12 whatsapp-gradient rounded-2xl flex items-center justify-center shadow-lg">
              <Smartphone className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-whatsapp-gradient">WhatsApp CRM</h1>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">AI Assistant</p>
                <Badge className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5">
                  <Bot className="w-3 h-3 mr-1" />
                  Active
                </Badge>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 h-12 rounded-xl transition-all duration-200",
                    isActive 
                      ? "whatsapp-gradient text-white shadow-lg hover:shadow-xl" 
                      : "hover:bg-white/50 text-gray-700 hover:text-gray-900"
                  )}
                  onClick={() => {
                    onTabChange(item.id)
                    setIsOpen(false)
                  }}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200",
                    isActive 
                      ? "bg-white/20" 
                      : `${item.gradient}`
                  )}>
                    <Icon className={cn(
                      "w-5 h-5",
                      isActive ? "text-white" : "text-gray-600"
                    )} />
                  </div>
                  <span className="font-medium">{item.name}</span>
                </Button>
              )
            })}
          </nav>

          {/* Status indicator */}
          <div className="p-4 border-t border-white/10">
            <div className="modern-card p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 status-online rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">System Status</span>
              </div>
              <div className="space-y-2 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Libromi API</span>
                  <span className="text-emerald-600 font-medium">Connected</span>
                </div>
                <div className="flex justify-between">
                  <span>AI Engine</span>
                  <span className="text-emerald-600 font-medium">Active</span>
                </div>
                <div className="flex justify-between">
                  <span>Google Sheets</span>
                  <span className="text-emerald-600 font-medium">Synced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}