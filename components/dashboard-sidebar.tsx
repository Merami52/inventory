"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Package, LayoutDashboard, ShoppingCart, PackageSearch, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Панель", href: "/dashboard", icon: LayoutDashboard },
  { name: "Заказы", href: "/dashboard/orders", icon: ShoppingCart },
  { name: "Инвентарь", href: "/dashboard/inventory", icon: PackageSearch },
  { name: "Клиенты", href: "/dashboard/customers", icon: Users },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r bg-card flex flex-col">
      <div className="p-6 border-b">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Package className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold">StoreAdmin</h1>
            <p className="text-xs text-muted-foreground">Management System</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
