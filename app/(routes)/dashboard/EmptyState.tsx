'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PlusCircle, FileText, Users, Calendar } from "lucide-react"
import CreateInterviewDialog from "../_components/CreateInterviewDialog"

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="mb-6 rounded-full bg-primary/10 p-4">
        <FileText className="h-12 w-12 text-primary" />
      </div>
      <h3 className="mb-2 text-2xl font-bold text-foreground">No Mock Interviews Yet</h3>
      <p className="mb-6 max-w-md text-muted-foreground">
        Get started by creating your first mock interview session. Practice makes perfect!
      </p>
      
      <div className="flex flex-col gap-3 sm:flex-row">
        <CreateInterviewDialog/>
        <Button variant="outline" asChild size="lg">
          <Link href="/templates">
            <Users className="mr-2 h-5 w-5" />
            Browse Templates
          </Link>
        </Button>
      </div>
      
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 text-center">
          <Calendar className="mx-auto mb-3 h-8 w-8 text-primary" />
          <h4 className="mb-1 font-semibold">Schedule Practice</h4>
          <p className="text-sm text-muted-foreground">
            Set up recurring interview practice sessions
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 text-center">
          <Users className="mx-auto mb-3 h-8 w-8 text-primary" />
          <h4 className="mb-1 font-semibold">Industry Experts</h4>
          <p className="text-sm text-muted-foreground">
            Practice with AI trained by real hiring managers
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 text-center">
          <FileText className="mx-auto mb-3 h-8 w-8 text-primary" />
          <h4 className="mb-1 font-semibold">Detailed Feedback</h4>
          <p className="text-sm text-muted-foreground">
            Get actionable insights to improve your performance
          </p>
        </div>
      </div>
    </div>
  )
}

export default EmptyState