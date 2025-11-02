"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProtectedRoute } from "@/components/protected-route"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuthStore } from "@/lib/store/auth-store"
import { useDataStore } from "@/lib/store/data-store"
import { LeafLoader } from "@/components/loaders/leaf-loader"
import { Package, Award, Users, TrendingUp, Plus, Mail, Activity } from "lucide-react"
import { IconArrowUpRight } from '@tabler/icons-react'

export default function AdminDashboardPage() {
  const { user } = useAuthStore()
  const { stats, latestActivities, loading, fetchStats, fetchLatestActivities } = useDataStore()

  useEffect(() => {
    fetchStats()
    fetchLatestActivities()
  }, [fetchStats, fetchLatestActivities])

  if (loading && !stats) {
    return <LeafLoader />
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-muted">
          {/* Dashboard Header */}
          <div className="bg-background border-b border-border">
            <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
              <Breadcrumb items={[{ label: "Dashboard" }]} className="mb-4" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
                  <p className="text-muted-foreground mt-1">Welcome back, {user?.username}!</p>
                </div>
                <Button asChild variant="brand" size="lg">
                  <Link href="/admin/products/add">
                    <Plus className="h-5 w-5" />
                    Add New Product
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Products</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">
                    {loading ? "..." : stats?.totalProducts || 0}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Across all categories</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Partner Brands</CardTitle>
                  <Award className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{loading ? "..." : stats?.totalBrands || 0}</div>
                  <p className="text-xs text-muted-foreground mt-1">Authorized distributors</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Contacts</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">
                    {loading ? "..." : stats?.totalContacts || 0}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Customer inquiries</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Products</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">
                    {loading ? "..." : stats?.activeProducts || 0}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Currently in stock</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Plus className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Add Product</CardTitle>
                    <CardDescription>Add a new product to the catalog</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href="/admin/products/add">Go to Add Product</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Manage Brands</CardTitle>
                    <CardDescription>View and manage partner brands</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href="/brands">View Brands</Link>
                    </Button>
                  </CardContent>
                </Card> */}

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">View Contacts</CardTitle>
                    <CardDescription>Review customer inquiries and quotes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href="/contact">View Contacts</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground">Recent Activity</h2>
                <Button asChild variant="outline" size="sm">
                  <Link href="/admin/activities" className="flex items-center gap-2">
                    <Activity className="h-4 w-4" />
                    View All Activities
                  </Link>
                </Button>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {latestActivities.length > 0 ? (
                      latestActivities.map((activity) => (
                        <div key={activity._id} className="flex items-start gap-4 pb-4 border-b border-border last:border-0">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{activity.title}</p>
                            <p className="text-sm text-muted-foreground">{activity.description}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {new Date(activity.createdAt).toLocaleDateString()} at{" "}
                              {new Date(activity.createdAt).toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">No recent activities</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  )
}
