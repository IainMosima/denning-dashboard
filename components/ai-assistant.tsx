"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bot, Send, User } from "lucide-react"

export function AiAssistant() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your Denning AI legal assistant. How can I help you today?",
    },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }])

    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm processing your request. In a real implementation, I would connect to an AI service to provide legal assistance based on your query.",
        },
      ])
    }, 1000)

    setInput("")
  }

  return (
    <Card className="h-[400px] md:h-[500px] flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-blue-600" />
          AI Legal Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}>
              <div
                className={`
                  max-w-[80%] rounded-lg p-3 
                  ${message.role === "assistant" ? "bg-muted text-foreground" : "bg-blue-600 text-white"}
                `}
              >
                <div className="flex items-start gap-2">
                  {message.role === "assistant" ? (
                    <Bot className="h-5 w-5 mt-0.5 shrink-0" />
                  ) : (
                    <User className="h-5 w-5 mt-0.5 shrink-0" />
                  )}
                  <p>{message.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <Input
            placeholder="Ask a legal question or request assistance..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
