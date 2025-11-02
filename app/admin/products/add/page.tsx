"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProtectedRoute } from "@/components/protected-route"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useDataStore } from "@/lib/store/data-store"
import { PRODUCT_CATEGORIES } from "@/lib/constants"
import { Plus, Trash2, Upload, X, CheckCircle } from "lucide-react"
import type { Product } from "@/lib/types"

export default function AddProductPage() {
  const router = useRouter()
  const { createProduct, loading } = useDataStore()

  const [formData, setFormData] = useState<Omit<Product, "_id"> & { images: File[] }>({
    name: "",
    description: "",
    category: "",
    subcategory: "",
    model: "",
    specifications: {},
    images: [],
    isAvailable: true,
    sku: undefined,
    tags: [],
    featured: false,
    sortOrder: 0,
    createdAt: "",
    updatedAt: "",
    createdBy: undefined,
    updatedBy: undefined,
  })

  const [imageFiles, setImageFiles] = useState<File[]>([])
  const [imagePreviews, setImagePreviews] = useState<string[]>([])

  const [currentTag, setCurrentTag] = useState("")
  const [currentSpecKey, setCurrentSpecKey] = useState("")
  const [currentSpecValue, setCurrentSpecValue] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Transform data to match backend format
    const backendData = {
      ...formData,
      specifications: JSON.stringify(formData.specifications),
      images: imageFiles, // File objects for upload
    }
    
    const success = await createProduct(backendData)
    if (success) {
      setIsSuccess(true)
      setTimeout(() => {
        router.push("/admin/dashboard")
      }, 2000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const addTag = () => {
    if (currentTag.trim() && !formData.tags?.includes(currentTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...(prev.tags || []), currentTag.trim()],
      }))
      setCurrentTag("")
    }
  }

  const removeTag = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags?.filter((t) => t !== tag) || [],
    }))
  }

  const addSpecification = () => {
    if (currentSpecKey.trim() && currentSpecValue.trim()) {
      setFormData((prev) => ({
        ...prev,
        specifications: {
          ...prev.specifications,
          [currentSpecKey.trim()]: currentSpecValue.trim(),
        },
      }))
      setCurrentSpecKey("")
      setCurrentSpecValue("")
    }
  }

  const removeSpecification = (key: string) => {
    setFormData((prev) => {
      const newSpecs = { ...prev.specifications }
      delete newSpecs[key]
      return { ...prev, specifications: newSpecs }
    })
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newFiles = Array.from(files)
      const newPreviews = newFiles.map((file) => URL.createObjectURL(file))
      
      setImageFiles((prev) => [...prev, ...newFiles])
      setImagePreviews((prev) => [...prev, ...newPreviews])
    }
  }

  const removeImage = (index: number) => {
    // Revoke the blob URL to free memory
    URL.revokeObjectURL(imagePreviews[index])
    
    setImageFiles((prev) => prev.filter((_, i) => i !== index))
    setImagePreviews((prev) => prev.filter((_, i) => i !== index))
  }

  if (isSuccess) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex items-center justify-center bg-muted py-12">
            <div className="max-w-md text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Product Added Successfully!</h2>
              <p className="text-muted-foreground mb-6">The product has been added to the catalog.</p>
              <p className="text-sm text-muted-foreground">Redirecting to dashboard...</p>
            </div>
          </main>
          <Footer />
        </div>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-muted">
          <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
            <Breadcrumb 
              items={[
                { label: "Products", href: "/admin/dashboard" },
                { label: "Add Product" }
              ]} 
              className="mb-6" 
            />
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground">Add New Product</h1>
              <p className="text-muted-foreground mt-1">Fill in the details to add a new product to the catalog</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                // ensure isAvailable is always true
                setFormData((prev) => ({ ...prev, isAvailable: true }))
                // then proceed
                void (async () => {
                  const productData = {
                    ...formData,
                    isAvailable: true,
                    specifications: JSON.stringify(formData.specifications),
                    images: imageFiles, // Send actual File objects
                  }
                  const success = await createProduct(productData)
                  if (success) {
                    setIsSuccess(true)
                    setTimeout(() => {
                      router.push("/admin/dashboard")
                    }, 2000)
                  }
                })()
              }}
              className="space-y-6"
            >
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>Enter the basic product details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Product Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Analytical Balance"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">
                        Category <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => handleSelectChange("category", value)}
                        required
                      >
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {PRODUCT_CATEGORIES.map((cat) => (
                            <SelectItem key={cat.id} value={cat.name}>
                              {cat.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subcategory">Subcategory</Label>
                      <Input
                        id="subcategory"
                        name="subcategory"
                        value={formData.subcategory || ""}
                        onChange={handleChange}
                        placeholder="e.g., Analytical"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="model">Model</Label>
                      <Input
                        id="model"
                        name="model"
                        value={formData.model || ""}
                        onChange={handleChange}
                        placeholder="e.g., UV-1900i"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Detailed product description..."
                      rows={4}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="featured"
                      name="featured"
                      checked={!!formData.featured}
                      onChange={handleChange}
                      className="rounded border-input"
                    />
                    <Label htmlFor="featured" className="cursor-pointer">
                      Featured product
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                  <CardDescription>Add tags to help categorize the product</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      placeholder="Enter tag"
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                    />
                    <Button type="button" onClick={addTag} variant="outline" className="bg-transparent">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  {formData.tags && formData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {formData.tags.map((tag) => (
                        <div
                          key={tag}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2"
                        >
                          {tag}
                          <button type="button" onClick={() => removeTag(tag)} className="hover:text-primary/80">
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Specifications</CardTitle>
                  <CardDescription>Add technical specifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-2">
                    <Input
                      value={currentSpecKey}
                      onChange={(e) => setCurrentSpecKey(e.target.value)}
                      placeholder="Specification name"
                    />
                    <div className="flex gap-2">
                      <Input
                        value={currentSpecValue}
                        onChange={(e) => setCurrentSpecValue(e.target.value)}
                        placeholder="Value"
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSpecification())}
                      />
                      <Button type="button" onClick={addSpecification} variant="outline" className="bg-transparent">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  {formData.specifications && Object.keys(formData.specifications).length > 0 && (
                    <div className="space-y-2">
                      {Object.entries(formData.specifications).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-3 bg-muted rounded-md">
                          <div>
                            <span className="font-medium text-foreground">{key}:</span>{" "}
                            <span className="text-muted-foreground">{value}</span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeSpecification(key)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Images */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Images</CardTitle>
                  <CardDescription>Upload product images</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="images" className="cursor-pointer">
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                        <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Click to upload images</p>
                      </div>
                    </Label>
                    <Input
                      id="images"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                  {imagePreviews.length > 0 && (
                    <div className="grid grid-cols-3 gap-4">
                      {imagePreviews.map((preview, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={preview}
                            alt={`Product ${index + 1}`}
                            className="w-full h-32 object-cover rounded-md"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Submit Buttons */}
              <div className="flex gap-4">
                <Button type="submit" variant="brand" size="lg" className="flex-1" disabled={loading}>
                  {loading ? "Adding Product..." : "Add Product"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => router.push("/admin/dashboard")}
                  className="bg-transparent"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  )
}
