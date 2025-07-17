import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Search, 
  ArrowRight, 
  Star, 
  Calendar, 
  Users, 
  Building2, 
  Zap, 
  Globe, 
  Smartphone,
  Database,
  Shield,
  Cpu,
  Heart,
  DollarSign,
  TrendingUp,
  Menu,
  X,
  Filter,
  MapPin,
  Clock,
  ExternalLink
} from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { name: 'Telecom', icon: Globe, count: 245, color: 'bg-blue-500' },
    { name: 'AI & ML', icon: Cpu, count: 189, color: 'bg-purple-500' },
    { name: 'SaaS', icon: Database, count: 312, color: 'bg-green-500' },
    { name: 'FinTech', icon: DollarSign, count: 156, color: 'bg-yellow-500' },
    { name: 'HealthTech', icon: Heart, count: 98, color: 'bg-red-500' },
    { name: 'Mobile Apps', icon: Smartphone, count: 267, color: 'bg-indigo-500' },
    { name: 'Security', icon: Shield, count: 134, color: 'bg-gray-500' },
    { name: 'Analytics', icon: TrendingUp, count: 178, color: 'bg-orange-500' }
  ]

  const featuredSolutions = [
    {
      id: 1,
      name: 'CloudScale Pro',
      category: 'SaaS',
      description: 'Enterprise cloud infrastructure management platform with AI-powered optimization.',
      rating: 4.8,
      reviews: 234,
      price: 'From $99/month',
      image: '/api/placeholder/300/200',
      verified: true,
      tags: ['Cloud', 'AI', 'Enterprise']
    },
    {
      id: 2,
      name: 'SecureVault',
      category: 'Security',
      description: 'Next-generation cybersecurity solution with real-time threat detection.',
      rating: 4.9,
      reviews: 189,
      price: 'From $149/month',
      image: '/api/placeholder/300/200',
      verified: true,
      tags: ['Security', 'AI', 'Real-time']
    },
    {
      id: 3,
      name: 'DataFlow Analytics',
      category: 'Analytics',
      description: 'Advanced business intelligence platform with predictive analytics.',
      rating: 4.7,
      reviews: 156,
      price: 'From $79/month',
      image: '/api/placeholder/300/200',
      verified: true,
      tags: ['Analytics', 'BI', 'Predictive']
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI in Enterprise: Future Trends',
      date: '2024-01-25',
      time: '2:00 PM EST',
      type: 'Webinar',
      attendees: 1247,
      speaker: 'Dr. Sarah Chen, AI Research Lead',
      category: 'AI & ML'
    },
    {
      id: 2,
      title: 'FinTech Innovation Summit',
      date: '2024-01-28',
      time: '10:00 AM EST',
      type: 'Conference',
      attendees: 3456,
      speaker: 'Multiple Industry Leaders',
      category: 'FinTech'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices',
      date: '2024-02-02',
      time: '3:00 PM EST',
      type: 'Workshop',
      attendees: 892,
      speaker: 'Mike Rodriguez, Security Expert',
      category: 'Security'
    }
  ]

  const startupShowcase = [
    {
      id: 1,
      name: 'NeuralFlow',
      description: 'AI-powered workflow automation for enterprises',
      funding: '$2.5M Series A',
      stage: 'Growth',
      location: 'San Francisco, CA',
      employees: '25-50',
      tags: ['AI', 'Automation', 'Enterprise']
    },
    {
      id: 2,
      name: 'HealthSync',
      description: 'Digital health platform connecting patients and providers',
      funding: '$1.8M Seed',
      stage: 'Early',
      location: 'Boston, MA',
      employees: '10-25',
      tags: ['HealthTech', 'Platform', 'B2B']
    },
    {
      id: 3,
      name: 'CryptoGuard',
      description: 'Blockchain security and compliance solutions',
      funding: '$4.2M Series A',
      stage: 'Growth',
      location: 'New York, NY',
      employees: '50-100',
      tags: ['Security', 'Blockchain', 'Compliance']
    }
  ]

  const exclusiveOffers = [
    {
      id: 1,
      title: '50% Off CloudScale Pro',
      description: 'First 6 months at 50% discount for new enterprise customers',
      originalPrice: '$199',
      discountPrice: '$99',
      validUntil: '2024-02-15',
      company: 'CloudScale',
      claimed: 45,
      maxClaims: 100
    },
    {
      id: 2,
      title: 'Free Security Audit',
      description: 'Complimentary cybersecurity assessment worth $2,500',
      originalPrice: '$2,500',
      discountPrice: 'Free',
      validUntil: '2024-02-28',
      company: 'SecureVault',
      claimed: 23,
      maxClaims: 50
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">TechHub</span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="#marketplace" className="text-foreground hover:text-primary transition-colors">Marketplace</a>
                  <a href="#events" className="text-foreground hover:text-primary transition-colors">Events</a>
                  <a href="#startups" className="text-foreground hover:text-primary transition-colors">Startups</a>
                  <a href="#offers" className="text-foreground hover:text-primary transition-colors">Offers</a>
                  <a href="#community" className="text-foreground hover:text-primary transition-colors">Community</a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Button variant="ghost">Sign In</Button>
                <Button>Join TechHub</Button>
              </div>
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
              <a href="#marketplace" className="block px-3 py-2 text-foreground hover:text-primary">Marketplace</a>
              <a href="#events" className="block px-3 py-2 text-foreground hover:text-primary">Events</a>
              <a href="#startups" className="block px-3 py-2 text-foreground hover:text-primary">Startups</a>
              <a href="#offers" className="block px-3 py-2 text-foreground hover:text-primary">Offers</a>
              <a href="#community" className="block px-3 py-2 text-foreground hover:text-primary">Community</a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" className="w-full">Sign In</Button>
                <Button className="w-full">Join TechHub</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              🚀 Discover the Future of Technology
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Your Gateway to
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tech Innovation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Connect with cutting-edge solutions across Telecom, AI, SaaS, FinTech, and more. 
              Discover startups, attend exclusive events, and unlock special offers.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search technologies, solutions, or companies..."
                  className="pl-12 pr-4 py-6 text-lg border-2 border-border focus:border-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Explore Marketplace
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Browse Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section id="marketplace" className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover innovative solutions across 10+ technology categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Card key={category.name} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} solutions</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Featured Solutions
              </h2>
              <p className="text-xl text-muted-foreground">
                Top-rated technologies trusted by enterprises
              </p>
            </div>
            <Button variant="outline">
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSolutions.map((solution) => (
              <Card key={solution.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-primary/50" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{solution.name}</h3>
                      <Badge variant="secondary" className="text-xs">{solution.category}</Badge>
                    </div>
                    {solution.verified && (
                      <Badge className="bg-green-100 text-green-800">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{solution.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({solution.reviews} reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {solution.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">{solution.price}</span>
                    <Button size="sm">
                      Learn More
                      <ExternalLink className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Upcoming Events & Webinars
              </h2>
              <p className="text-xl text-muted-foreground">
                Learn from industry experts and network with peers
              </p>
            </div>
            <Button variant="outline">
              View Calendar
              <Calendar className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{event.type}</Badge>
                    <Badge variant="secondary">{event.category}</Badge>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees.toLocaleString()} registered
                    </div>
                    <p className="text-sm font-medium">{event.speaker}</p>
                    <Button className="w-full">
                      Register Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Ecosystem */}
      <section id="startups" className="py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Startup Ecosystem
              </h2>
              <p className="text-xl text-muted-foreground">
                Discover emerging companies and investment opportunities
              </p>
            </div>
            <Button variant="outline">
              Browse All Startups
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {startupShowcase.map((startup) => (
              <Card key={startup.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{startup.name}</CardTitle>
                    <Badge variant="outline">{startup.stage}</Badge>
                  </div>
                  <CardDescription>{startup.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <DollarSign className="w-4 h-4 mr-2 text-green-600" />
                      <span className="font-medium">{startup.funding}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {startup.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      {startup.employees} employees
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {startup.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <Button className="w-full" variant="outline">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Offers */}
      <section id="offers" className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Exclusive Startup Offers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Special deals and discounts available only to TechHub members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {exclusiveOffers.map((offer) => (
              <Card key={offer.id} className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-red-100 text-red-800">Limited Time</Badge>
                    <span className="text-sm text-muted-foreground">
                      {offer.claimed}/{offer.maxClaims} claimed
                    </span>
                  </div>
                  <CardTitle className="text-xl">{offer.title}</CardTitle>
                  <CardDescription>{offer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-primary">{offer.discountPrice}</span>
                      {offer.originalPrice !== 'Free' && (
                        <span className="text-lg text-muted-foreground line-through">{offer.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      Valid until {offer.validUntil}
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(offer.claimed / offer.maxClaims) * 100}%` }}
                      />
                    </div>
                    <Button className="w-full">
                      Claim Offer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Discover Your Next Tech Solution?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of businesses already using TechHub to find innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Join TechHub Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TechHub</span>
              </div>
              <p className="text-muted-foreground">
                Your gateway to technology innovation and business growth.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Marketplace</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Browse Solutions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Categories</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Vendor Directory</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Startups</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Partnerships</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Networking</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 TechHub Discovery Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App