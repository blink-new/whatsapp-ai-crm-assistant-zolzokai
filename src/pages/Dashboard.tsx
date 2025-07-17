import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  MessageCircle, 
  Users, 
  TrendingUp, 
  Clock,
  CheckCircle,
  AlertCircle,
  Activity,
  Zap,
  Bot,
  Smartphone,
  Database,
  BarChart3
} from 'lucide-react'

const stats = [
  {
    title: "Total Messages",
    value: "2,847",
    change: "+12%",
    icon: MessageCircle,
    color: "text-emerald-600",
    bgGradient: "whatsapp-gradient-light"
  },
  {
    title: "Active Customers",
    value: "1,234",
    change: "+8%",
    icon: Users,
    color: "text-blue-600",
    bgGradient: "crm-gradient-light"
  },
  {
    title: "Response Rate",
    value: "94.2%",
    change: "+2.1%",
    icon: TrendingUp,
    color: "text-purple-600",
    bgGradient: "ai-gradient-light"
  },
  {
    title: "Avg Response Time",
    value: "2.3s",
    change: "-0.5s",
    icon: Clock,
    color: "text-orange-600",
    bgGradient: "crm-gradient-light"
  }
]

const recentActivity = [
  {
    id: 1,
    type: "message",
    customer: "John Doe",
    message: "AI responded to product inquiry",
    time: "2 minutes ago",
    status: "completed",
    icon: Bot
  },
  {
    id: 2,
    type: "customer",
    customer: "Sarah Wilson",
    message: "New customer data synced from Google Sheets",
    time: "5 minutes ago",
    status: "completed",
    icon: Database
  },
  {
    id: 3,
    type: "alert",
    customer: "Mike Johnson",
    message: "Manual intervention required",
    time: "8 minutes ago",
    status: "pending",
    icon: AlertCircle
  },
  {
    id: 4,
    type: "message",
    customer: "Emma Davis",
    message: "AI generated response template",
    time: "12 minutes ago",
    status: "completed",
    icon: Bot
  }
]

const quickActions = [
  {
    title: "Send Broadcast Message",
    description: "Send message to all customers",
    icon: MessageCircle,
    gradient: "btn-whatsapp"
  },
  {
    title: "Import Customer Data",
    description: "Sync from Google Sheets",
    icon: Users,
    gradient: "btn-crm"
  },
  {
    title: "Generate Report",
    description: "Create analytics report",
    icon: BarChart3,
    gradient: "btn-ai"
  },
  {
    title: "Test AI Response",
    description: "Test AI conversation flow",
    icon: Bot,
    gradient: "btn-whatsapp"
  }
]

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="modern-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-whatsapp-gradient mb-2">
              Welcome to WhatsApp AI CRM
            </h1>
            <p className="text-muted-foreground text-lg">
              Your intelligent customer relationship management assistant powered by AI
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-20 h-20 whatsapp-gradient rounded-2xl flex items-center justify-center">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.title} className="stats-card hover-lift">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`w-10 h-10 ${stat.bgGradient} rounded-lg flex items-center justify-center`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className={stat.change.startsWith('+') ? 'text-emerald-600 font-medium' : 'text-red-600 font-medium'}>
                    {stat.change}
                  </span>
                  {' '}from last month
                </p>
              </CardContent>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* System Status */}
        <div className="modern-card hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-600" />
              System Status
            </CardTitle>
            <CardDescription>Real-time integration status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg whatsapp-gradient-light">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 status-online rounded-full"></div>
                <span className="text-sm font-medium">Libromi Connect API</span>
              </div>
              <Badge variant="secondary" className="success-gradient text-white border-0">
                <CheckCircle className="w-3 h-3 mr-1" />
                Connected
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg ai-gradient-light">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 status-online rounded-full"></div>
                <span className="text-sm font-medium">OpenAI GPT</span>
              </div>
              <Badge variant="secondary" className="success-gradient text-white border-0">
                <CheckCircle className="w-3 h-3 mr-1" />
                Active
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg crm-gradient-light">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 status-online rounded-full"></div>
                <span className="text-sm font-medium">Google Sheets</span>
              </div>
              <Badge variant="secondary" className="success-gradient text-white border-0">
                <CheckCircle className="w-3 h-3 mr-1" />
                Synced
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-orange-50 to-yellow-50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 status-away rounded-full"></div>
                <span className="text-sm font-medium">Webhook Endpoint</span>
              </div>
              <Badge variant="secondary" className="warning-gradient text-white border-0">
                <AlertCircle className="w-3 h-3 mr-1" />
                Pending
              </Badge>
            </div>
          </CardContent>
        </div>

        {/* Quick Actions */}
        <div className="modern-card hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Quick Actions
            </CardTitle>
            <CardDescription>Frequently used operations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <Button 
                  key={index}
                  className={`w-full justify-start h-auto p-4 ${action.gradient} text-white border-0 hover-lift`} 
                  variant="outline"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-medium">{action.title}</div>
                      <div className="text-xs opacity-90">{action.description}</div>
                    </div>
                  </div>
                </Button>
              )
            })}
          </CardContent>
        </div>

        {/* Recent Activity */}
        <div className="modern-card hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-purple-600" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest system events and interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => {
                const Icon = activity.icon
                return (
                  <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 transition-all duration-200">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      activity.status === 'completed' 
                        ? 'whatsapp-gradient-light' 
                        : 'bg-gradient-to-r from-orange-50 to-yellow-50'
                    }`}>
                      <Icon className={`w-4 h-4 ${
                        activity.status === 'completed' ? 'text-emerald-600' : 'text-orange-600'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.customer}</p>
                      <p className="text-xs text-muted-foreground">{activity.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === 'completed' ? 'bg-emerald-500' : 'bg-orange-500'
                    }`} />
                  </div>
                )
              })}
            </div>
          </CardContent>
        </div>
      </div>

      {/* AI Performance Metrics */}
      <div className="modern-card hover-lift">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-purple-600" />
            AI Performance Metrics
          </CardTitle>
          <CardDescription>Real-time AI assistant performance data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-lg ai-gradient-light">
              <div className="text-2xl font-bold text-purple-600 mb-1">98.5%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center p-4 rounded-lg whatsapp-gradient-light">
              <div className="text-2xl font-bold text-emerald-600 mb-1">1.2s</div>
              <div className="text-sm text-muted-foreground">Avg Processing Time</div>
            </div>
            <div className="text-center p-4 rounded-lg crm-gradient-light">
              <div className="text-2xl font-bold text-blue-600 mb-1">847</div>
              <div className="text-sm text-muted-foreground">Messages Today</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50">
              <div className="text-2xl font-bold text-green-600 mb-1">92%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </CardContent>
      </div>
    </div>
  )
}