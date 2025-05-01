"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"

import { Home, Search, Folder, BookOpen, Users, Settings, HelpCircle, Scale, BarChart, FileEdit } from "lucide-react"
import { usePathname } from "next/navigation"

export function MainSidebar() {
  const pathname = usePathname()

  const mainNavItems = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Legal Research", icon: Search, path: "/research" },
    { name: "Document Drafting", icon: FileEdit, path: "/documents/drafting" },
    { name: "Case Files", icon: Folder, path: "/cases" },
    { name: "Law Library", icon: BookOpen, path: "/library" },
    { name: "Legal Analytics", icon: BarChart, path: "/analytics" },
  ]

  const secondaryNavItems = [
    { name: "Colleagues", icon: Users, path: "/colleagues" },
    { name: "Settings", icon: Settings, path: "/settings" },
    { name: "Help & Support", icon: HelpCircle, path: "/support" },
  ]

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="flex items-center justify-center py-4">
        <div className="flex items-center gap-2">
          <Scale className="h-6 w-6 md:h-8 md:w-8 text-primary" />
          <span className="text-lg md:text-xl font-bold">Denning</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild isActive={pathname === item.path} tooltip={item.name}>
                    <a href={item.path}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Other</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNavItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild isActive={pathname === item.path} tooltip={item.name}>
                    <a href={item.path}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="text-xs text-muted-foreground">Denning Legal Platform v2.0</div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
