"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SectionContainer } from "@/components/section-container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { useDataStore } from "@/lib/store/data-store"
import { Product } from "@/lib/types"
import { ArrowLeft, Package, Tag, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function ProductDetailPage() {
  const params = useParams()
  const { products, loading, fetchProducts } = useDataStore()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  useEffect(() => {
    if (products.length > 0 && params.id) {
      const foundProduct = products.find((p) => p._id === params.id)
      setProduct(foundProduct || null)
    }
  }, [products, params.id])

  const getProductImage = (product: Product) => {
    if (product.images && product.images.length > 0) {
      return product.images[0].path
    }
    return "/placeholder.jpg"
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <SectionContainer background="white">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <Skeleton className="w-full h-96 rounded-lg" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-6 w-24" />
              </div>
            </div>
          </SectionContainer>
        </main>
        <Footer />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <SectionContainer background="white">
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
              <p className="text-muted-foreground mb-6">
                The product you're looking for doesn't exist or has been removed.
              </p>
              <Button asChild>
                <Link href="/products/items">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Products
                </Link>
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
          title={product.name}
          description={product.description}
          buttons={[
            { text: "Back to Products", href: "/products/items", linkType: "path", variant: "outline" }
          ]}
        />

        <SectionContainer background="white">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div>
              <img
                src={getProductImage(product)}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{product.category}</Badge>
                  {product.featured && (
                    <Badge className="bg-secondary text-secondary-foreground">Featured</Badge>
                  )}
                  {!product.isAvailable && (
                    <Badge variant="destructive">Out of Stock</Badge>
                  )}
                </div>
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-muted-foreground text-lg">{product.description}</p>
              </div>

              {/* Product Info */}
              <div className="grid grid-cols-2 gap-4">
                {product.model && (
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Model: {product.model}</span>
                  </div>
                )}
                {product.sku && (
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">SKU: {product.sku}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    Added: {new Date(product.createdAt).toLocaleDateString()}
                  </span>
                </div>
                {product.createdBy && (
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">By: {product.createdBy.username}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Specifications</h3>
                  <Card>
                    <CardContent className="p-4">
                      <dl className="grid grid-cols-1 gap-2">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <dt className="font-medium">{key}:</dt>
                            <dd className="text-muted-foreground">{String(value)}</dd>
                          </div>
                        ))}
                      </dl>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button size="lg" className="flex-1">
                  Request Quote
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  )
}
