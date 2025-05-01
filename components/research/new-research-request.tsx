"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload } from "lucide-react"

interface NewResearchRequestProps {
  onSubmit: () => void
}

export function NewResearchRequest({ onSubmit }: NewResearchRequestProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      onSubmit()
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Research Request</CardTitle>
        <CardDescription>Submit a detailed research request for comprehensive legal analysis</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="research-topic">Research Topic</Label>
            <Input id="research-topic" placeholder="E.g., Contract breach remedies in Kenyan commercial law" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="research-type">Research Type</Label>
            <Select defaultValue="case-law">
              <SelectTrigger>
                <SelectValue placeholder="Select research type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="case-law">Case Law</SelectItem>
                <SelectItem value="statutes">Statutes & Regulations</SelectItem>
                <SelectItem value="legal-opinions">Legal Opinions</SelectItem>
                <SelectItem value="comprehensive">Comprehensive Research</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="jurisdiction">Jurisdiction</Label>
            <Select defaultValue="kenya">
              <SelectTrigger>
                <SelectValue placeholder="Select jurisdiction" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kenya">Kenya</SelectItem>
                <SelectItem value="east-africa">East Africa</SelectItem>
                <SelectItem value="africa">Africa</SelectItem>
                <SelectItem value="international">International</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="details">Research Details</Label>
            <Textarea
              id="details"
              placeholder="Provide specific details about your research request, including any relevant facts, legal questions, or specific areas of focus."
              rows={5}
            />
          </div>

          <div className="space-y-2">
            <Label>Supporting Documents (Optional)</Label>
            <div className="border border-dashed rounded-md p-6 flex flex-col items-center justify-center">
              <Upload className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground mb-1">Drag & drop files here or click to browse</p>
              <p className="text-xs text-muted-foreground">PDF, DOCX, or TXT files (Max 10MB)</p>
              <Button variant="outline" size="sm" className="mt-4">
                Browse Files
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Research Request"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
