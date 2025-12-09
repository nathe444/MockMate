'use client'

import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { 
  BarChart3, 
  Calendar, 
  Clock, 
  Trophy, 
  Target, 
  TrendingUp, 
  Play, 
  PlusCircle,
  Users,
  FileText
} from "lucide-react"
import { EmptyState } from "./EmptyState"
import CreateInterviewDialog from "../_components/CreateInterviewDialog"

export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser()

  // Show loading state while checking auth
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  // If user is not signed in, show access denied
  if (!isSignedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Access Denied
          </h1>
          <p className="text-muted-foreground">
            Please sign in to access your dashboard
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
        <div className=" flex flex-col gap-4 px-12 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {user.firstName || user.fullName || 'User'}!
            </p>
          </div>
          <div className="flex items-center gap-3">
            <CreateInterviewDialog />
          </div>
        </div>

          <div className="px-12">
            {/* Empty State */}
            <Card>
              <CardHeader>
                <CardTitle>Ready to Practice?</CardTitle>
                <CardDescription>Start a new mock interview</CardDescription>
              </CardHeader>
              <CardContent>
                <EmptyState />
              </CardContent>
            </Card>
        </div>
      </div>
  )
}