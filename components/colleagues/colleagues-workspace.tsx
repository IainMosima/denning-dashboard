"use client"

import { useState } from "react"
import { ColleagueDirectory } from "@/components/colleagues/colleague-directory"
import { ColleagueProfile } from "@/components/colleagues/colleague-profile"
import { ColleagueSearch } from "@/components/colleagues/colleague-search"
import { ColleagueTeams } from "@/components/colleagues/colleague-teams"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function ColleaguesWorkspace() {
  const [view, setView] = useState<"directory" | "profile">("directory")
  const [selectedColleagueId, setSelectedColleagueId] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null)

  const handleColleagueSelect = (colleagueId: number) => {
    setSelectedColleagueId(colleagueId)
    setView("profile")
  }

  const handleBackToDirectory = () => {
    setView("directory")
    setSelectedColleagueId(null)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setSelectedTeam(null)
  }

  const handleTeamSelect = (team: string) => {
    setSelectedTeam(team)
    setSearchQuery("")
  }

  return (
    <div className="container mx-auto p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          {view === "directory" ? (
            <>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">Colleagues</h1>
              <p className="text-muted-foreground">Connect and collaborate with your legal team</p>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={handleBackToDirectory}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-xl md:text-2xl font-bold tracking-tight">Colleague Profile</h1>
                <p className="text-muted-foreground">View colleague information and contact details</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {view === "directory" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            <div className="md:col-span-1 space-y-4 md:space-y-6">
              <ColleagueTeams onTeamSelect={handleTeamSelect} selectedTeam={selectedTeam} />
            </div>
            <div className="md:col-span-3 space-y-4 md:space-y-6">
              <ColleagueSearch onSearch={handleSearch} />
              <ColleagueDirectory
                onColleagueSelect={handleColleagueSelect}
                searchQuery={searchQuery}
                selectedTeam={selectedTeam}
              />
            </div>
          </div>
        </>
      )}

      {view === "profile" && selectedColleagueId && <ColleagueProfile colleagueId={selectedColleagueId} />}
    </div>
  )
}
