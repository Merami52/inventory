import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-muted/30 p-6">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
              <Package className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">StoreAdmin</h1>
              <p className="text-sm text-muted-foreground">Management System</p>
            </div>
          </div>

          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                  <Mail className="h-8 w-8 text-accent-foreground" />
                </div>
              </div>
              <CardTitle className="text-2xl">Проверьте вашу почту</CardTitle>
              <CardDescription>Мы отправили вам письмо с подтверждением</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                Пожалуйста, проверьте вашу электронную почту и перейдите по ссылке для подтверждения аккаунта перед
                входом в систему.
              </p>
              <Link href="/auth/login" className="block">
                <Button className="w-full">Вернуться на страницу входа</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
