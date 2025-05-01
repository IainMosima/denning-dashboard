"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface NewCaseFormProps {
  onCaseCreated: () => void
}

export function NewCaseForm({ onCaseCreated }: NewCaseFormProps) {
  const [activeTab, setActiveTab] = useState("basic")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      onCaseCreated()
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Case</CardTitle>
        <CardDescription>Enter the details for the new legal case</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Basic Information</TabsTrigger>
              <TabsTrigger value="parties">Parties</TabsTrigger>
              <TabsTrigger value="details">Additional Details</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="case-name">Case Name</Label>
                <Input id="case-name" placeholder="E.g., Smith v. Johnson Contract Dispute" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="case-number">Case Number (if available)</Label>
                <Input id="case-number" placeholder="E.g., CV-2025-1234" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="case-type">Case Type</Label>
                  <Select>
                    <SelectTrigger id="case-type">
                      <SelectValue placeholder="Select case type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="tort">Tort</SelectItem>
                      <SelectItem value="property">Property</SelectItem>
                      <SelectItem value="family">Family</SelectItem>
                      <SelectItem value="criminal">Criminal</SelectItem>
                      <SelectItem value="corporate">Corporate</SelectItem>
                      <SelectItem value="intellectual-property">Intellectual Property</SelectItem>
                      <SelectItem value="tax">Tax</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger id="priority">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="filing-date">Filing Date</Label>
                  <DatePicker id="filing-date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="court">Court</Label>
                  <Select>
                    <SelectTrigger id="court">
                      <SelectValue placeholder="Select court" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-court">High Court of Kenya</SelectItem>
                      <SelectItem value="commercial-court">Commercial Court</SelectItem>
                      <SelectItem value="family-court">Family Court</SelectItem>
                      <SelectItem value="employment-court">Employment & Labor Relations Court</SelectItem>
                      <SelectItem value="environment-court">Environment & Land Court</SelectItem>
                      <SelectItem value="magistrate-court">Magistrate's Court</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Case Description</Label>
                <Textarea id="description" placeholder="Provide a brief description of the case..." rows={4} required />
              </div>
            </TabsContent>

            <TabsContent value="parties" className="mt-4 space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Client Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="client-name">Client Name</Label>
                    <Input id="client-name" placeholder="Client name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="client-type">Client Type</Label>
                    <Select>
                      <SelectTrigger id="client-type">
                        <SelectValue placeholder="Select client type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="corporate">Corporate</SelectItem>
                        <SelectItem value="government">Government</SelectItem>
                        <SelectItem value="non-profit">Non-Profit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="client-contact">Contact Person</Label>
                    <Input id="client-contact" placeholder="Contact person name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="client-email">Email</Label>
                    <Input id="client-email" type="email" placeholder="Contact email" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="client-phone">Phone Number</Label>
                  <Input id="client-phone" placeholder="Contact phone number" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Opposing Party</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="opposing-name">Opposing Party Name</Label>
                    <Input id="opposing-name" placeholder="Opposing party name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="opposing-type">Opposing Party Type</Label>
                    <Select>
                      <SelectTrigger id="opposing-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="corporate">Corporate</SelectItem>
                        <SelectItem value="government">Government</SelectItem>
                        <SelectItem value="non-profit">Non-Profit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="opposing-attorney">Opposing Attorney (if known)</Label>
                  <Input id="opposing-attorney" placeholder="Opposing attorney name" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="details" className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="judge">Judge (if assigned)</Label>
                <Input id="judge" placeholder="Judge name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Court Location</Label>
                <Input id="location" placeholder="E.g., Nairobi Law Courts, Court Room 4B" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="next-hearing">Next Hearing Date (if scheduled)</Label>
                <DatePicker id="next-hearing" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="assigned-to">Assigned Team Members</Label>
                <Select>
                  <SelectTrigger id="assigned-to">
                    <SelectValue placeholder="Select team members" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
                    <SelectItem value="michael-chen">Michael Chen</SelectItem>
                    <SelectItem value="emily-rodriguez">Emily Rodriguez</SelectItem>
                    <SelectItem value="david-kim">David Kim</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground mt-1">
                  Multiple team members can be assigned after case creation
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea id="notes" placeholder="Any additional information about the case..." rows={4} />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" type="button" onClick={onCaseCreated}>
            Cancel
          </Button>
          <div className="flex gap-2">
            {activeTab !== "basic" && (
              <Button
                variant="outline"
                type="button"
                onClick={() => setActiveTab(activeTab === "parties" ? "basic" : "parties")}
              >
                Previous
              </Button>
            )}
            {activeTab !== "details" ? (
              <Button type="button" onClick={() => setActiveTab(activeTab === "basic" ? "parties" : "details")}>
                Next
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create Case"}
              </Button>
            )}
          </div>
        </CardFooter>
      </form>
    </Card>
  )
}
