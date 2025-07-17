import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  MessageCircle, 
  Search, 
  Send, 
  Bot, 
  User,
  Clock,
  CheckCheck,
  Phone,
  MoreVertical,
  Filter
} from 'lucide-react'

const conversations = [
  {
    id: 1,
    customer: {
      name: "John Doe",
      phone: "+1 234 567 8901",
      avatar: "/api/placeholder/40/40",
      status: "online"
    },
    lastMessage: "Thank you for the quick response!",
    timestamp: "2 min ago",
    unread: 0,
    isAI: false,
    status: "delivered"
  },
  {
    id: 2,
    customer: {
      name: "Sarah Wilson",
      phone: "+1 234 567 8902",
      avatar: "/api/placeholder/40/40",
      status: "away"
    },
    lastMessage: "AI: I've found the information you requested. Here are the details...",
    timestamp: "5 min ago",
    unread: 2,
    isAI: true,
    status: "read"
  },
  {
    id: 3,
    customer: {
      name: "Mike Johnson",
      phone: "+1 234 567 8903",
      avatar: "/api/placeholder/40/40",
      status: "offline"
    },
    lastMessage: "Can you help me with my order?",
    timestamp: "1 hour ago",
    unread: 1,
    isAI: false,
    status: "pending"
  },
  {
    id: 4,
    customer: {
      name: "Emma Davis",
      phone: "+1 234 567 8904",
      avatar: "/api/placeholder/40/40",
      status: "online"
    },
    lastMessage: "AI: Your request has been processed successfully.",
    timestamp: "2 hours ago",
    unread: 0,
    isAI: true,
    status: "delivered"
  }
]

const currentMessages = [
  {
    id: 1,
    sender: "customer",
    message: "Hi, I need help with my recent order",
    timestamp: "10:30 AM",
    status: "delivered"
  },
  {
    id: 2,
    sender: "ai",
    message: "Hello! I'd be happy to help you with your order. Could you please provide your order number?",
    timestamp: "10:31 AM",
    status: "delivered"
  },
  {
    id: 3,
    sender: "customer",
    message: "Sure, it's #ORD-12345",
    timestamp: "10:32 AM",
    status: "delivered"
  },
  {
    id: 4,
    sender: "ai",
    message: "Thank you! I found your order #ORD-12345. It was placed on January 15th for $89.99. The status shows it's currently being processed and will ship within 2-3 business days. Is there anything specific you'd like to know about this order?",
    timestamp: "10:33 AM",
    status: "delivered"
  },
  {
    id: 5,
    sender: "customer",
    message: "When will it arrive?",
    timestamp: "10:35 AM",
    status: "read"
  }
]

export function Conversations() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [newMessage, setNewMessage] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredConversations = conversations.filter(conv =>
    conv.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.customer.phone.includes(searchQuery)
  )

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage('')
    }
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-6">
      {/* Conversations List */}
      <div className="w-1/3 modern-card flex flex-col">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              Conversations
            </CardTitle>
            <Button size="sm" variant="outline" className="hover-lift">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search conversations..."
              className="pl-10 input-focus"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-auto p-0">
          <div className="space-y-1">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-4 cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 ${
                  selectedConversation.id === conversation.id 
                    ? 'whatsapp-gradient-light border-l-4 border-emerald-500' 
                    : ''
                }`}
                onClick={() => setSelectedConversation(conversation)}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={conversation.customer.avatar} alt={conversation.customer.name} />
                      <AvatarFallback className="whatsapp-gradient text-white">
                        <User className="w-6 h-6" />
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                      conversation.customer.status === 'online' ? 'status-online' :
                      conversation.customer.status === 'away' ? 'status-away' : 'status-offline'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900 truncate">{conversation.customer.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                        {conversation.unread > 0 && (
                          <Badge className="notification-badge text-white text-xs px-2 py-1">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground truncate mt-1">
                      {conversation.isAI && (
                        <Bot className="w-3 h-3 inline mr-1 text-purple-600" />
                      )}
                      {conversation.lastMessage}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">{conversation.customer.phone}</span>
                      <div className="flex items-center gap-1">
                        {conversation.status === 'delivered' && <CheckCheck className="w-3 h-3 text-blue-500" />}
                        {conversation.status === 'read' && <CheckCheck className="w-3 h-3 text-emerald-500" />}
                        {conversation.status === 'pending' && <Clock className="w-3 h-3 text-orange-500" />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </div>

      {/* Chat Area */}
      <div className="flex-1 modern-card flex flex-col">
        {/* Chat Header */}
        <CardHeader className="border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={selectedConversation.customer.avatar} alt={selectedConversation.customer.name} />
                  <AvatarFallback className="whatsapp-gradient text-white">
                    <User className="w-5 h-5" />
                  </AvatarFallback>
                </Avatar>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                  selectedConversation.customer.status === 'online' ? 'status-online' :
                  selectedConversation.customer.status === 'away' ? 'status-away' : 'status-offline'
                }`} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{selectedConversation.customer.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{selectedConversation.customer.phone}</span>
                  <Badge className="success-gradient text-white text-xs px-2 py-0.5">
                    <Bot className="w-3 h-3 mr-1" />
                    AI Enabled
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" className="hover-lift">
                <Phone className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="hover-lift">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {/* Messages */}
        <CardContent className="flex-1 overflow-auto p-4 space-y-4">
          {currentMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'customer' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                message.sender === 'customer' 
                  ? 'message-bubble-received' 
                  : message.sender === 'ai'
                  ? 'ai-gradient text-white'
                  : 'message-bubble-sent text-white'
              }`}>
                {message.sender === 'ai' && (
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-4 h-4" />
                    <span className="text-xs font-medium opacity-90">AI Assistant</span>
                  </div>
                )}
                <p className="text-sm">{message.message}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className={`text-xs ${
                    message.sender === 'customer' ? 'text-muted-foreground' : 'text-white/70'
                  }`}>
                    {message.timestamp}
                  </span>
                  {message.sender !== 'customer' && (
                    <CheckCheck className={`w-3 h-3 ${
                      message.status === 'read' ? 'text-white' : 'text-white/70'
                    }`} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardContent>

        {/* Message Input */}
        <div className="border-t border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="pr-12 input-focus"
              />
              <Button
                size="sm"
                onClick={sendMessage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-whatsapp text-white px-3"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <Button variant="outline" size="sm" className="btn-ai text-white hover-lift">
              <Bot className="w-4 h-4 mr-2" />
              AI Suggest
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}