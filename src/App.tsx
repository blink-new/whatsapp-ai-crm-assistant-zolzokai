import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import { Dashboard } from '@/pages/Dashboard'
import { Conversations } from '@/pages/Conversations'
import { Customers } from '@/pages/Customers'
import { Analytics } from '@/pages/Analytics'
import { Settings } from '@/pages/Settings'
import { Events } from '@/pages/Events'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'conversations':
        return <Conversations />
      case 'customers':
        return <Customers />
      case 'analytics':
        return <Analytics />
      case 'settings':
        return <Settings />
      case 'events':
        return <Events />
      default:
        return <Dashboard />
    }
  }

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard':
        return 'Dashboard'
      case 'conversations':
        return 'Conversations'
      case 'customers':
        return 'Customers'
      case 'analytics':
        return 'Analytics'
      case 'settings':
        return 'Settings'
      case 'events':
        return 'Events'
      default:
        return 'Dashboard'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 whatsapp-gradient-light rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 ai-gradient-light rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 crm-gradient-light rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="flex h-screen relative z-10">
        {/* Sidebar */}
        <div className="sidebar-gradient">
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="header-gradient">
            <Header 
              title={getPageTitle()} 
              user={{
                name: 'Admin User',
                email: 'admin@whatsappcrm.com',
                avatar: '/api/placeholder/40/40'
              }}
            />
          </div>

          {/* Page content */}
          <main className="flex-1 overflow-auto p-6">
            <div className="max-w-7xl mx-auto">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App