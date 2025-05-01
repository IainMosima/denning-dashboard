"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface CaseNotesProps {
  caseId: number
}

export function CaseNotes({ caseId }: CaseNotesProps) {
  const [newNote, setNewNote] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Mock data - would come from API in real implementation
  const notes = [
    {
      id: 1,
      content:
        "Client meeting scheduled for next week to discuss settlement options. Need to prepare summary of potential outcomes.",
      author: "Sarah Johnson",
      timestamp: "April 25, 2025 at 2:30 PM",
    },
    {
      id: 2,
      content:
        "Reviewed defendant's response to our motion. Their arguments are weak on points 2 and 3. Will focus our reply on those areas.",
      author: "Michael Chen",
      timestamp: "April 22, 2025 at 11:15 AM",
    },
    {
      id: 3,
      content:
        "Spoke with opposing counsel regarding discovery timeline. They've requested a two-week extension which seems reasonable given the volume of documents.",
      author: "Sarah Johnson",
      timestamp: "April 18, 2025 at 9:45 AM",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newNote.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setNewNote("")
      setIsSubmitting(false)
      // In a real app, we would add the new note to the list
    }, 1000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Case Notes</CardTitle>
        <CardDescription>Internal notes and observations about the case</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Add a new note..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            rows={3}
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting || !newNote.trim()}>
              {isSubmitting ? "Adding..." : "Add Note"}
            </Button>
          </div>
        </form>

        <div className="space-y-4">
          {notes.map((note) => (
            <div key={note.id} className="border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt={note.author} />
                  <AvatarFallback>
                    {note.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{note.author}</p>
                    <p className="text-xs text-muted-foreground">{note.timestamp}</p>
                  </div>
                  <p className="mt-2 text-sm">{note.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
