import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus } from "lucide-react"

interface CasePartiesProps {
  caseId: number
}

export function CaseParties({ caseId }: CasePartiesProps) {
  // Mock data - would come from API in real implementation
  const parties = [
    {
      id: 1,
      name: "Smith Enterprises",
      role: "Plaintiff",
      type: "Corporate",
      attorney: "Sarah Johnson",
      contact: "John Smith",
      email: "john@smithenterprises.com",
      phone: "+254 712 345 678",
    },
    {
      id: 2,
      name: "Johnson & Co.",
      role: "Defendant",
      type: "Corporate",
      attorney: "David Williams",
      contact: "Robert Johnson",
      email: "robert@johnsonco.com",
      phone: "+254 723 456 789",
    },
    {
      id: 3,
      name: "Kenya Insurance Ltd.",
      role: "Third Party",
      type: "Corporate",
      attorney: "Emily Rodriguez",
      contact: "Mary Kamau",
      email: "mary@kenyainsurance.com",
      phone: "+254 734 567 890",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Case Parties</CardTitle>
          <CardDescription>Parties involved in this case</CardDescription>
        </div>
        <Button size="sm" className="gap-1">
          <Plus className="h-4 w-4" />
          Add Party
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Party Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Attorney</TableHead>
              <TableHead>Contact Person</TableHead>
              <TableHead>Contact Info</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {parties.map((party) => (
              <TableRow key={party.id}>
                <TableCell className="font-medium">{party.name}</TableCell>
                <TableCell>{party.role}</TableCell>
                <TableCell>{party.type}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" alt={party.attorney} />
                      <AvatarFallback>
                        {party.attorney
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span>{party.attorney}</span>
                  </div>
                </TableCell>
                <TableCell>{party.contact}</TableCell>
                <TableCell>
                  <div className="text-sm">
                    <div>{party.email}</div>
                    <div className="text-muted-foreground">{party.phone}</div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
