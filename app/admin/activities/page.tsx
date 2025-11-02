"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProtectedRoute } from "@/components/protected-route"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useDataStore } from "@/lib/store/data-store"
import { LeafLoader } from "@/components/loaders/leaf-loader"
import { Activity, Clock, User } from "lucide-react"

export default function ActivitiesPage() {
  const { recentActivities, loading, fetchRecentActivities } = useDataStore()

  useEffect(() => {
    fetchRecentActivities()
  }, [fetchRecentActivities])

  if (loading && recentActivities.length === 0) {
    return <LeafLoader />
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
      relative: getRelativeTime(date)
    }
  }

  const getRelativeTime = (date: Date) => {
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    
    if (diffInSeconds < 60) return "Just now"
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`
    return date.toLocaleDateString()
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-muted">
          <div className="bg-background border-b border-border">
            <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
              <Breadcrumb 
                items={[
                  { label: "Activities" }
                ]} 
                className="mb-4" 
              />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Activity Log</h1>
                  <p className="text-muted-foreground mt-1">View all system activities and events</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  All Activities
                </CardTitle>
                <CardDescription>
                  Complete log of all system activities and user actions
                </CardDescription>
              </CardHeader>
              <CardContent>
                {recentActivities.length > 0 ? (
                  <div className="space-y-6">
                    {recentActivities.map((activity) => {
                      const { date, time, relative } = formatDate(activity.createdAt)
                      return (
                        <div key={activity._id} className="flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="font-semibold text-foreground mb-1">{activity.title}</h3>
                                <p className="text-muted-foreground mb-2">{activity.description}</p>
                                
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <User className="h-3 w-3" />
                                    <span>{activity.actor.username}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    <span>{relative}</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="text-right text-sm text-muted-foreground">
                                <div>{date}</div>
                                <div>{time}</div>
                              </div>
                            </div>
                            
                            {activity.meta && Object.keys(activity.meta).length > 0 && (
                              <div className="mt-3 p-3 bg-muted rounded-md">
                                <h4 className="text-sm font-medium text-foreground mb-2">Details</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  {Object.entries(activity.meta).map(([key, value]) => (
                                    <div key={key} className="text-sm">
                                      <span className="font-medium text-foreground">{key}:</span>{" "}
                                      <span className="text-muted-foreground">{String(value)}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">No Activities</h3>
                    <p className="text-muted-foreground">No activities have been recorded yet.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  )
}
