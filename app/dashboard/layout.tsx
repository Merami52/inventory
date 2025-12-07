import type React from "react"
import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth/server"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { User } from "@/lib/auth/types"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      redirect("/auth/login")
    }

    return (
      <div className="flex min-h-screen bg-background">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader user={user as any} />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    )
  } catch (error) {
    console.error("Authentication error:", error)
    redirect("/auth/login")
  }
}
