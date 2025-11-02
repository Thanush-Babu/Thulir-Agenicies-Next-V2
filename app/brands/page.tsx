import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CallToAction } from "@/components/call-to-action"
import { PageHero } from "@/components/page-hero"
import { SectionContainer } from "@/components/section-container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PARTNER_BRANDS } from "@/lib/constants"
import { Award, Shield, TrendingUp, Package } from "lucide-react"

function getBrandImagePath(brandName: string) {
  const slug = brandName
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
  return `/brands/${slug}.png`
}

function getBrandImageSrcFromBrand(brand: { name: string; image?: string | { src?: string } }): string {
  if (brand.image) {
    if (typeof brand.image === 'string') return brand.image
    if (typeof brand.image === 'object' && brand.image.src && typeof brand.image.src === 'string') {
      return brand.image.src
    }
  }
  return getBrandImagePath(brand.name)
}

export default function BrandsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Our Partner Brands"
          description="We partner with world-renowned manufacturers and brands to provide you with the highest quality laboratory supplies and equipment. Each brand is carefully selected for their commitment to excellence and innovation."
        />

        {/* Partner Brands Grid */}
        <SectionContainer background="white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Trusted Manufacturers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quality products from leading global and Indian manufacturers
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNER_BRANDS.map((brand) => (
              <Card key={brand.name} className="hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <img
                    src={getBrandImageSrcFromBrand(brand as any)}
                    alt={`${brand.name} logo`}
                    className="w-full h-32 object-contain rounded-md mb-4 bg-muted"
                  />
                  <CardTitle className="text-xl group-hover:text-secondary transition-colors">{brand.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {brand.category}
                  </Badge>
                  <CardDescription className="mt-2">{brand.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Key Products:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {brand.keyProducts.map((product) => (
                        <li key={product} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionContainer>

        {/* Why Partner With Us */}
        <SectionContainer background="muted">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Partner With Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide value to both our customers and brand partners
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Quality Assurance</h3>
              <p className="text-muted-foreground">
                We only partner with manufacturers who meet our strict quality standards and international
                certifications.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Warranty & Support</h3>
              <p className="text-muted-foreground">
                All products come with manufacturer warranty and our dedicated technical support team.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Proven Track Record</h3>
              <p className="text-muted-foreground">
                Years of experience serving research institutions, hospitals, and industries across Tamil Nadu.
              </p>
            </div>
          </div>
        </SectionContainer>

        {/* Product Categories */}
        <SectionContainer background="white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Product Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of products across all major laboratory categories
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Analytical Instruments",
              "Laboratory Equipment",
              "Chemicals & Reagents",
              "Weighing & Measurement",
              "Laboratory Glassware",
              "Laboratory Consumables",
              "Filtration & Separation",
              "Scientific Instruments",
            ].map((category) => (
              <Card key={category} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Package className="h-6 w-6 text-secondary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionContainer>

        {/* CTA Section */}
        <CallToAction
          title="Need Specific Brand Products?"
          description="Contact us for detailed information about any specific brand or product. Our team can help you find the right solutions for your laboratory needs."
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
