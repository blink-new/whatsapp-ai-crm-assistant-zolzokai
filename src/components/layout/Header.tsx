import { Bell, Search, User, Bot, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'

interface HeaderProps {
  title: string
  user?: {
    name: string
    email: string
    avatar?: string
  }
}

export function Header({ title, user }: HeaderProps) {
  return (
    <header className="header-gradient border-b border-white/20 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <Badge className="success-gradient text-white border-0 px-3 py-1">
                <Bot className="w-3 h-3 mr-1" />
                AI Active
              </Badge>
              <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50">
                <Zap className="w-3 h-3 mr-1" />
                Real-time
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search customers, messages..."
              className="pl-10 w-80 modern-card border-0 input-focus"
            />
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative modern-card hover-lift">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 notification-badge rounded-full text-xs flex items-center justify-center text-white font-medium">
              3
            </span>
          </Button>

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-12 w-12 rounded-full modern-card hover-lift">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback className="whatsapp-gradient text-white">
                    <User className="w-5 h-5" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 modern-card border-0" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback className="whatsapp-gradient text-white text-xs">
                        <User className="w-4 h-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        {user?.name || 'Admin User'}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground mt-1">
                        {user?.email || 'admin@whatsappcrm.com'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="success-gradient text-white border-0 text-xs">
                      <Bot className="w-3 h-3 mr-1" />
                      AI Admin
                    </Badge>
                    <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50 text-xs">
                      Pro Plan
                    </Badge>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-100" />
              <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 cursor-pointer">
                <User className="w-4 h-4 mr-2" />
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 cursor-pointer">
                <Bot className="w-4 h-4 mr-2" />
                AI Configuration
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 cursor-pointer">
                <Zap className="w-4 h-4 mr-2" />
                API Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-100" />
              <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 cursor-pointer text-red-600">
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}