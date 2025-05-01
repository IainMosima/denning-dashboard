"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { DatePicker } from "@/components/ui/date-picker"

interface DraftingFormProps {
  templateId: string
  initialData?: Record<string, any>
  onSubmit: (data: Record<string, any>) => void
}

export function DraftingForm({ templateId, initialData = {}, onSubmit }: DraftingFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>(initialData)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Get form fields based on template ID
  const getFormFields = () => {
    // This would come from an API in a real implementation
    switch (templateId) {
      case "contract-employment":
        return [
          { id: "employerName", label: "Employer Name", type: "text", required: true },
          { id: "employeeName", label: "Employee Name", type: "text", required: true },
          { id: "position", label: "Position/Title", type: "text", required: true },
          { id: "startDate", label: "Start Date", type: "date", required: true },
          { id: "salary", label: "Salary Amount", type: "text", required: true },
          {
            id: "paymentFrequency",
            label: "Payment Frequency",
            type: "select",
            options: ["Weekly", "Bi-weekly", "Monthly"],
            required: true,
          },
          { id: "workHours", label: "Work Hours", type: "text", required: true },
          { id: "probationPeriod", label: "Probation Period (months)", type: "number", required: false },
          { id: "benefits", label: "Benefits", type: "textarea", required: false },
          { id: "terminationNotice", label: "Termination Notice Period (days)", type: "number", required: true },
          { id: "nonCompete", label: "Include Non-Compete Clause", type: "checkbox", required: false },
        ]
      case "contract-nda":
        return [
          { id: "disclosingParty", label: "Disclosing Party", type: "text", required: true },
          { id: "receivingParty", label: "Receiving Party", type: "text", required: true },
          { id: "effectiveDate", label: "Effective Date", type: "date", required: true },
          { id: "purpose", label: "Purpose of Disclosure", type: "textarea", required: true },
          {
            id: "confidentialInfoDefinition",
            label: "Definition of Confidential Information",
            type: "textarea",
            required: true,
          },
          { id: "exclusions", label: "Exclusions from Confidential Information", type: "textarea", required: false },
          { id: "term", label: "Term (years)", type: "number", required: true },
          { id: "jurisdiction", label: "Governing Law/Jurisdiction", type: "text", required: true },
          { id: "remedies", label: "Include Injunctive Relief Clause", type: "checkbox", required: false },
        ]
      default:
        return [
          { id: "title", label: "Document Title", type: "text", required: true },
          { id: "party1", label: "First Party", type: "text", required: true },
          { id: "party2", label: "Second Party", type: "text", required: true },
          { id: "effectiveDate", label: "Effective Date", type: "date", required: true },
          { id: "details", label: "Document Details", type: "textarea", required: true },
        ]
    }
  }

  const formFields = getFormFields()

  useEffect(() => {
    // Initialize form with default values if not already set
    const initialFormData = { ...formData }
    formFields.forEach((field) => {
      if (initialFormData[field.id] === undefined) {
        if (field.type === "checkbox") {
          initialFormData[field.id] = false
        } else if (field.type === "select" && field.options) {
          initialFormData[field.id] = field.options[0]
        } else {
          initialFormData[field.id] = ""
        }
      }
    })
    setFormData(initialFormData)
  }, [templateId])

  const handleChange = (id: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      onSubmit(formData)
    }, 1000)
  }

  const getTemplateTitle = () => {
    switch (templateId) {
      case "contract-employment":
        return "Employment Contract"
      case "contract-nda":
        return "Non-Disclosure Agreement"
      default:
        return "Document"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{getTemplateTitle()}</CardTitle>
        <CardDescription>Fill in the details to generate your document</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {formFields.map((field) => (
            <div key={field.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor={field.id}>{field.label}</Label>
                {field.required && <span className="text-xs text-red-500">Required</span>}
              </div>

              {field.type === "text" && (
                <Input
                  id={field.id}
                  value={formData[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  required={field.required}
                />
              )}

              {field.type === "textarea" && (
                <Textarea
                  id={field.id}
                  value={formData[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  required={field.required}
                  rows={3}
                />
              )}

              {field.type === "number" && (
                <Input
                  id={field.id}
                  type="number"
                  value={formData[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  required={field.required}
                />
              )}

              {field.type === "date" && (
                <DatePicker
                  id={field.id}
                  date={formData[field.id] ? new Date(formData[field.id]) : undefined}
                  onSelect={(date) => handleChange(field.id, date?.toISOString() || "")}
                />
              )}

              {field.type === "select" && field.options && (
                <Select
                  value={formData[field.id] || field.options[0]}
                  onValueChange={(value) => handleChange(field.id, value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {field.type === "checkbox" && (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={field.id}
                    checked={formData[field.id] || false}
                    onCheckedChange={(checked) => handleChange(field.id, checked)}
                  />
                  <label
                    htmlFor={field.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Yes
                  </label>
                </div>
              )}
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Generating..." : "Generate Document"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
