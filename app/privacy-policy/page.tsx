import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SectionContainer } from "@/components/section-container"
import { Card, CardContent } from "@/components/ui/card"
import { CallToAction } from "@/components/call-to-action"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Privacy Policy"
          description="How we collect, use, and protect your information at Thulir Agency."
        />

        <SectionContainer background="white">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardContent className="pt-6 space-y-4 text-muted-foreground">
                  <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
                  <p>
                    We collect information you provide directly (such as name, email, phone, and organization)
                    when you contact us, request a quote, or use our services. We also collect limited technical
                    data (such as device, browser, and usage analytics) to improve our website performance.
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Contact details and correspondence</li>
                    <li>Company and role information (if provided)</li>
                    <li>Usage analytics and technical diagnostics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4 text-muted-foreground">
                  <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
                  <p>
                    We use your information to respond to inquiries, provide quotations, fulfill service requests,
                    improve our offerings, and communicate important updates related to your interests.
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Responding to product and service inquiries</li>
                    <li>Processing quote requests and orders</li>
                    <li>Improving our website, products, and customer support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4 text-muted-foreground">
                  <h2 className="text-2xl font-semibold text-foreground">3. Data Sharing & Disclosure</h2>
                  <p>
                    We do not sell your personal data. We may share information with trusted service providers to
                    operate our business (e.g., hosting, analytics) under strict confidentiality and data protection
                    commitments, or when required by law.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4 text-muted-foreground">
                  <h2 className="text-2xl font-semibold text-foreground">4. Data Security & Retention</h2>
                  <p>
                    We implement reasonable technical and organizational measures to protect your data and retain it
                    only as long as necessary for the purposes outlined in this policy or as required by law.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4 text-muted-foreground">
                  <h2 className="text-2xl font-semibold text-foreground">5. Your Rights</h2>
                  <p>
                    Depending on your jurisdiction, you may have rights to access, correct, or delete your personal
                    information. To exercise these rights, please contact us using the details below.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4 text-muted-foreground">
                  <h2 className="text-2xl font-semibold text-foreground">6. Contact Us</h2>
                  <p>
                    For any privacy-related questions or requests, reach us at <strong>info@thulir.com</strong> or
                    call <strong>+91 868 181 8142</strong>.
                  </p>
                  <p className="text-xs">Last updated: {new Date().getFullYear()}</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6 text-muted-foreground space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">Scope</h3>
                  <p>This policy covers personal information processed by Thulir Agency via our website.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-muted-foreground space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">Cookies</h3>
                  <p>We use minimal cookies for essential functionality and performance analytics.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionContainer>

        <CallToAction
          title="Questions about your data?"
          description="Contact our team for clarifications or to submit a data request."
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


