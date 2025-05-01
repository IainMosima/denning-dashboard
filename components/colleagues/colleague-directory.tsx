"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, MessageSquare } from "lucide-react"

interface ColleagueDirectoryProps {
  onColleagueSelect: (colleagueId: number) => void
  searchQuery?: string
  selectedTeam?: string | null
}

export function ColleagueDirectory({
  onColleagueSelect,
  searchQuery = "",
  selectedTeam = null,
}: ColleagueDirectoryProps) {
  // Mock data - would come from API in real implementation
  const colleagues = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Partner",
      team: "litigation",
      avatar: "/placeholder.svg?height=128&width=128",
      initials: "SJ",
      email: "sarah.johnson@denning.com",
      phone: "+254 712 345 678",
      status: "Available",
      statusColor: "success",
      expertise: ["Contract Law", "Commercial Litigation", "Arbitration"],
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Associate",
      team: "litigation",
      avatar: "/placeholder.svg?height=128&width=128",
      initials: "MC",
      email: "michael.chen@denning.com",
      phone: "+254 723 456 789",
      status: "In Court",
      statusColor: "warning",
      expertise: ["Civil Litigation", "Family Law"],
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Paralegal",
      team: "corporate",
      avatar: "/placeholder.svg?height=128&width=128",
      initials: "ER",
      email: "emily.rodriguez@denning.com",
      phone: "+254 734 567 890",
      status: "Available",
      statusColor: "success",
      expertise: ["Corporate Law", "Due Diligence", "Compliance"],
    },
    {
      id: 4,
      name: "David Kim",
      role: "Associate",
      team: "intellectual-property",
      avatar: "/placeholder.svg?height=128&width=128",
      initials: "DK",
      email: "david.kim@denning.com",
      phone: "+254 745 678 901",
      status: "Meeting",
      statusColor: "warning",
      expertise: ["Intellectual Property", "Patent Law", "Trademark Registration"],
    },
    {
      id: 5,
      name: "Olivia Patel",
      role: "Partner",
      team: "corporate",
      avatar: "/placeholder.svg?height=128&width=128",
      initials: "OP",
      email: "olivia.patel@denning.com",
      phone: "+254 756 789 012",
      status: "Available",
      statusColor: "success",
      expertise: ["Mergers & Acquisitions", "Corporate Governance", "Securities Law"],
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Associate",
      team: "contracts",
      avatar: "/placeholder.svg?height=128&width=128",
      initials: "JW",
      email: "james.wilson@denning.com",
      phone: "+254 767 890 123",
      status: "Away",
      statusColor: "default",
      expertise: ["Contract Drafting", "Commercial Agreements", "Negotiation"],
    },
    {
      id: 7,
      name: "Sophia Lee",
      role: "Legal Assistant",
      team: "litigation",
      avatar: "/placeholder.svg?height=128&width=128",
      initials: "SL",
      email: "sophia.lee@denning.com",
      phone: "+254 778 901 234",
      status: "Available",
      statusColor: "success",
      expertise: ["Legal Research", "Document Preparation", "Client Communication"],
    },
    {
      id: 8,
      name: "Robert Nguyen",
      role: "Partner",
      team: "employment",
      avatar: "/placeholder.svg?height=128&width=128",
      initials: "RN",
      email: "robert.nguyen@denning.com",
      phone: "+254 789 012 345",
      status: "Available",
      statusColor: "success",
      expertise: ["Employment Law", "Labor Disputes", "Workplace Compliance"],
    },
    {
      id: 9,
      name: "Maria Garcia",
      role: "Associate",
      team: "international",
      avatar: "/placeholder.svg?height=128&width=128",
      initials: "MG",
      email: "maria.garcia@denning.com",
      phone: "+254 790 123 456",
      status: "Available",
      statusColor: "success",
      expertise: ["International Law", "Cross-border Transactions", "Trade Law"],
    },
  ]

  // Filter colleagues based on search query and selected team
  let filteredColleagues = [...colleagues]

  if (searchQuery) {
    const query = searchQuery.toLowerCase()
    filteredColleagues = filteredColleagues.filter(
      (colleague) =>
        colleague.name.toLowerCase().includes(query) ||
        colleague.role.toLowerCase().includes(query) ||
        colleague.expertise.some((exp) => exp.toLowerCase().includes(query)),
    )
  }

  if (selectedTeam) {
    filteredColleagues = filteredColleagues.filter((colleague) => colleague.team === selectedTeam)
  }

  if (filteredColleagues.length === 0) {
    return (
      <Card className="border-muted">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <p className="text-muted-foreground text-center">No colleagues found.</p>
          <p className="text-muted-foreground text-center mb-4">Try adjusting your search or filters.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredColleagues.map((colleague) => (
        <Card key={colleague.id} className="border-muted hover:border-primary/50 transition-colors">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="relative">
                <Avatar className="h-16 w-16 md:h-24 md:w-24">
                  <AvatarImage src={colleague.avatar || "/placeholder.svg"} alt={colleague.name} />
                  <AvatarFallback className="text-lg">{colleague.initials}</AvatarFallback>
                </Avatar>
                <div
                  className={`absolute bottom-0 right-0 h-4 w-4 rounded-full bg-${colleague.statusColor} border-2 border-background`}
                ></div>
              </div>
              <h3 className="font-medium mt-3">{colleague.name}</h3>
              <p className="text-sm text-muted-foreground">{colleague.role}</p>
              <Badge
                variant={
                  colleague.status === "Available"
                    ? "success"
                    : colleague.status === "In Court" || colleague.status === "Meeting"
                      ? "warning"
                      : "outline"
                }
                className="mt-2"
              >
                {colleague.status}
              </Badge>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground truncate">{colleague.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{colleague.phone}</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Expertise:</p>
              <div className="flex flex-wrap gap-1">
                {colleague.expertise.map((exp) => (
                  <Badge key={exp} variant="secondary" className="bg-secondary/50 text-xs">
                    {exp}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-4 pt-4 border-t border-muted">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Mail className="h-4 w-4 mr-1" />
                Email
              </Button>
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <MessageSquare className="h-4 w-4 mr-1" />
                Message
              </Button>
              <Button size="sm" className="w-full sm:w-auto" onClick={() => onColleagueSelect(colleague.id)}>
                View Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
