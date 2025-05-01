"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { CaseTimeline } from "@/components/cases/case-timeline"
import { CaseDocuments } from "@/components/cases/case-documents"
import { CaseNotes } from "@/components/cases/case-notes"
import { CaseParties } from "@/components/cases/case-parties"
import { Edit, Archive, Clock, Calendar, MapPin, Building, User, Scale } from "lucide-react"

interface CaseDetailProps {
  caseId: number
}

export function CaseDetail({ caseId }: CaseDetailProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [caseData, setCaseData] = useState<any>(null)

  useEffect(() => {
    // Simulate API call to fetch case details
    const fetchCaseDetails = async () => {
      setIsLoading(true)
      // Mock data - would come from API in real implementation
      setTimeout(() => {
        setCaseData({
          id: caseId,
          name: "Smith v. Johnson Contract Dispute",
          number: "CV-2025-1234",
          type: "Contract",
          court: "High Court of Kenya",
          judge: "Hon. Justice Maria Kimani",
          filingDate: "January 15, 2025",
          nextHearing: "May 10, 2025",
          status: "Active",
          priority: "High",
          client: {
            name: "Smith Enterprises",
            type: "Corporate",
            contact: "John Smith",
            email: "john@smithenterprises.com",
            phone: "+254 712 345 678",
          },
          description:
            "Dispute regarding breach of commercial contract between Smith Enterprises and Johnson & Co. The plaintiff alleges failure to deliver services as specified in the agreement dated October 10, 2024.",
          location: "Nairobi Law Courts, Court Room 4B",
          assignedTo: ["Sarah Johnson", "Michael Chen"],
          parties: [
            { name: "Smith Enterprises", role: "Plaintiff", attorney: "Sarah Johnson" },
            { name: "Johnson & Co.", role: "Defendant", attorney: "David Williams" },
          ],
        })
        setIsLoading(false)
      }, 800)
    }

    fetchCaseDetails()
  }, [caseId])

  if (isLoading) {
    return (
      <div className="space-y-4 md:space-y-6 animate-in fade-in duration-500">
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2 mt-2" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </CardContent>
        </Card>

        <Skeleton className="h-10 w-full" />

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-1/4" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Skeleton className="h-24 w-full" />
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-4 md:space-y-6 animate-in fade-in duration-500">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold">{caseData.name}</h2>
                <Badge variant={caseData.status === "Active" ? "success" : "default"}>{caseData.status}</Badge>
                <Badge
                  variant={
                    caseData.priority === "High"
                      ? "destructive"
                      : caseData.priority === "Medium"
                        ? "warning"
                        : "outline"
                  }
                >
                  {caseData.priority}
                </Badge>
              </div>
              <p className="text-muted-foreground">Case Number: {caseData.number}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Edit className="h-4 w-4" />
                Edit Case
              </Button>
              <Button variant="outline" className="gap-2">
                <Archive className="h-4 w-4" />
                Archive
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium">Case Information</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Scale className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Type:</span> {caseData.type}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Court:</span> {caseData.court}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Judge:</span> {caseData.judge}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Dates</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Filing Date:</span> {caseData.filingDate}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Next Hearing:</span> {caseData.nextHearing}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Client</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Name:</span> {caseData.client.name}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Contact:</span> {caseData.client.contact}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-medium mb-2">Case Description</h3>
            <p className="text-sm">{caseData.description}</p>
          </div>

          <div className="mt-6 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="font-medium mb-2">Location</h3>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                {caseData.location}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-medium mb-2">Assigned To</h3>
              <div className="flex flex-wrap gap-2">
                {caseData.assignedTo.map((person: string) => (
                  <Badge key={person} variant="outline">
                    {person}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="timeline">
        <TabsList>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="parties">Parties</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>
        <TabsContent value="timeline" className="mt-4">
          <CaseTimeline caseId={caseId} />
        </TabsContent>
        <TabsContent value="documents" className="mt-4">
          <CaseDocuments caseId={caseId} />
        </TabsContent>
        <TabsContent value="parties" className="mt-4">
          <CaseParties caseId={caseId} />
        </TabsContent>
        <TabsContent value="notes" className="mt-4">
          <CaseNotes caseId={caseId} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
