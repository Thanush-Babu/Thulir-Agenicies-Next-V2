import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionContainer } from "@/components/section-container"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ProductsItemsLoading() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section Skeleton */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-muted py-20 lg:py-28">
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center space-y-6">
              <Skeleton className="h-16 w-96 mx-auto" />
              <Skeleton className="h-6 w-2/3 mx-auto" />
              <Skeleton className="h-10 w-32 mx-auto" />
            </div>
          </div>
        </section>

        {/* Filters Skeleton */}
        <SectionContainer background="muted">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Skeleton className="h-10 w-80" />
              <Skeleton className="h-10 w-48" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-16" />
            </div>
          </div>
        </SectionContainer>

        {/* Products Grid Skeleton */}
        <SectionContainer background="white">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <Card key={index}>
                <CardHeader className="p-0">
                  <Skeleton className="w-full h-48 rounded-t-lg" />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <div className="flex justify-between items-center pt-2">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-8 w-20" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  )
}
