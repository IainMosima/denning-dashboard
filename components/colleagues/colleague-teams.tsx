"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Scale, Building, GraduationCap, FileText, Briefcase, Globe } from "lucide-react"

interface ColleagueTeamsProps {
  onTeamSelect: (team: string) => void
  selectedTeam: string | null
}

export function ColleagueTeams({ onTeamSelect, selectedTeam }: ColleagueTeamsProps) {
  // Mock data - would come from API in real implementation
  const teams = [
    {
      id: "litigation",
      name: "Litigation Team",
      icon: Scale,
      count: 8,
    },
    {
      id: "corporate",
      name: "Corporate Law",
      icon: Building,
      count: 6,
    },
    {
      id: "intellectual-property",
      name: "Intellectual Property",
      icon: GraduationCap,
      count: 4,
    },
    {
      id: "contracts",
      name: "Contracts Team",
      icon: FileText,
      count: 5,
    },
    {
      id: "employment",
      name: "Employment Law",
      icon: Briefcase,
      count: 3,
    },
    {
      id: "international",
      name: "International Law",
      icon: Globe,
      count: 4,
    },
  ]

  return (
    <Card className="border-muted">
      <CardHeader className="pb-3">
        <CardTitle>Teams</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <Button
            variant={selectedTeam === null ? "secondary" : "ghost"}
            className="w-full justify-start text-left"
            onClick={() => onTeamSelect("")}
          >
            <Users className="mr-2 h-4 w-4" />
            <span className="flex-1">All Colleagues</span>
            <Badge variant="outline" className="ml-auto">
              {teams.reduce((sum, team) => sum + team.count, 0)}
            </Badge>
          </Button>

          {teams.map((team) => (
            <Button
              key={team.id}
              variant={selectedTeam === team.id ? "secondary" : "ghost"}
              className="w-full justify-start text-left"
              onClick={() => onTeamSelect(team.id)}
            >
              <team.icon className="mr-2 h-4 w-4" />
              <span className="flex-1">{team.name}</span>
              <Badge variant="outline" className="ml-auto">
                {team.count}
              </Badge>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
