"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SectionContainer } from "@/components/section-container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useFormSubmission } from "@/lib/hooks/use-form-submission"
import { Plus, Trash2, CheckCircle } from "lucide-react"
import type { QuoteFormData } from "@/lib/types"

export default function RequestQuotePage() {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    products: [{ name: "", quantity: 1, specifications: "" }],
    budgetRange: "",
    timeline: "",
    additionalInfo: "",
  })

  const { isSubmitting, isSuccess, submitForm, reset } = useFormSubmission<QuoteFormData>()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitForm(formData, async (data) => {
      // Mock API call - replace with real API
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Quote request submitted:", data)
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleProductChange = (index: number, field: string, value: string | number) => {
    const updatedProducts = [...formData.products]
    updatedProducts[index] = { ...updatedProducts[index], [field]: value }
    setFormData((prev) => ({ ...prev, products: updatedProducts }))
  }

  const addProduct = () => {
    setFormData((prev) => ({
      ...prev,
      products: [...prev.products, { name: "", quantity: 1, specifications: "" }],
    }))
  }

  const removeProduct = (index: number) => {
    if (formData.products.length > 1) {
      setFormData((prev) => ({
        ...prev,
        products: prev.products.filter((_, i) => i !== index),
      }))
    }
  }

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      products: [{ name: "", quantity: 1, specifications: "" }],
      budgetRange: "",
      timeline: "",
      additionalInfo: "",
    })
    reset()
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <SectionContainer background="white">
            <div className="max-w-2xl mx-auto text-center py-12">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Quote Request Submitted!</h2>
              <p className="text-muted-foreground mb-8">
                Thank you for your quote request. Our sales team will review your requirements and get back to you with
                a detailed quotation within 24-48 hours.
              </p>
              <div className="bg-muted rounded-lg p-6 mb-8 text-left">
                <h3 className="font-semibold text-foreground mb-3">What happens next?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Our team will review your product requirements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    We'll prepare a detailed quotation with pricing and availability
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    You'll receive the quote via email within 24-48 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Our team will follow up to answer any questions
                  </li>
                </ul>
              </div>
              <Button onClick={handleReset} variant="brand" size="lg">
                Request Another Quote
              </Button>
            </div>
          </SectionContainer>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Request a Quote"
          description="Tell us about your laboratory equipment needs and we'll provide a customized quotation"
        />

        <SectionContainer background="white">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Please provide your contact details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 1234567890"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Institution</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your organization"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Product Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Requirements</CardTitle>
                  <CardDescription>List the products you need</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {formData.products.map((product, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg space-y-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-foreground">Product {index + 1}</h4>
                        {formData.products.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeProduct(index)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`product-name-${index}`}>
                            Product Name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id={`product-name-${index}`}
                            value={product.name}
                            onChange={(e) => handleProductChange(index, "name", e.target.value)}
                            required
                            placeholder="e.g., Analytical Balance"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`product-quantity-${index}`}>
                            Quantity <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id={`product-quantity-${index}`}
                            type="number"
                            min="1"
                            value={product.quantity}
                            onChange={(e) =>
                              handleProductChange(index, "quantity", Number.parseInt(e.target.value) || 1)
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`product-specs-${index}`}>Specifications (Optional)</Label>
                        <Textarea
                          id={`product-specs-${index}`}
                          value={product.specifications}
                          onChange={(e) => handleProductChange(index, "specifications", e.target.value)}
                          placeholder="Any specific requirements or specifications..."
                          rows={2}
                        />
                      </div>
                    </div>
                  ))}
                  <Button type="button" variant="outline" onClick={addProduct} className="w-full bg-transparent">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Another Product
                  </Button>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Additional Information</CardTitle>
                  <CardDescription>Help us understand your requirements better</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budgetRange">Budget Range (Optional)</Label>
                      <Select
                        value={formData.budgetRange}
                        onValueChange={(value) => handleSelectChange("budgetRange", value)}
                      >
                        <SelectTrigger id="budgetRange">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1lakh">Under ₹1 Lakh</SelectItem>
                          <SelectItem value="1-5lakh">₹1 - 5 Lakhs</SelectItem>
                          <SelectItem value="5-10lakh">₹5 - 10 Lakhs</SelectItem>
                          <SelectItem value="10-25lakh">₹10 - 25 Lakhs</SelectItem>
                          <SelectItem value="above-25lakh">Above ₹25 Lakhs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline (Optional)</Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) => handleSelectChange("timeline", value)}
                      >
                        <SelectTrigger id="timeline">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent (Within 1 week)</SelectItem>
                          <SelectItem value="1-2weeks">1-2 Weeks</SelectItem>
                          <SelectItem value="2-4weeks">2-4 Weeks</SelectItem>
                          <SelectItem value="1-2months">1-2 Months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      placeholder="Any other details that would help us prepare your quote..."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              <Button type="submit" variant="brand" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Quote Request"}
              </Button>
            </form>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  )
}
