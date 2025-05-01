"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, ChevronRight, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function TaskManagement() {
  // Mock data - would come from API in real implementation
  const initialTasks = [
    {
      id: 1,
      title: "Review Smith contract amendments",
      dueDate: "Today",
      priority: "high",
      completed: false,
    },
    {
      id: 2,
      title: "Prepare discovery documents for Johnson case",
      dueDate: "Tomorrow",
      priority: "high",
      completed: false,
    },
    {
      id: 3,
      title: "Schedule client meeting with ABC Corp",
      dueDate: "Apr 28, 2025",
      priority: "medium",
      completed: false,
    },
    {
      id: 4,
      title: "Research precedents for intellectual property case",
      dueDate: "Apr 30, 2025",
      priority: "medium",
      completed: false,
    },
    {
      id: 5,
      title: "Update billing records",
      dueDate: "May 1, 2025",
      priority: "low",
      completed: true,
    },
  ]

  const [tasks, setTasks] = useState(initialTasks)

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)))
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Tasks</CardTitle>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <span>View All</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-start gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors ${
                task.completed ? "opacity-60" : ""
              }`}
            >
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTaskCompletion(task.id)}
                className="mt-1"
              />
              <div className="flex-1 space-y-1">
                <p className={`font-medium ${task.completed ? "line-through" : ""}`}>{task.title}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Due: {task.dueDate}</span>
                </div>
              </div>
              <Badge
                variant={task.priority === "high" ? "destructive" : task.priority === "medium" ? "warning" : "default"}
              >
                {task.priority}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
