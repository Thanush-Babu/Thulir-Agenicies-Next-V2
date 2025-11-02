import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CallToAction } from "@/components/call-to-action"
import { PageHero } from "@/components/page-hero"
import { SectionContainer } from "@/components/section-container"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, TrendingUp, Target, Package } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="About Thulir Agency"
          description="Your trusted partner in laboratory supplies and equipment, serving research institutions, hospitals, and industries across Tamil Nadu since our establishment."
        />

        {/* Company Story */}
        <SectionContainer background="white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/professional-laboratory-team-working-with-equipmen.jpg"
                alt="Our Team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a vision to bridge the gap between quality laboratory supplies and research institutions,
                Thulir Agency has grown to become one of the most trusted names in laboratory equipment and supplies
                across Tamil Nadu.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We understand the critical nature of laboratory work and the importance of reliable, high-quality
                equipment. That's why we partner with leading manufacturers and maintain strict quality control
                standards for all our products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of experienced professionals is dedicated to providing not just products, but comprehensive
                solutions that meet the unique needs of each laboratory.
              </p>
            </div>
          </div>
        </SectionContainer>

        {/* Stats Section */}
        <SectionContainer background="muted">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Package className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>

        {/* Values Section */}
        <SectionContainer background="white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Every product we supply meets the highest international standards.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Customer Focus</h3>
              <p className="text-muted-foreground">
                Your success is our success. We provide personalized service and support to meet your unique needs.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                We stay ahead of the curve, bringing you the latest technologies and solutions in laboratory science.
              </p>
            </div>
          </div>
        </SectionContainer>

        {/* CTA Section */}
        <CallToAction
          title="Ready to Work With Us?"
          description="Contact us today to discuss your laboratory supply needs and discover how we can help."
          buttons={[
            { text: "Contact Us", href: "/contact", linkType: "path", variant: "secondary" },
            { text: "View Products", href: "/products", linkType: "path", variant: "secondary", },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}
