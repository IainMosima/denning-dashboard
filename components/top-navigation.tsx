"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { NotificationsDropdown } from "@/components/notifications-dropdown"
import { ProfileDropdown } from "@/components/profile-dropdown"
import { ModeToggle } from "@/components/mode-toggle"

export function TopNavigation() {
  return (
    <header className="sticky top-0 z-30 flex h-14 md:h-16 items-center gap-2 md:gap-4 border-b bg-background px-2 md:px-4 lg:px-6">
      <SidebarTrigger className="md:hidden" />

      <div className="hidden md:flex md:flex-1 md:items-center md:gap-4">
        <form className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search cases, documents, laws..."
            className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
          />
        </form>
      </div>

      <div className="ml-auto flex items-center gap-1 md:gap-2">
        <ModeToggle />
        <NotificationsDropdown />
        <ProfileDropdown />
      </div>
    </header>
  )
}
