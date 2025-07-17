import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Plus,
  Edit,
  Trash2,
  Eye,
  Send,
  Filter
} from 'lucide-react'

const events = [
  {
    id: 1,
    title: "Product Launch Event",
    description: "Introducing our latest WhatsApp CRM features and AI capabilities",
    date: "2024-02-15",
    time: "14:00",
    location: "Virtual Event",
    type: "product_launch",
    status: "upcoming",
    attendees: 156,
    maxAttendees: 200,
    registrationDeadline: "2024-02-14"
  },
  {
    id: 2,
    title: "Customer Success Workshop",
    description: "Learn best practices for customer engagement through WhatsApp automation",
    date: "2024-02-20",
    time: "10:00",
    location: "Conference Room A",
    type: "workshop",
    status: "upcoming",
    attendees: 45,
    maxAttendees: 50,
    registrationDeadline: "2024-02-18"
  },
  {
    id: 3,
    title: "Q1 Business Review",
    description: "Quarterly review of CRM performance and customer insights",
    date: "2024-01-30",
    time: "16:00",
    location: "Main Auditorium",
    type: "meeting",
    status: "completed",
    attendees: 89,
    maxAttendees: 100,
    registrationDeadline: "2024-01-29"
  },
  {
    id: 4,
    title: "AI Integration Training",
    description: "Deep dive into GPT integration and natural language processing",
    date: "2024-02-25",
    time: "11:00",
    location: "Virtual Event",
    type: "training",
    status: "draft",
    attendees: 12,
    maxAttendees: 75,
    registrationDeadline: "2024-02-23"
  }
]

const eventTypes = [
  { value: "product_launch", label: "Product Launch", color: "bg-blue-100 text-blue-800" },
  { value: "workshop", label: "Workshop", color: "bg-green-100 text-green-800" },
  { value: "meeting", label: "Meeting", color: "bg-purple-100 text-purple-800" },
  { value: "training", label: "Training", color: "bg-orange-100 text-orange-800" },
  { value: "webinar", label: "Webinar", color: "bg-pink-100 text-pink-800" }
]

const eventStatuses = [
  { value: "draft", label: "Draft", color: "bg-gray-100 text-gray-800" },
  { value: "upcoming", label: "Upcoming", color: "bg-blue-100 text-blue-800" },
  { value: "live", label: "Live", color: "bg-green-100 text-green-800" },
  { value: "completed", label: "Completed", color: "bg-purple-100 text-purple-800" },
  { value: "cancelled", label: "Cancelled", color: "bg-red-100 text-red-800" }
]

export function Events() {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    type: "",
    maxAttendees: "",
    registrationDeadline: ""
  })

  const filteredEvents = events.filter(event => {
    if (selectedFilter === "all") return true
    return event.status === selectedFilter
  })

  const getTypeColor = (type: string) => {
    const eventType = eventTypes.find(t => t.value === type)
    return eventType?.color || "bg-gray-100 text-gray-800"
  }

  const getStatusColor = (status: string) => {
    const eventStatus = eventStatuses.find(s => s.value === status)
    return eventStatus?.color || "bg-gray-100 text-gray-800"
  }

  const handleCreateEvent = () => {
    // Here you would typically save to database
    console.log("Creating event:", newEvent)
    setIsCreateDialogOpen(false)
    setNewEvent({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      type: "",
      maxAttendees: "",
      registrationDeadline: ""
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Events Management</h1>
          <p className="text-muted-foreground">Create and manage customer events and workshops</p>
        </div>
        
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Event</DialogTitle>
              <DialogDescription>
                Set up a new event for your customers and team members
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title</Label>
                <Input
                  id="title"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                  placeholder="Enter event title"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="type">Event Type</Label>
                <Select value={newEvent.type} onValueChange={(value) => setNewEvent({...newEvent, type: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                  placeholder="Describe your event"
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={newEvent.time}
                  onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={newEvent.location}
                  onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                  placeholder="Virtual Event or Physical Address"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="maxAttendees">Max Attendees</Label>
                <Input
                  id="maxAttendees"
                  type="number"
                  value={newEvent.maxAttendees}
                  onChange={(e) => setNewEvent({...newEvent, maxAttendees: e.target.value})}
                  placeholder="100"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="registrationDeadline">Registration Deadline</Label>
                <Input
                  id="registrationDeadline"
                  type="date"
                  value={newEvent.registrationDeadline}
                  onChange={(e) => setNewEvent({...newEvent, registrationDeadline: e.target.value})}
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateEvent}>
                Create Event
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2">
        <Filter className="w-4 h-4 text-muted-foreground" />
        <div className="flex gap-2">
          <Button
            variant={selectedFilter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedFilter("all")}
          >
            All Events
          </Button>
          {eventStatuses.map((status) => (
            <Button
              key={status.value}
              variant={selectedFilter === status.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(status.value)}
            >
              {status.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <Card key={event.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <div className="flex gap-2">
                    <Badge className={getTypeColor(event.type)}>
                      {eventTypes.find(t => t.value === event.type)?.label}
                    </Badge>
                    <Badge className={getStatusColor(event.status)}>
                      {eventStatuses.find(s => s.value === event.status)?.label}
                    </Badge>
                  </div>
                </div>
              </div>
              <CardDescription className="line-clamp-2">
                {event.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="truncate">{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>{event.attendees}/{event.maxAttendees} attendees</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="outline">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Send className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No events found</h3>
          <p className="text-muted-foreground mb-4">
            {selectedFilter === "all" 
              ? "Create your first event to get started" 
              : `No ${selectedFilter} events found`
            }
          </p>
          <Button onClick={() => setIsCreateDialogOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Create Event
          </Button>
        </div>
      )}
    </div>
  )
}