"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, FileCheck, FileSearch, FileCog, Star } from "lucide-react"

interface TemplateSelectionProps {
  onSelect: (templateId: string) => void
}

export function TemplateSelection({ onSelect }: TemplateSelectionProps) {
  // Mock data - would come from API in real implementation
  const templates = {
    contracts: [
      {
        id: "contract-employment",
        title: "Employment Contract",
        description: "Standard employment agreement with customizable terms",
        popularity: "high",
      },
      {
        id: "contract-nda",
        title: "Non-Disclosure Agreement",
        description: "Confidentiality agreement to protect sensitive information",
        popularity: "high",
      },
      {
        id: "contract-service",
        title: "Service Agreement",
        description: "Contract for provision of professional services",
        popularity: "medium",
      },
      {
        id: "contract-lease",
        title: "Commercial Lease Agreement",
        description: "Lease contract for commercial property",
        popularity: "medium",
      },
    ],
    litigation: [
      {
        id: "litigation-complaint",
        title: "Civil Complaint",
        description: "Initial pleading to commence a civil lawsuit",
        popularity: "medium",
      },
      {
        id: "litigation-answer",
        title: "Answer to Complaint",
        description: "Response to allegations in a civil complaint",
        popularity: "medium",
      },
      {
        id: "litigation-motion",
        title: "Motion for Summary Judgment",
        description: "Request for judgment without full trial",
        popularity: "low",
      },
    ],
    corporate: [
      {
        id: "corporate-bylaws",
        title: "Corporate Bylaws",
        description: "Internal rules governing a corporation",
        popularity: "medium",
      },
      {
        id: "corporate-minutes",
        title: "Board Meeting Minutes",
        description: "Record of corporate board meeting proceedings",
        popularity: "low",
      },
      {
        id: "corporate-resolution",
        title: "Corporate Resolution",
        description: "Formal decision made by corporate board",
        popularity: "medium",
      },
    ],
    other: [
      {
        id: "other-will",
        title: "Last Will and Testament",
        description: "Document specifying disposition of assets",
        popularity: "high",
      },
      {
        id: "other-power",
        title: "Power of Attorney",
        description: "Authorization for someone to act on another's behalf",
        popularity: "high",
      },
      {
        id: "other-demand",
        title: "Demand Letter",
        description: "Formal request to resolve a dispute",
        popularity: "medium",
      },
    ],
  }

  const renderTemplateCards = (templateList: any[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templateList.map((template) => (
          <Card
            key={template.id}
            className="cursor-pointer hover:border-blue-300 hover:shadow-md transition-all"
            onClick={() => onSelect(template.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/20 p-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                {template.popularity === "high" && <Star className="h-4 w-4 text-amber-500" fill="currentColor" />}
              </div>
              <h3 className="font-medium mt-4">{template.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
              <Button className="w-full mt-4" size="sm">
                Use Template
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Document Templates</CardTitle>
        <CardDescription>Select a template to start drafting your document</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="contracts">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="contracts" className="flex items-center gap-2">
              <FileCheck className="h-4 w-4" />
              <span className="hidden sm:inline">Contracts</span>
            </TabsTrigger>
            <TabsTrigger value="litigation" className="flex items-center gap-2">
              <FileSearch className="h-4 w-4" />
              <span className="hidden sm:inline">Litigation</span>
            </TabsTrigger>
            <TabsTrigger value="corporate" className="flex items-center gap-2">
              <FileCog className="h-4 w-4" />
              <span className="hidden sm:inline">Corporate</span>
            </TabsTrigger>
            <TabsTrigger value="other" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Other</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contracts">{renderTemplateCards(templates.contracts)}</TabsContent>

          <TabsContent value="litigation">{renderTemplateCards(templates.litigation)}</TabsContent>

          <TabsContent value="corporate">{renderTemplateCards(templates.corporate)}</TabsContent>

          <TabsContent value="other">{renderTemplateCards(templates.other)}</TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
