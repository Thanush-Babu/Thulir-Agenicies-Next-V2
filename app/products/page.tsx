"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CallToAction } from "@/components/call-to-action"
import { PageHero } from "@/components/page-hero"
import { SectionContainer } from "@/components/section-container"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PRODUCT_CATEGORIES } from "@/lib/constants"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Beaker,
  Microscope,
  Cog,
  Flag as Flask,
  Shield,
  Ruler,
  Scale,
  Stethoscope,
  CheckCircle,
  Truck,
  Award,
} from "lucide-react"

const iconMap = {
  Beaker,
  Microscope,
  Cog,
  Flask,
  Shield,
  Ruler,
  Scale,
  Stethoscope,
}

export default function ProductsPage() {
  const router = useRouter()

  const handleCategoryClick = () => {
    router.push('/products/items')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Our Products"
          description="Comprehensive range of laboratory supplies and equipment across 20+ categories. Quality products for research, healthcare, and industrial applications."
          buttons={[
            { text: "View all products", href: "/products/items", linkType: "path", variant: "secondary" }
          ]}
        />

        {/* Product Categories */}
        <SectionContainer background="white" id="product-categories">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Product Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our extensive range of laboratory supplies and equipment
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCT_CATEGORIES.map((category) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap] || Beaker
              return (
                <Card
                  key={category.id}
                  className="hover:shadow-lg transition-all hover:border-secondary cursor-pointer group"
                  onClick={handleCategoryClick}
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle>{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </SectionContainer>

        {/* Product Highlights */}
        <SectionContainer background="muted">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Products?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quality, reliability, and performance you can trust
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Quality Assured</h3>
                <p className="text-muted-foreground">
                  All products meet international standards with proper certifications and quality control.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Quick and reliable delivery across Tamil Nadu with proper packaging and handling.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Warranty & Support</h3>
                <p className="text-muted-foreground">
                  Comprehensive warranty coverage and technical support for all our products.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* Featured Products Section */}
        <SectionContainer background="white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Some of our most popular and trusted laboratory products.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Analytical Balance",
                category: "Weighing",
                image: "/products/analytical_balance.png",
                description: "High-precision analytical balance with 0.0001g readability",
              },
              {
                name: "UV-Vis Spectrophotometer",
                category: "Instruments",
                image: "/products/uv_vis_pectrophotometer.png",
                description: "Advanced spectrophotometer for accurate analysis",
              },
              {
                name: "Laboratory Glassware Set",
                category: "Glassware",
                image: "/products/laboratory_glassware_set.png",
                description: "Complete set of borosilicate glass laboratory ware",
              },
              {
                name: "Safety Cabinet",
                category: "Safety",
                image: "/products/safe_cabinet.png",
                description: "Class II biological safety cabinet with HEPA filtration",
              },
              {
                name: "pH Meter",
                category: "Measurement",
                image: "/products/pHmeter.png",
                description: "Digital pH meter with automatic temperature compensation",
              },
              {
                name: "Centrifuge",
                category: "Equipment",
                image: "/products/centrifuge.png",
                description: "High-speed refrigerated centrifuge for sample processing",
              },
            ].map((product) => (
              <Card key={product.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription className="text-xs text-primary">{product.category}</CardDescription>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link href="/products/items">Browse All Products</Link>
            </Button>
          </div>
        </SectionContainer>

        {/* CTA Section */}
        <CallToAction
          title="Need Specific Products?"
          description="Contact us for detailed product information, pricing, and availability. Our experts are ready to help you find the right solutions."
          buttons={[
            { text: "Request Quote", href: "/request-quote", linkType: "path", variant: "secondary" },
            { text: "Contact Us", href: "/contact", linkType: "path", variant: "secondary" },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}
