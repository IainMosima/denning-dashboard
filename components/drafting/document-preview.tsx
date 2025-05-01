"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react"

interface DocumentPreviewProps {
  templateId: string
  formData: Record<string, any>
  isFullPreview?: boolean
}

export function DocumentPreview({ templateId, formData, isFullPreview = false }: DocumentPreviewProps) {
  const [documentContent, setDocumentContent] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Only generate preview if we have some form data
    if (Object.keys(formData).length > 0) {
      setIsLoading(true)

      // Simulate API call to generate document - use a shorter timeout for better UX
      const timer = setTimeout(() => {
        setDocumentContent(generateDocumentContent(templateId, formData))
        setIsLoading(false)
      }, 600)

      return () => clearTimeout(timer)
    } else {
      setDocumentContent("")
      setIsLoading(false)
    }
  }, [templateId, formData])

  // Mock function to generate document content based on template and form data
  const generateDocumentContent = (templateId: string, data: Record<string, any>) => {
    switch (templateId) {
      case "contract-employment":
        return `
EMPLOYMENT CONTRACT

THIS EMPLOYMENT AGREEMENT (the "Agreement") is made and entered into on ${formatDate(data.startDate)}, by and between:

${data.employerName} (the "Employer")
and
${data.employeeName} (the "Employee")

1. POSITION AND DUTIES

The Employer agrees to employ the Employee as ${data.position}, and the Employee agrees to accept such employment subject to the terms and conditions of this Agreement.

2. TERM OF EMPLOYMENT

The Employee's employment under this Agreement shall commence on ${formatDate(data.startDate)}.

3. COMPENSATION

The Employer shall pay the Employee a salary of ${data.salary} on a ${data.paymentFrequency?.toLowerCase()} basis, subject to applicable tax withholdings and deductions.

4. WORK SCHEDULE

The Employee shall work ${data.workHours}.

${data.probationPeriod ? `5. PROBATION PERIOD\n\nThe Employee shall be subject to a probation period of ${data.probationPeriod} months from the commencement date.` : ""}

${data.benefits ? `6. BENEFITS\n\n${data.benefits}` : ""}

7. TERMINATION

Either party may terminate this Agreement by providing the other party with ${data.terminationNotice} days' written notice.

${data.nonCompete ? `8. NON-COMPETE\n\nThe Employee agrees not to engage in any business or activity that competes with the Employer during employment and for a period of 12 months following termination of employment.` : ""}

IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first above written.

________________________
${data.employerName}

________________________
${data.employeeName}
        `
      case "contract-nda":
        return `
NON-DISCLOSURE AGREEMENT

THIS NON-DISCLOSURE AGREEMENT (the "Agreement") is made and entered into on ${formatDate(data.effectiveDate)}, by and between:

${data.disclosingParty} (the "Disclosing Party")
and
${data.receivingParty} (the "Receiving Party")

1. PURPOSE

The parties wish to explore a business opportunity of mutual interest, and in connection with this opportunity, the Disclosing Party may disclose to the Receiving Party certain confidential and proprietary information for the purpose of: ${data.purpose}

2. DEFINITION OF CONFIDENTIAL INFORMATION

"Confidential Information" means: ${data.confidentialInfoDefinition}

3. EXCLUSIONS FROM CONFIDENTIAL INFORMATION

${data.exclusions || "The obligations of confidentiality under this Agreement do not apply to information that: (a) is or becomes publicly known through no fault of the Receiving Party; (b) was known to the Receiving Party before disclosure; (c) is rightfully obtained by the Receiving Party from a third party without restriction; or (d) is independently developed by the Receiving Party without use of the Confidential Information."}

4. TERM

The obligations under this Agreement shall remain in effect for a period of ${data.term} years from the Effective Date.

5. GOVERNING LAW

This Agreement shall be governed by the laws of ${data.jurisdiction}.

${data.remedies ? `6. REMEDIES\n\nThe Receiving Party acknowledges that money damages may not be a sufficient remedy for any breach of this Agreement and that the Disclosing Party shall be entitled to seek injunctive relief as a remedy for any such breach.` : ""}

IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first above written.

________________________
${data.disclosingParty}

________________________
${data.receivingParty}
        `
      default:
        return `
${data.title || "DOCUMENT"}

THIS AGREEMENT is made and entered into on ${formatDate(data.effectiveDate)}, by and between:

${data.party1} ("First Party")
and
${data.party2} ("Second Party")

TERMS AND CONDITIONS:

${data.details || "The parties agree to the following terms and conditions..."}

IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first above written.

________________________
${data.party1}

________________________
${data.party2}
        `
    }
  }

  // Helper function to format dates
  const formatDate = (dateString: string) => {
    if (!dateString) return "[DATE]"

    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    } catch (e) {
      return dateString
    }
  }

  if (Object.keys(formData).length === 0 && !isFullPreview) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Document Preview</CardTitle>
          <CardDescription>Fill in the form to see a preview of your document</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center py-12">
          <p className="text-muted-foreground text-center">Preview will appear as you fill out the form</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={isFullPreview ? "min-h-[800px]" : "min-h-[500px]"}>
      <CardHeader>
        <CardTitle>Document Preview</CardTitle>
        <CardDescription>{isLoading ? "Generating preview..." : "Preview of your document"}</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4 animate-pulse">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-8 w-1/2 mt-8" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
          </div>
        ) : (
          <div className="font-mono text-sm whitespace-pre-wrap border p-4 rounded-md bg-white dark:bg-gray-900 min-h-[400px] animate-in fade-in duration-300">
            {documentContent}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
