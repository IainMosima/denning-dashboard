"use client"

import { useState } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function NotificationsDropdown() {
  const [notificationCount, setNotificationCount] = useState(3)

  const notifications = [
    {
      id: 1,
      title: "Research Complete",
      description: "Your employment law research is ready for review",
      time: "10 minutes ago",
    },
    {
      id: 2,
      title: "Document Updated",
      description: "Commercial lease agreement has been updated",
      time: "2 hours ago",
    },
    {
      id: 3,
      title: "System Update",
      description: "Denning platform has been updated to version 2.0",
      time: "Yesterday",
    },
  ]

  const markAllAsRead = () => {
    setNotificationCount(0)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {notificationCount > 0 && (
            <Badge
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
              variant="destructive"
            >
              {notificationCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          <Button variant="ghost" size="sm" className="h-auto text-xs" onClick={markAllAsRead}>
            Mark all as read
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.map((notification) => (
          <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-4 cursor-pointer">
            <div className="font-medium">{notification.title}</div>
            <div className="text-sm text-muted-foreground mt-1">{notification.description}</div>
            <div className="text-xs text-muted-foreground mt-2">{notification.time}</div>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center text-center">View all notifications</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
