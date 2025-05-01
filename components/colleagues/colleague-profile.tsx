"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Mail,
  Phone,
  MessageSquare,
  Calendar,
  FileText,
  Clock,
  MapPin,
  Briefcase,
  GraduationCap,
  Users,
  Building,
  Scale,
} from "lucide-react"

interface ColleagueProfileProps {
  colleagueId: number
}

export function ColleagueProfile({ colleagueId }: ColleagueProfileProps) {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data - would come from API in real implementation
  const colleague = {
    id: colleagueId,
    name: colleagueId === 1 ? "Sarah Johnson" : "Michael Chen",
    role: colleagueId === 1 ? "Senior Partner" : "Associate",
    team: "Litigation Team",
    avatar: "/placeholder.svg?height=256&width=256",
    initials: colleagueId === 1 ? "SJ" : "MC",
    email: colleagueId === 1 ? "sarah.johnson@denning.com" : "michael.chen@denning.com",
    phone: colleagueId === 1 ? "+254 712 345 678" : "+254 723 456 789",
    status: colleagueId === 1 ? "Available" : "In Court",
    statusColor: colleagueId === 1 ? "success" : "warning",
    bio:
      colleagueId === 1
        ? "Sarah is a Senior Partner with over 15 years of experience in commercial litigation and contract law. She specializes in complex commercial disputes and has represented clients in high-profile cases across East Africa."
        : "Michael is an Associate focusing on civil litigation and family law. He joined Denning after completing his law degree at the University of Nairobi and has quickly established himself as a valuable team member.",
    expertise:
      colleagueId === 1
        ? ["Contract Law", "Commercial Litigation", "Arbitration", "Dispute Resolution", "Corporate Law"]
        : ["Civil Litigation", "Family Law", "Legal Research", "Client Advocacy"],
    education:
      colleagueId === 1
        ? [
            { degree: "Juris Doctor", institution: "Harvard Law School", year: "2008" },
            { degree: "Bachelor of Laws (LLB)", institution: "University of Nairobi", year: "2005" },
          ]
        : [
            { degree: "Bachelor of Laws (LLB)", institution: "University of Nairobi", year: "2018" },
            { degree: "Diploma in Legal Practice", institution: "Kenya School of Law", year: "2019" },
          ],
    languages: colleagueId === 1 ? ["English", "Swahili", "French"] : ["English", "Swahili", "Mandarin"],
    activeCases:
      colleagueId === 1
        ? [
            { id: 1, name: "Smith v. Johnson Contract Dispute", role: "Lead Attorney" },
            { id: 2, name: "ABC Corp Intellectual Property Case", role: "Supervising Partner" },
            { id: 3, name: "Estate of James Wilson", role: "Legal Advisor" },
          ]
        : [
            { id: 1, name: "Smith v. Johnson Contract Dispute", role: "Associate Attorney" },
            { id: 4, name: "XYZ Ltd. Tax Appeal", role: "Research Attorney" },
          ],
    recentActivity:
      colleagueId === 1
        ? [
            { type: "Document", action: "Reviewed", item: "Motion for Summary Judgment", time: "2 hours ago" },
            { type: "Case", action: "Updated", item: "Smith v. Johnson Contract Dispute", time: "Yesterday" },
            { type: "Meeting", action: "Scheduled", item: "Client Consultation - ABC Corp", time: "2 days ago" },
          ]
        : [
            { type: "Document", action: "Created", item: "Response to Motion", time: "1 hour ago" },
            { type: "Research", action: "Completed", item: "Case Law Research for XYZ Ltd.", time: "Yesterday" },
            { type: "Meeting", action: "Attended", item: "Team Strategy Meeting", time: "3 days ago" },
          ],
    availability:
      colleagueId === 1
        ? [
            { day: "Monday", hours: "9:00 AM - 5:00 PM", status: "In Office" },
            { day: "Tuesday", hours: "9:00 AM - 5:00 PM", status: "In Office" },
            { day: "Wednesday", hours: "9:00 AM - 5:00 PM", status: "In Office" },
            { day: "Thursday", hours: "9:00 AM - 5:00 PM", status: "Court Appearance (AM)" },
            { day: "Friday", hours: "9:00 AM - 3:00 PM", status: "In Office" },
          ]
        : [
            { day: "Monday", hours: "9:00 AM - 5:00 PM", status: "In Office" },
            { day: "Tuesday", hours: "9:00 AM - 5:00 PM", status: "Court Appearance" },
            { day: "Wednesday", hours: "9:00 AM - 5:00 PM", status: "In Office" },
            { day: "Thursday", hours: "9:00 AM - 5:00 PM", status: "In Office" },
            { day: "Friday", hours: "9:00 AM - 5:00 PM", status: "In Office" },
          ],
    location: colleagueId === 1 ? "Nairobi Office, 4th Floor" : "Nairobi Office, 2nd Floor",
  }

  return (
    <div className="space-y-6">
      <Card className="border-muted">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center text-center md:w-1/4">
              <div className="relative">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={colleague.avatar || "/placeholder.svg"} alt={colleague.name} />
                  <AvatarFallback className="text-2xl">{colleague.initials}</AvatarFallback>
                </Avatar>
                <div
                  className={`absolute bottom-0 right-0 h-5 w-5 rounded-full bg-${colleague.statusColor} border-2 border-background`}
                ></div>
              </div>
              <h2 className="text-xl font-bold mt-4">{colleague.name}</h2>
              <p className="text-muted-foreground">{colleague.role}</p>
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

              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <MessageSquare className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Calendar className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="md:w-3/4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">About</h3>
                  <p className="text-muted-foreground mt-1">{colleague.bio}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium">Contact Information</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{colleague.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{colleague.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{colleague.location}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium">Team & Expertise</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{colleague.team}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {colleague.expertise.map((exp) => (
                          <Badge key={exp} variant="secondary" className="bg-secondary/50">
                            {exp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="cases">Active Cases</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="availability">Availability</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4">
          <Card className="border-muted">
            <CardHeader>
              <CardTitle>Professional Overview</CardTitle>
              <CardDescription>Education, languages, and professional background</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Education
                  </h3>
                  <div className="space-y-3 mt-3">
                    {colleague.education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-primary/50 pl-3">
                        <p className="font-medium">{edu.degree}</p>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <p className="text-xs text-muted-foreground">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {colleague.languages.map((lang) => (
                      <Badge key={lang} variant="outline">
                        {lang}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-sm font-medium flex items-center gap-2 mt-6">
                    <Building className="h-4 w-4" />
                    Department
                  </h3>
                  <div className="mt-3">
                    <Badge variant="secondary" className="bg-secondary/50">
                      {colleague.team}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="cases" className="mt-4">
          <Card className="border-muted">
            <CardHeader>
              <CardTitle>Active Cases</CardTitle>
              <CardDescription>Current legal cases and matters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {colleague.activeCases.map((caseItem) => (
                  <div key={caseItem.id} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/50">
                    <div className="rounded-full p-2 bg-primary/10 text-primary">
                      <Scale className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{caseItem.name}</p>
                        <Badge variant="outline">{caseItem.role}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="activity" className="mt-4">
          <Card className="border-muted">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {colleague.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="rounded-full p-2 bg-muted">
                      {activity.type === "Document" ? (
                        <FileText className="h-4 w-4 text-muted-foreground" />
                      ) : activity.type === "Case" ? (
                        <Scale className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">
                        <span className="text-muted-foreground">{colleague.name}</span> {activity.action}{" "}
                        <span className="font-semibold">{activity.item}</span>
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        <span>{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="availability" className="mt-4">
          <Card className="border-muted">
            <CardHeader>
              <CardTitle>Weekly Availability</CardTitle>
              <CardDescription>Schedule and availability information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {colleague.availability.map((avail, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="font-medium">{avail.day}</div>
                    <div className="text-sm text-muted-foreground">{avail.hours}</div>
                    <Badge
                      variant={
                        avail.status.includes("Court")
                          ? "warning"
                          : avail.status === "In Office"
                            ? "success"
                            : "outline"
                      }
                    >
                      {avail.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/50">
              <Button className="w-full">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Meeting
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
