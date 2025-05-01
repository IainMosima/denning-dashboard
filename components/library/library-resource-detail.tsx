"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Star,
  Download,
  Share2,
  Printer,
  BookmarkPlus,
  FileText,
  GavelIcon,
  Scale,
  ExternalLink,
  Copy,
  CheckCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface LibraryResourceDetailProps {
  resourceId: string
  onBack: () => void
}

export default function LibraryResourceDetail({ resourceId, onBack }: LibraryResourceDetailProps) {
  const [isStarred, setIsStarred] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  // Mock resource data based on ID
  const resource = {
    id: resourceId,
    title: resourceId === "res-1" ? "Smith v. Jones (2023)" : "Data Protection Act 2018",
    type: resourceId === "res-1" ? "Case Law" : "Statute",
    date: resourceId === "res-1" ? "October 15, 2023" : "May 23, 2018",
    author: resourceId === "res-1" ? "Supreme Court" : "Parliament",
    jurisdiction: resourceId === "res-1" ? "Federal" : "National",
    citations: resourceId === "res-1" ? 42 : 156,
    content:
      resourceId === "res-1"
        ? `In the case of Smith v. Jones (2023), the Supreme Court held that...\n\nFACTS:\nThe plaintiff, John Smith, alleged that the defendant, Sarah Jones, breached their contract by...\n\nISSUES:\n1. Whether the contract between Smith and Jones was valid under state law.\n2. Whether Jones' actions constituted a material breach of contract.\n\nHOLDING:\nThe Court found that the contract was valid and that Jones' actions did constitute a material breach...`
        : `DATA PROTECTION ACT 2018\n\nAn Act to make provision for the regulation of the processing of information relating to individuals...\n\nPART 1 - PRELIMINARY\n\nSection 1. Short title and commencement\n(1) This Act may be cited as the Data Protection Act 2018.\n(2) This Act comes into force on such day as the Secretary of State may by regulations appoint...`,
    citation: resourceId === "res-1" ? "Smith v. Jones, 567 U.S. 123 (2023)" : "Data Protection Act 2018, c. 12",
    relatedResources: [
      { id: "rel-1", title: "Privacy Law: Principles and Practice", type: "Textbook" },
      { id: "rel-2", title: "Brown v. Board of Tech (2022)", type: "Case Law" },
      { id: "rel-3", title: "Digital Rights in Modern Context", type: "Article" },
    ],
  }

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "Case Law":
        return <GavelIcon className="h-5 w-5 text-blue-500" />
      case "Statute":
        return <Scale className="h-5 w-5 text-green-500" />
      case "Article":
      case "Legal Article":
        return <FileText className="h-5 w-5 text-amber-500" />
      default:
        return <FileText className="h-5 w-5 text-purple-500" />
    }
  }

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(resource.citation)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="flex flex-col h-full bg-card rounded-lg border border-border">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={onBack} className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-lg font-semibold">{resource.title}</h2>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className={cn("h-8 w-8", isStarred && "text-yellow-500")}
            onClick={() => setIsStarred(!isStarred)}
          >
            <Star className={cn("h-4 w-4", isStarred && "fill-yellow-500")} />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <BookmarkPlus className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Printer className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-4">
            {getResourceIcon(resource.type)}
            <div>
              <Badge variant="secondary">{resource.type}</Badge>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <span>{resource.author}</span>
                <span className="mx-1.5">•</span>
                <span>{resource.date}</span>
              </div>
            </div>
          </div>

          <div className="bg-muted/40 rounded-md p-3 mb-4 flex items-center justify-between">
            <div className="text-sm font-medium">{resource.citation}</div>
            <Button variant="ghost" size="sm" className="h-8 flex items-center gap-1.5" onClick={handleCopyCitation}>
              {isCopied ? (
                <>
                  <CheckCheck className="h-3.5 w-3.5" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Citation</span>
                </>
              )}
            </Button>
          </div>

          <Tabs defaultValue="content">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="annotations">Annotations</TabsTrigger>
              <TabsTrigger value="related">Related</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="mt-4">
              <div className="bg-card rounded-md p-4 whitespace-pre-line">{resource.content}</div>
            </TabsContent>

            <TabsContent value="annotations" className="mt-4">
              <div className="bg-card rounded-md p-6 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium">No annotations yet</h3>
                <p className="text-muted-foreground mt-1">Add notes and highlights to this resource</p>
                <Button className="mt-4">Add Annotation</Button>
              </div>
            </TabsContent>

            <TabsContent value="related" className="mt-4">
              <div className="space-y-3">
                {resource.relatedResources.map((related) => (
                  <div key={related.id} className="flex items-center justify-between rounded-md p-3 hover:bg-muted/50">
                    <div className="flex items-center gap-2">
                      {getResourceIcon(related.type)}
                      <div>
                        <p className="font-medium">{related.title}</p>
                        <p className="text-sm text-muted-foreground">{related.type}</p>
                      </div>
                    </div>
                    <Button variant="link" size="sm">
                      View <ExternalLink className="h-3.5 w-3.5 ml-1" />
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
