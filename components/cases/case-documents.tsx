"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { FileText, Download, Eye, Upload, Search, Plus } from "lucide-react"

interface CaseDocumentsProps {
  caseId: number
}

export function CaseDocuments({ caseId }: CaseDocumentsProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data - would come from API in real implementation
  const documents = [
    {
      id: 1,
      name: "Initial Complaint",
      type: "Pleading",
      fileType: "PDF",
      dateAdded: "Jan 15, 2025",
      addedBy: "Sarah Johnson",
      size: "1.2 MB",
    },
    {
      id: 2,
      name: "Exhibit A - Contract",
      type: "Evidence",
      fileType: "PDF",
      dateAdded: "Jan 15, 2025",
      addedBy: "Sarah Johnson",
      size: "3.5 MB",
    },
    {
      id: 3,
      name: "Answer to Complaint",
      type: "Pleading",
      fileType: "DOCX",
      dateAdded: "Mar 15, 2025",
      addedBy: "Michael Chen",
      size: "0.8 MB",
    },
    {
      id: 4,
      name: "Motion for Summary Judgment",
      type: "Motion",
      fileType: "PDF",
      dateAdded: "Apr 15, 2025",
      addedBy: "Sarah Johnson",
      size: "2.1 MB",
    },
    {
      id: 5,
      name: "Response to Motion",
      type: "Motion",
      fileType: "PDF",
      dateAdded: "Apr 26, 2025",
      addedBy: "Michael Chen",
      size: "1.7 MB",
    },
  ]

  // Filter documents based on search query
  const filteredDocuments = documents.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Case Documents</CardTitle>
          <CardDescription>Documents associated with this case</CardDescription>
        </div>
        <Button size="sm" className="gap-1">
          <Upload className="h-4 w-4" />
          Upload Document
        </Button>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search documents..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredDocuments.length === 0 ? (
          <div className="text-center py-8">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">No documents found matching your search.</p>
            <Button variant="outline" className="mt-4 gap-1">
              <Plus className="h-4 w-4" />
              Add Document
            </Button>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date Added</TableHead>
                <TableHead>Added By</TableHead>
                <TableHead>Size</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDocuments.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{doc.name}</span>
                      <Badge variant="outline">{doc.fileType}</Badge>
                    </div>
                  </TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>{doc.dateAdded}</TableCell>
                  <TableCell>{doc.addedBy}</TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  )
}
