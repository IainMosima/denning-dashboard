"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, Save, Share, FileText, FileIcon } from "lucide-react"
import { useState } from "react"

export function SaveExportOptions() {
  const [documentName, setDocumentName] = useState("Untitled Document")
  const [isSaving, setIsSaving] = useState(false)
  const [isExporting, setIsExporting] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
    }, 1000)
  }

  const handleExport = (format: string) => {
    setIsExporting(true)
    // Simulate API call
    setTimeout(() => {
      setIsExporting(false)
    }, 1000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Save & Export Options</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="document-name">Document Name</Label>
              <Input id="document-name" value={documentName} onChange={(e) => setDocumentName(e.target.value)} />
            </div>
            <Button onClick={handleSave} className="w-full gap-2" disabled={isSaving}>
              <Save className="h-4 w-4" />
              {isSaving ? "Saving..." : "Save Document"}
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Share className="h-4 w-4" />
              Share with Team
            </Button>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium">Export Format</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Button
                variant="outline"
                className="flex flex-col items-center justify-center h-24 gap-2"
                onClick={() => handleExport("txt")}
                disabled={isExporting}
              >
                <FileText className="h-8 w-8" />
                <span>Plain Text</span>
                <span className="text-xs text-muted-foreground">.txt</span>
              </Button>
              <Button
                variant="outline"
                className="flex flex-col items-center justify-center h-24 gap-2"
                onClick={() => handleExport("docx")}
                disabled={isExporting}
              >
                <FileIcon className="h-8 w-8" />
                <span>Word</span>
                <span className="text-xs text-muted-foreground">.docx</span>
              </Button>
              <Button
                variant="outline"
                className="flex flex-col items-center justify-center h-24 gap-2"
                onClick={() => handleExport("pdf")}
                disabled={isExporting}
              >
                <FileIcon className="h-8 w-8" />
                <span>PDF</span>
                <span className="text-xs text-muted-foreground">.pdf</span>
              </Button>
            </div>
            <Button className="w-full gap-2" disabled={isExporting}>
              <Download className="h-4 w-4" />
              {isExporting ? "Exporting..." : "Export Document"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
