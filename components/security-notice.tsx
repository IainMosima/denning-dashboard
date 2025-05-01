import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock } from "lucide-react"

export function SecurityNotice() {
  return (
    <Card className="bg-blue-950/30 dark:border-blue-900/50">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
          <Shield className="h-5 w-5" />
          Security & Confidentiality
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 text-sm">
          <p className="text-muted-foreground">
            All documents and research are encrypted and protected. Your client data is secure and confidential.
          </p>
          <div className="flex items-start gap-2">
            <Lock className="h-4 w-4 mt-0.5 text-blue-600 dark:text-blue-400" />
            <p className="text-muted-foreground">
              Remember to log out when you're done and avoid accessing sensitive information on public networks.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
