"use client"

import type React from "react"

import { MainSidebar } from "@/components/main-sidebar"
import { TopNavigation } from "@/components/top-navigation"
import { SidebarProvider } from "@/components/ui/sidebar"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen flex-col">
        <TopNavigation />
        <div className="flex flex-1 overflow-hidden">
          <MainSidebar />
          <main className="flex-1 overflow-y-auto overflow-x-hidden">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
