import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Save, 
  TestTube, 
  Key, 
  MessageSquare,
  Bot,
  Database,
  Webhook,
  Shield,
  Bell
} from 'lucide-react'

export function Settings() {
  const [settings, setSettings] = useState({
    // API Settings
    libromiApiKey: '',
    openaiApiKey: '',
    googleSheetsId: '',
    webhookUrl: '',
    
    // AI Settings
    aiEnabled: true,
    autoResponse: true,
    responseDelay: 2,
    aiModel: 'gpt-4',
    systemPrompt: 'You are a helpful customer service assistant for our company. Be professional, friendly, and helpful.',
    
    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    webhookNotifications: true,
    
    // Business Hours
    businessHoursEnabled: true,
    startTime: '09:00',
    endTime: '17:00',
    timezone: 'UTC'
  })

  const handleSave = () => {
    // Here you would save settings to your backend
    console.log('Saving settings:', settings)
  }

  const testConnection = (service: string) => {
    // Here you would test the API connection
    console.log(`Testing ${service} connection...`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Settings</h2>
          <p className="text-muted-foreground">Configure your WhatsApp AI CRM Assistant</p>
        </div>
        <Button onClick={handleSave}>
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="api" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="api">API Keys</TabsTrigger>
          <TabsTrigger value="ai">AI Settings</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="business">Business Hours</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* API Keys Tab */}
        <TabsContent value="api" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-5 h-5" />
                API Configuration
              </CardTitle>
              <CardDescription>
                Configure your external service API keys and endpoints
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Libromi Connect */}
              <div className="space-y-2">
                <Label htmlFor="libromi-key">Libromi Connect API Key</Label>
                <div className="flex gap-2">
                  <Input
                    id="libromi-key"
                    type="password"
                    placeholder="Enter your Libromi API key"
                    value={settings.libromiApiKey}
                    onChange={(e) => setSettings({...settings, libromiApiKey: e.target.value})}
                  />
                  <Button variant="outline" onClick={() => testConnection('Libromi')}>
                    <TestTube className="w-4 h-4 mr-2" />
                    Test
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Connected
                  </Badge>
                  <span className="text-sm text-muted-foreground">Last tested: 2 minutes ago</span>
                </div>
              </div>

              {/* OpenAI */}
              <div className="space-y-2">
                <Label htmlFor="openai-key">OpenAI API Key</Label>
                <div className="flex gap-2">
                  <Input
                    id="openai-key"
                    type="password"
                    placeholder="Enter your OpenAI API key"
                    value={settings.openaiApiKey}
                    onChange={(e) => setSettings({...settings, openaiApiKey: e.target.value})}
                  />
                  <Button variant="outline" onClick={() => testConnection('OpenAI')}>
                    <TestTube className="w-4 h-4 mr-2" />
                    Test
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Connected
                  </Badge>
                  <span className="text-sm text-muted-foreground">Model: GPT-4</span>
                </div>
              </div>

              {/* Google Sheets */}
              <div className="space-y-2">
                <Label htmlFor="sheets-id">Google Sheets ID</Label>
                <div className="flex gap-2">
                  <Input
                    id="sheets-id"
                    placeholder="Enter your Google Sheets ID"
                    value={settings.googleSheetsId}
                    onChange={(e) => setSettings({...settings, googleSheetsId: e.target.value})}
                  />
                  <Button variant="outline" onClick={() => testConnection('Google Sheets')}>
                    <TestTube className="w-4 h-4 mr-2" />
                    Test
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Synced
                  </Badge>
                  <span className="text-sm text-muted-foreground">1,234 records</span>
                </div>
              </div>

              {/* Webhook URL */}
              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="webhook-url"
                    placeholder="https://your-domain.com/webhook"
                    value={settings.webhookUrl}
                    onChange={(e) => setSettings({...settings, webhookUrl: e.target.value})}
                  />
                  <Button variant="outline" onClick={() => testConnection('Webhook')}>
                    <TestTube className="w-4 h-4 mr-2" />
                    Test
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  This URL will receive WhatsApp message webhooks from Libromi Connect
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* AI Settings Tab */}
        <TabsContent value="ai" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                AI Assistant Configuration
              </CardTitle>
              <CardDescription>
                Configure how your AI assistant responds to customers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable AI Assistant</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow AI to automatically respond to customer messages
                  </p>
                </div>
                <Switch
                  checked={settings.aiEnabled}
                  onCheckedChange={(checked) => setSettings({...settings, aiEnabled: checked})}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto Response</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically send AI responses without manual approval
                  </p>
                </div>
                <Switch
                  checked={settings.autoResponse}
                  onCheckedChange={(checked) => setSettings({...settings, autoResponse: checked})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="response-delay">Response Delay (seconds)</Label>
                <Input
                  id="response-delay"
                  type="number"
                  min="0"
                  max="60"
                  value={settings.responseDelay}
                  onChange={(e) => setSettings({...settings, responseDelay: parseInt(e.target.value)})}
                />
                <p className="text-sm text-muted-foreground">
                  Delay before AI sends automatic responses to appear more natural
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="system-prompt">System Prompt</Label>
                <Textarea
                  id="system-prompt"
                  rows={4}
                  placeholder="Enter the system prompt for your AI assistant..."
                  value={settings.systemPrompt}
                  onChange={(e) => setSettings({...settings, systemPrompt: e.target.value})}
                />
                <p className="text-sm text-muted-foreground">
                  This prompt defines how your AI assistant should behave and respond
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>
                Configure how you receive notifications about system events
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive email alerts for important events
                  </p>
                </div>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) => setSettings({...settings, emailNotifications: checked})}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>SMS Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive SMS alerts for urgent issues
                  </p>
                </div>
                <Switch
                  checked={settings.smsNotifications}
                  onCheckedChange={(checked) => setSettings({...settings, smsNotifications: checked})}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Webhook Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Send notifications to external systems via webhooks
                  </p>
                </div>
                <Switch
                  checked={settings.webhookNotifications}
                  onCheckedChange={(checked) => setSettings({...settings, webhookNotifications: checked})}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Business Hours Tab */}
        <TabsContent value="business" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Business Hours</CardTitle>
              <CardDescription>
                Configure when your AI assistant should be active
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Business Hours</Label>
                  <p className="text-sm text-muted-foreground">
                    Only respond to messages during business hours
                  </p>
                </div>
                <Switch
                  checked={settings.businessHoursEnabled}
                  onCheckedChange={(checked) => setSettings({...settings, businessHoursEnabled: checked})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-time">Start Time</Label>
                  <Input
                    id="start-time"
                    type="time"
                    value={settings.startTime}
                    onChange={(e) => setSettings({...settings, startTime: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-time">End Time</Label>
                  <Input
                    id="end-time"
                    type="time"
                    value={settings.endTime}
                    onChange={(e) => setSettings({...settings, endTime: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Input
                  id="timezone"
                  value={settings.timezone}
                  onChange={(e) => setSettings({...settings, timezone: e.target.value})}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Manage security and access controls
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">API Key Encryption</div>
                    <div className="text-sm text-muted-foreground">All API keys are encrypted at rest</div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Enabled
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">Webhook Signature Verification</div>
                    <div className="text-sm text-muted-foreground">Verify webhook signatures for security</div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Enabled
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">Rate Limiting</div>
                    <div className="text-sm text-muted-foreground">Protect against API abuse</div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Active
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">Audit Logging</div>
                    <div className="text-sm text-muted-foreground">Track all system activities</div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Enabled
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}