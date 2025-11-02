import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CallToAction } from "@/components/call-to-action"
import { PageHero } from "@/components/page-hero"
import { SectionContainer } from "@/components/section-container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SUPPORT_SERVICES, COMPANY_INFO } from "@/lib/constants"
import { Settings, BookOpen, Users, Headphones, Phone, Mail, Clock, ArrowRight } from "lucide-react"

const iconMap = {
  Settings,
  BookOpen,
  Users,
  Headphones,
}

export default function TechnicalSupportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Technical Support"
          description="Expert technical assistance for all your laboratory equipment needs"
        />

        {/* Support Services */}
        <SectionContainer background="white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Support Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technical support to ensure your laboratory equipment operates at peak performance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUPPORT_SERVICES.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Settings
              return (
                <Card key={service.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </SectionContainer>

        {/* Contact Information */}
        <SectionContainer background="muted">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our technical support team is ready to assist you with any questions or issues.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Phone Support</h3>
                <p className="text-sm text-muted-foreground mb-2">{COMPANY_INFO.phone}</p>
                <p className="text-xs text-muted-foreground">Available during business hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-2">{COMPANY_INFO.email}</p>
                <p className="text-xs text-muted-foreground">Response within 24 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>{COMPANY_INFO.businessHours.weekdays}</p>
                  <p>{COMPANY_INFO.businessHours.saturday}</p>
                  <p>{COMPANY_INFO.businessHours.sunday}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Closed on Sundays</p>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>

        {/* Common Issues */}
        <SectionContainer background="white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Common Technical Issues</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick solutions to frequently encountered problems with laboratory equipment.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                issue: "Equipment Calibration",
                solution: "Regular calibration ensures accuracy. Contact us for scheduled calibration services.",
              },
              {
                issue: "Software Updates",
                solution: "Keep your instrument software up to date for optimal performance and new features.",
              },
              {
                issue: "Maintenance Schedules",
                solution: "Follow recommended maintenance schedules to prevent downtime and extend equipment life.",
              },
              {
                issue: "Error Codes",
                solution: "Refer to your equipment manual or contact our support team for error code interpretation.",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    {item.issue}
                  </CardTitle>
                  <CardDescription>{item.solution}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </SectionContainer>

        {/* Support Process */}
        <SectionContainer background="muted">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Support Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined process to resolve your technical issues quickly and efficiently.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Contact", description: "Reach out via phone, email, or contact form" },
              { step: "2", title: "Assessment", description: "Our team evaluates your technical issue" },
              { step: "3", title: "Implementation", description: "We provide solutions or on-site support" },
              { step: "4", title: "Follow-up", description: "Ensure the issue is fully resolved" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </SectionContainer>

        {/* CTA Section */}
        <CallToAction
          title="Need Technical Support?"
          description="Our expert team is here to help you resolve any technical issues with your laboratory equipment."
          buttons={[
            { text: "Contact Support", href: "/contact", linkType: "path", variant: "secondary" },
            { text: "Request Quote", href: "/request-quote", linkType: "path", variant: "secondary" },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}
