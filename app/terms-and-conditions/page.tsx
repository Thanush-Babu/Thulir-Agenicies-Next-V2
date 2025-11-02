import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SectionContainer } from "@/components/section-container"
import { Card, CardContent } from "@/components/ui/card"
import { CallToAction } from "@/components/call-to-action"

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Terms & Conditions"
          description="The terms governing the use of our website, products, and services."
        />

        <SectionContainer background="white">
          <div className="space-y-8">
            <Card>
              <CardContent className="pt-6 space-y-4 text-muted-foreground">
                <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using this website, you agree to be bound by these Terms & Conditions and our
                  Privacy Policy. If you do not agree, please discontinue use of the website.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4 text-muted-foreground">
                <h2 className="text-2xl font-semibold text-foreground">2. Products & Services</h2>
                <p>
                  Product details, availability, specifications, and pricing are subject to change without prior notice.
                  Quotations are valid for the period specified and subject to standard commercial terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4 text-muted-foreground">
                <h2 className="text-2xl font-semibold text-foreground">3. Orders, Payment & Delivery</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Orders are confirmed upon written acceptance or purchase order.</li>
                  <li>Payment terms will be as agreed in the quotation or invoice.</li>
                  <li>Delivery timelines are estimates and may vary due to logistics and availability.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4 text-muted-foreground">
                <h2 className="text-2xl font-semibold text-foreground">4. Warranty & Returns</h2>
                <p>
                  Products are covered by manufacturer warranty where applicable. Returns are subject to inspection and
                  approval, and must comply with our returns policy and timelines.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4 text-muted-foreground">
                <h2 className="text-2xl font-semibold text-foreground">5. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Thulir Agency is not liable for indirect, incidental, or
                  consequential damages arising from the use of our products or services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4 text-muted-foreground">
                <h2 className="text-2xl font-semibold text-foreground">6. Intellectual Property</h2>
                <p>
                  All content on this website, including logos, text, and images, is owned by Thulir Agency or our
                  partners and protected by applicable intellectual property laws.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4 text-muted-foreground">
                <h2 className="text-2xl font-semibold text-foreground">7. Governing Law</h2>
                <p>
                  These Terms & Conditions are governed by the laws of India. Disputes shall be subject to the
                  jurisdiction of the courts located in Chennai, Tamil Nadu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4 text-muted-foreground">
                <h2 className="text-2xl font-semibold text-foreground">8. Contact</h2>
                <p>
                  For questions regarding these terms, please contact us at <strong>info@thulir.com</strong> or call
                  <strong>+91 868 181 8142</strong>.
                </p>
                <p className="text-xs">Last updated: {new Date().getFullYear()}</p>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>

        <CallToAction
          title="Need more information?"
          description="Talk to our team about products, terms, or service arrangements."
          buttons={[
            { text: "Contact Us", href: "/contact", linkType: "path", variant: "secondary" },
            { text: "Request Quote", href: "/request-quote", linkType: "path", variant: "secondary" },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}


