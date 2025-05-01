"use client"

import { useState } from "react"
import { TemplateSelection } from "@/components/drafting/template-selection"
import { DraftingForm } from "@/components/drafting/drafting-form"
import { DocumentPreview } from "@/components/drafting/document-preview"
import { SaveExportOptions } from "@/components/drafting/save-export-options"
import { Button } from "@/components/ui/button"
import { FileEdit, Plus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DraftingWorkspace() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [draftingStep, setDraftingStep] = useState<"select" | "draft" | "preview">("select")
  const [formData, setFormData] = useState<Record<string, any>>({})

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId)
    setDraftingStep("draft")
  }

  const handleFormSubmit = (data: Record<string, any>) => {
    setFormData(data)
    setDraftingStep("preview")
  }

  const handleStartOver = () => {
    setSelectedTemplate(null)
    setFormData({})
    setDraftingStep("select")
  }

  return (
    <div className="container mx-auto p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">Document Drafting</h1>
          <p className="text-muted-foreground">Create professional legal documents using AI-powered templates</p>
        </div>
        {draftingStep !== "select" && (
          <Button onClick={handleStartOver} variant="outline">
            Start New Document
          </Button>
        )}
      </div>

      {draftingStep === "select" && (
        <div className="flex flex-col items-center justify-center py-6 md:py-8">
          <div className="rounded-full bg-blue-100 dark:bg-blue-900/20 p-3 md:p-4 mb-4">
            <FileEdit className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
          </div>
          <h2 className="text-lg md:text-xl font-semibold mb-2">Start Drafting a Document</h2>
          <p className="text-muted-foreground text-center max-w-md mb-6">
            Select a document template to begin. Our AI will guide you through the drafting process.
          </p>
          <Button onClick={() => setDraftingStep("select")} className="gap-2">
            <Plus className="h-4 w-4" />
            Select Template
          </Button>
        </div>
      )}

      {draftingStep === "select" && <TemplateSelection onSelect={handleTemplateSelect} />}

      {draftingStep === "draft" && selectedTemplate && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <DraftingForm templateId={selectedTemplate} onSubmit={handleFormSubmit} />
          <DocumentPreview templateId={selectedTemplate} formData={formData} />
        </div>
      )}

      {draftingStep === "preview" && (
        <div className="space-y-4 md:space-y-6">
          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="edit">Edit</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="mt-4">
              <DocumentPreview templateId={selectedTemplate!} formData={formData} isFullPreview />
            </TabsContent>
            <TabsContent value="edit" className="mt-4">
              <DraftingForm templateId={selectedTemplate!} initialData={formData} onSubmit={handleFormSubmit} />
            </TabsContent>
          </Tabs>
          <SaveExportOptions />
        </div>
      )}
    </div>
  )
}
