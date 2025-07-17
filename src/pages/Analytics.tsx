import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import { 
  TrendingUp, 
  TrendingDown, 
  MessageCircle, 
  Users, 
  Clock, 
  Bot,
  Download,
  Calendar
} from 'lucide-react'

const messageData = [
  { name: 'Mon', messages: 120, aiResponses: 95 },
  { name: 'Tue', messages: 150, aiResponses: 125 },
  { name: 'Wed', messages: 180, aiResponses: 160 },
  { name: 'Thu', messages: 140, aiResponses: 115 },
  { name: 'Fri', messages: 200, aiResponses: 180 },
  { name: 'Sat', messages: 90, aiResponses: 75 },
  { name: 'Sun', messages: 70, aiResponses: 60 }
]

const responseTimeData = [
  { time: '00:00', avgTime: 2.1 },
  { time: '04:00', avgTime: 1.8 },
  { time: '08:00', avgTime: 2.5 },
  { time: '12:00', avgTime: 3.2 },
  { time: '16:00', avgTime: 2.8 },
  { time: '20:00', avgTime: 2.3 }
]

const customerSourceData = [
  { name: 'Google Sheets', value: 65, color: '#25D366' },
  { name: 'WhatsApp Direct', value: 25, color: '#128C7E' },
  { name: 'Manual Entry', value: 10, color: '#34D399' }
]

const topCustomers = [
  { name: 'John Doe', messages: 78, lastActive: '2 hours ago' },
  { name: 'Sarah Wilson', messages: 65, lastActive: '1 hour ago' },
  { name: 'Mike Johnson', messages: 52, lastActive: '30 min ago' },
  { name: 'Emma Davis', messages: 45, lastActive: '4 hours ago' },
  { name: 'Alex Brown', messages: 38, lastActive: '1 day ago' }
]

export function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Analytics</h2>
          <p className="text-muted-foreground">Track your WhatsApp AI CRM performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            Last 7 days
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
            <MessageCircle className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3 mr-1 text-green-600" />
              <span className="text-green-600">+12%</span>
              <span className="ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Response Rate</CardTitle>
            <Bot className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3 mr-1 text-green-600" />
              <span className="text-green-600">+2.1%</span>
              <span className="ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3s</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingDown className="w-3 h-3 mr-1 text-green-600" />
              <span className="text-green-600">-0.5s</span>
              <span className="ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3 mr-1 text-green-600" />
              <span className="text-green-600">+8%</span>
              <span className="ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Message Volume Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Message Volume</CardTitle>
            <CardDescription>Daily message count and AI responses</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={messageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="messages" fill="#25D366" name="Total Messages" />
                <Bar dataKey="aiResponses" fill="#128C7E" name="AI Responses" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Response Time Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Response Time Trends</CardTitle>
            <CardDescription>Average response time throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={responseTimeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="avgTime" 
                  stroke="#25D366" 
                  strokeWidth={2}
                  name="Avg Time (seconds)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customer Sources */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Sources</CardTitle>
            <CardDescription>Where your customers come from</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={customerSourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {customerSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {customerSourceData.map((source) => (
                <div key={source.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: source.color }}
                    />
                    <span className="text-sm">{source.name}</span>
                  </div>
                  <span className="text-sm font-medium">{source.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Customers */}
        <Card>
          <CardHeader>
            <CardTitle>Most Active Customers</CardTitle>
            <CardDescription>Customers with highest message volume</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCustomers.map((customer, index) => (
                <div key={customer.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium">{index + 1}</span>
                    </div>
                    <div>
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {customer.lastActive}
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">
                    {customer.messages} msgs
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Summary</CardTitle>
            <CardDescription>Key performance indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <div className="font-medium text-green-800">Customer Satisfaction</div>
                <div className="text-sm text-green-600">Based on response quality</div>
              </div>
              <div className="text-2xl font-bold text-green-800">4.8/5</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <div className="font-medium text-blue-800">Resolution Rate</div>
                <div className="text-sm text-blue-600">Issues resolved by AI</div>
              </div>
              <div className="text-2xl font-bold text-blue-800">87%</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div>
                <div className="font-medium text-purple-800">Cost Savings</div>
                <div className="text-sm text-purple-600">vs manual support</div>
              </div>
              <div className="text-2xl font-bold text-purple-800">$2.4k</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div>
                <div className="font-medium text-orange-800">Uptime</div>
                <div className="text-sm text-orange-600">System availability</div>
              </div>
              <div className="text-2xl font-bold text-orange-800">99.9%</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}