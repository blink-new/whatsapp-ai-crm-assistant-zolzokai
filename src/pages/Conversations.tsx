import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Send, 
  Phone, 
  MoreVertical, 
  Search,
  Bot,
  User,
  Clock,
  CheckCheck
} from 'lucide-react'

const conversations = [
  {
    id: 1,
    customer: {
      name: "John Doe",
      phone: "+1234567890",
      avatar: "",
      status: "online"
    },
    lastMessage: "Thank you for the quick response!",
    timestamp: "2 min ago",
    unread: 0,
    isAiHandled: true
  },
  {
    id: 2,
    customer: {
      name: "Sarah Wilson",
      phone: "+1234567891",
      avatar: "",
      status: "offline"
    },
    lastMessage: "Can you help me with my order?",
    timestamp: "5 min ago",
    unread: 2,
    isAiHandled: false
  },
  {
    id: 3,
    customer: {
      name: "Mike Johnson",
      phone: "+1234567892",
      avatar: "",
      status: "online"
    },
    lastMessage: "Perfect! That's exactly what I needed.",
    timestamp: "1 hour ago",
    unread: 0,
    isAiHandled: true
  }
]

const messages = [
  {
    id: 1,
    text: "Hi! I'm interested in your products. Can you tell me more about pricing?",
    sender: "customer",
    timestamp: "10:30 AM",
    status: "delivered"
  },
  {
    id: 2,
    text: "Hello! I'd be happy to help you with pricing information. Based on your inquiry, I can see you're interested in our premium package. Let me get you the details.",
    sender: "ai",
    timestamp: "10:31 AM",
    status: "delivered"
  },
  {
    id: 3,
    text: "Our premium package starts at $99/month and includes:\n• 24/7 customer support\n• Advanced analytics\n• Custom integrations\n• Priority processing",
    sender: "ai",
    timestamp: "10:31 AM",
    status: "delivered"
  },
  {
    id: 4,
    text: "That sounds great! Do you offer any discounts for annual subscriptions?",
    sender: "customer",
    timestamp: "10:35 AM",
    status: "delivered"
  },
  {
    id: 5,
    text: "Yes! We offer a 20% discount for annual subscriptions. That would bring your cost down to $79.20/month when paid annually. Would you like me to set up a demo for you?",
    sender: "ai",
    timestamp: "10:36 AM",
    status: "delivered"
  }
]

export function Conversations() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [newMessage, setNewMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredConversations = conversations.filter(conv =>
    conv.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.customer.phone.includes(searchTerm)
  )

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message via API
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-6">
      {/* Conversations List */}
      <Card className="w-80 flex flex-col">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Conversations</CardTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search conversations..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-1 p-0">
          <ScrollArea className="h-full">
            <div className="space-y-1 p-3">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-3 rounded-lg cursor-pointer transition-colors hover:bg-muted ${
                    selectedConversation.id === conversation.id ? 'bg-muted' : ''
                  }`}
                  onClick={() => setSelectedConversation(conversation)}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={conversation.customer.avatar} />
                        <AvatarFallback>
                          {conversation.customer.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      {conversation.customer.status === 'online' && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium truncate">{conversation.customer.name}</h4>
                        <div className="flex items-center gap-1">
                          {conversation.isAiHandled && (
                            <Bot className="w-3 h-3 text-primary" />
                          )}
                          <span className="text-xs text-muted-foreground">
                            {conversation.timestamp}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {conversation.lastMessage}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-muted-foreground">
                          {conversation.customer.phone}
                        </span>
                        {conversation.unread > 0 && (
                          <Badge variant="default" className="text-xs px-1.5 py-0.5">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Chat Interface */}
      <Card className="flex-1 flex flex-col">
        {/* Chat Header */}
        <CardHeader className="border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={selectedConversation.customer.avatar} />
                <AvatarFallback>
                  {selectedConversation.customer.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{selectedConversation.customer.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{selectedConversation.customer.phone}</span>
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${
                      selectedConversation.customer.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                    }`} />
                    <span>{selectedConversation.customer.status}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {selectedConversation.isAiHandled && (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <Bot className="w-3 h-3 mr-1" />
                  AI Handled
                </Badge>
              )}
              <Button variant="ghost" size="icon">
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {/* Messages */}
        <CardContent className="flex-1 p-0">
          <ScrollArea className="h-full p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'customer' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-xs lg:max-w-md ${
                    message.sender === 'customer' 
                      ? 'message-bubble message-received' 
                      : 'message-bubble message-sent'
                  }`}>
                    <div className="flex items-start gap-2">
                      {message.sender === 'ai' && (
                        <Bot className="w-4 h-4 mt-1 text-primary-foreground" />
                      )}
                      {message.sender === 'customer' && (
                        <User className="w-4 h-4 mt-1 text-foreground" />
                      )}
                      <div className="flex-1">
                        <p className="whitespace-pre-wrap">{message.text}</p>
                        <div className="flex items-center justify-end gap-1 mt-1">
                          <span className={`text-xs ${
                            message.sender === 'customer' ? 'text-muted-foreground' : 'text-primary-foreground/70'
                          }`}>
                            {message.timestamp}
                          </span>
                          {message.sender !== 'customer' && (
                            <CheckCheck className="w-3 h-3 text-primary-foreground/70" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>

        {/* Message Input */}
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 chat-input"
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="whatsapp-green"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
            <span>AI will automatically respond to new messages</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Avg response: 2.3s</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}