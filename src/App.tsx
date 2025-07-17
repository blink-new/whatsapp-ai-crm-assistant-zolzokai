import { useState, useEffect } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { Header } from '@/components/layout/Header'
import { Dashboard } from '@/pages/Dashboard'
import { Conversations } from '@/pages/Conversations'
import { Customers } from '@/pages/Customers'
import { Analytics } from '@/pages/Analytics'
import { Settings } from '@/pages/Settings'
import { Toaster } from '@/components/ui/toaster'
import blink from '@/blink/client'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mx-auto animate-pulse">
            <div className="w-5 h-5 bg-primary-foreground rounded" />
          </div>
          <p className="text-muted-foreground">Loading WhatsApp CRM...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md mx-auto p-6">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto">
            <div className="w-8 h-8 bg-primary-foreground rounded" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">WhatsApp AI CRM Assistant</h1>
            <p className="text-muted-foreground">
              Integrate with Libromi Connect API, use GPT for natural language processing, 
              and sync customer data from Google Sheets.
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3 text-sm">
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Real-time WhatsApp message handling</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>AI-powered response generation</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Google Sheets customer data sync</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Please sign in to access your CRM dashboard
            </p>
          </div>
        </div>
      </div>
    )
  }

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Dashboard'
      case 'conversations': return 'Conversations'
      case 'customers': return 'Customer Database'
      case 'analytics': return 'Analytics'
      case 'settings': return 'Settings'
      default: return 'Dashboard'
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />
      case 'conversations': return <Conversations />
      case 'customers': return <Customers />
      case 'analytics': return <Analytics />
      case 'settings': return <Settings />
      default: return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="flex-1 lg:ml-0">
          <Header 
            title={getPageTitle()} 
            user={{
              name: user.displayName || user.email?.split('@')[0] || 'User',
              email: user.email || 'user@example.com',
              avatar: user.avatar
            }}
          />
          
          <main className="p-6">
            {renderContent()}
          </main>
        </div>
      </div>
      
      <Toaster />
    </div>
  )
}

export default App