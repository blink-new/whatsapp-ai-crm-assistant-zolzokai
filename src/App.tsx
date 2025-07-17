import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  ArrowRight, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Zap, 
  Shield, 
  Globe, 
  CheckCircle,
  Star,
  Menu,
  X,
  Building2,
  Workflow,
  Database,
  Smartphone
} from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
                  <span className="text-xl font-bold">UnifiedBiz</span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
                  <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
                  <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
                  <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Button variant="ghost">Sign In</Button>
                <Button>Get Started</Button>
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
              <a href="#features" className="block px-3 py-2 text-foreground hover:text-primary">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-foreground hover:text-primary">Pricing</a>
              <a href="#testimonials" className="block px-3 py-2 text-foreground hover:text-primary">Testimonials</a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary">Contact</a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" className="w-full">Sign In</Button>
                <Button className="w-full">Get Started</Button>
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
              🚀 All-in-One Business Solution
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Unify Your Business
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Operations Today
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stop juggling multiple tools. Our unified platform brings together CRM, project management, 
              communication, analytics, and automation in one seamless experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything Your Business Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to streamline your operations and accelerate growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Advanced CRM",
                description: "Manage customers, track interactions, and nurture relationships with intelligent automation."
              },
              {
                icon: Workflow,
                title: "Project Management",
                description: "Plan, execute, and deliver projects on time with collaborative tools and real-time tracking."
              },
              {
                icon: MessageSquare,
                title: "Team Communication",
                description: "Centralized messaging, video calls, and file sharing to keep your team connected."
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Data-driven insights with customizable dashboards and automated reporting."
              },
              {
                icon: Zap,
                title: "Workflow Automation",
                description: "Automate repetitive tasks and create custom workflows to boost productivity."
              },
              {
                icon: Database,
                title: "Unified Database",
                description: "Single source of truth for all your business data with powerful search and filtering."
              }
            ].map((feature, index) => (
              <Card key={index} className="feature-card-hover border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with your favorite tools and services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              "Slack", "Google Workspace", "Microsoft 365", "Salesforce", "HubSpot", "Zoom",
              "Stripe", "PayPal", "Shopify", "WordPress", "Mailchimp", "Dropbox"
            ].map((integration, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-sm font-medium text-muted-foreground">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$29",
                description: "Perfect for small teams",
                features: [
                  "Up to 5 team members",
                  "Basic CRM & project management",
                  "5GB storage",
                  "Email support",
                  "Mobile apps"
                ]
              },
              {
                name: "Professional",
                price: "$79",
                description: "For growing businesses",
                features: [
                  "Up to 25 team members",
                  "Advanced analytics",
                  "50GB storage",
                  "Priority support",
                  "Custom integrations",
                  "Workflow automation"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "$199",
                description: "For large organizations",
                features: [
                  "Unlimited team members",
                  "Advanced security",
                  "Unlimited storage",
                  "24/7 phone support",
                  "Custom development",
                  "Dedicated account manager"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold">
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground">/month</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our customers have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                content: "UnifiedBiz transformed how we operate. We've seen 40% increase in productivity since switching.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Operations Manager, GrowthCo",
                content: "The integration capabilities are outstanding. Everything we need in one place.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Founder, CreativeStudio",
                content: "Best investment we've made. The automation features alone saved us 20 hours per week.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of businesses already using UnifiedBiz to streamline their operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              Contact Sales
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
                <span className="text-xl font-bold">UnifiedBiz</span>
              </div>
              <p className="text-muted-foreground">
                The all-in-one business platform that grows with you.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 UnifiedBiz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App