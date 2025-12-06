"use client"

import type React from "react"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Package, AlertCircle } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const fillTestCredentials = () => {
    setEmail("admin@storeadmin.com")
    setPassword("admin123456")
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      router.push("/dashboard")
      router.refresh()
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

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

          <Card className="border-amber-200 bg-amber-50/50">
            <CardContent className="pt-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <p className="text-sm font-medium text-amber-900">Первый вход в систему</p>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    Если вы входите впервые, сначала{" "}
                    <Link href="/auth/sign-up" className="font-semibold underline">
                      зарегистрируйтесь
                    </Link>{" "}
                    с данными:
                  </p>
                  <div className="text-xs text-amber-900 bg-amber-100/50 rounded p-2 font-mono">
                    Email: admin@storeadmin.com
                    <br />
                    Пароль: admin123456
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Вход в систему</CardTitle>
              <CardDescription>Введите email и пароль для входа</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 rounded-lg border border-primary/20 bg-primary/5 p-3">
                <div className="flex items-start gap-2">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary">Тестовые данные</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Email: admin@storeadmin.com
                      <br />
                      Пароль: admin123456
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={fillTestCredentials}
                    className="text-xs bg-transparent"
                  >
                    Заполнить
                  </Button>
                </div>
              </div>

              <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Пароль</Label>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {error && <p className="text-sm text-destructive">{error}</p>}
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Вход..." : "Войти"}
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Нет аккаунта?{" "}
                  <Link
                    href="/auth/sign-up"
                    className="underline underline-offset-4 text-primary hover:text-primary/80"
                  >
                    Зарегистрироваться
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
