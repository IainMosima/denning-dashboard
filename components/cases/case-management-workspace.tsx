"use client"

import { useState } from "react"
import { CaseList } from "@/components/cases/case-list"
import { CaseDetail } from "@/components/cases/case-detail"
import { NewCaseForm } from "@/components/cases/new-case-form"
import { Button } from "@/components/ui/button"
import { Plus, ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CaseManagementWorkspace() {
  const [view, setView] = useState<"list" | "detail" | "new">("list")
  const [selectedCaseId, setSelectedCaseId] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("active")

  const handleCaseSelect = (caseId: number) => {
    setSelectedCaseId(caseId)
    setView("detail")
  }

  const handleNewCase = () => {
    setView("new")
  }

  const handleBackToList = () => {
    setView("list")
    setSelectedCaseId(null)
  }

  const handleCaseCreated = () => {
    setView("list")
  }

  return (
    <div className="container mx-auto p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          {view === "list" ? (
            <>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">Case Management</h1>
              <p className="text-muted-foreground">Manage your legal cases and related documents</p>
            </>
          ) : view === "detail" ? (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={handleBackToList}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-xl md:text-2xl font-bold tracking-tight">Case Details</h1>
                <p className="text-muted-foreground">View and manage case information</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={handleBackToList}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-xl md:text-2xl font-bold tracking-tight">New Case</h1>
                <p className="text-muted-foreground">Create a new legal case</p>
              </div>
            </div>
          )}
        </div>
        {view === "list" && (
          <Button onClick={handleNewCase} className="gap-2">
            <Plus className="h-4 w-4" />
            New Case
          </Button>
        )}
      </div>

      {view === "list" && (
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full md:w-auto">
            <TabsTrigger value="active">Active Cases</TabsTrigger>
            <TabsTrigger value="archived">Archived Cases</TabsTrigger>
            <TabsTrigger value="all">All Cases</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="mt-4">
            <CaseList onCaseSelect={handleCaseSelect} filter="active" />
          </TabsContent>
          <TabsContent value="archived" className="mt-4">
            <CaseList onCaseSelect={handleCaseSelect} filter="archived" />
          </TabsContent>
          <TabsContent value="all" className="mt-4">
            <CaseList onCaseSelect={handleCaseSelect} filter="all" />
          </TabsContent>
        </Tabs>
      )}

      {view === "detail" && selectedCaseId && <CaseDetail caseId={selectedCaseId} />}

      {view === "new" && <NewCaseForm onCaseCreated={handleCaseCreated} />}
    </div>
  )
}
