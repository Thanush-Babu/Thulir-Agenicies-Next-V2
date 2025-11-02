import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CallToAction } from "@/components/call-to-action"
import { SectionContainer } from "@/components/section-container"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Beaker, Shield, Headphones, Package, Award, TrendingUp, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-[#7a4d15] py-20 lg:py-32 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

          <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                  <Sparkles className="h-4 w-4" />
                  Thulir Agency
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
                  Empowering Labs Across <span className="text-secondary">Tamil Nadu</span>
                </h1>
                <p className="text-lg text-white/70 leading-relaxed text-pretty">
                  Your complete laboratory supply partner with 5000+ products across 20+ categories. Serving research
                  institutions, hospitals, and industries across Tamil Nadu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild variant="brand" size="lg" className="!bg-[#fd9414] shadow-lg shadow-secondary/20">
                    <Link href="/request-quote">Request Quote</Link>
                  </Button>
                  <Button asChild variant="brandOutline" size="lg" className="shadow-lg shadow-secondary/20">
                    <Link href="/products" className="text-white">Explore Products</Link>
                  </Button>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent">
                      5000+
                    </div>
                    <div className="text-sm text-white/70">Products</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent">
                      20+
                    </div>
                    <div className="text-sm text-white/70">Categories</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent">
                      500+
                    </div>
                    <div className="text-sm text-white/70">Happy Clients</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-lg blur-2xl" />
                <img
                  src="/modern-laboratory-with-scientific-equipment-and-gl.jpg"
                  alt="Laboratory Equipment"
                  className="rounded-lg shadow-2xl relative border border-border/50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <SectionContainer background="white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Thulir?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive laboratory solutions with unmatched quality and service
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-secondary/50 transition-all hover:shadow-lg group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Package className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Wide Product Range</CardTitle>
                <CardDescription>
                  5000+ products across 20+ categories including chemicals, glassware, and equipment
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-secondary/50 transition-all hover:shadow-lg group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Quality Assured</CardTitle>
                <CardDescription>
                  All products meet international standards with proper certifications and warranties
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-secondary/50 transition-all hover:shadow-lg group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Headphones className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Expert Support</CardTitle>
                <CardDescription>
                  Technical support and consultation from experienced laboratory professionals
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </SectionContainer>

        {/* Product Categories Preview */}
        <SectionContainer background="muted">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Explore Our Product Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From basic glassware to advanced analytical instruments, we have everything your lab needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Glassware", icon: Beaker, count: "200+", gradient: "from-blue-500/10 to-cyan-500/10" },
              { name: "Instruments", icon: TrendingUp, count: "150+", gradient: "from-purple-500/10 to-pink-500/10" },
              {
                name: "Safety Equipment",
                icon: Shield,
                count: "180+",
                gradient: "from-green-500/10 to-emerald-500/10",
              },
              { name: "Chemicals", icon: Beaker, count: "300+", gradient: "from-orange-500/10 to-red-500/10" },
            ].map((category) => (
              <Card
                key={category.name}
                className="hover:shadow-xl transition-all cursor-pointer group border-2 hover:border-secondary/30 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                />
                <CardHeader className="text-center relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <category.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="group-hover:text-secondary transition-colors">{category.name}</CardTitle>
                  <CardDescription>{category.count} Products</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="brand" size="lg" className="shadow-lg shadow-secondary/20">
              <Link href="/products">View All Categories</Link>
            </Button>
          </div>
        </SectionContainer>

        {/* CTA Section */}
        <CallToAction
          title="Ready to Get Started?"
          description="Contact us today for a personalized quote and discover how we can support your laboratory needs."
          buttons={[
            { text: "Contact Us", href: "/contact", linkType: "path", variant: "secondary" },
            { text: "Learn More", href: "/about", linkType: "path", variant: "secondary" },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}
