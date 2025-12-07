import { StatsCards } from "@/components/stats-cards"
import { RecentOrders } from "@/components/recent-orders"
import { InventoryOverview } from "@/components/inventory-overview"
import { SalesChart } from "@/components/sales-chart"

export default async function DashboardPage() {
  // Mock data since Supabase integration has been removed
  const stats = {
    totalOrders: 150,
    totalRevenue: 125000,
    totalProducts: 50,
    totalProfit: 45000,
    inventoryValue: 250000,
  }

  const recentOrders = [
    { id: 1, order_number: "ORD-001", total: 5000, customer: { full_name: "Иван Петров", email: "ivan@example.com" }, created_at: new Date().toISOString() },
    { id: 2, order_number: "ORD-002", total: 7500, customer: { full_name: "Мария Сидорова", email: "maria@example.com" }, created_at: new Date().toISOString() },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Панель управления</h1>
        <p className="text-muted-foreground mt-2">Обзор вашего онлайн-магазина и ключевых метрик</p>
      </div>

      <StatsCards stats={stats} />

      <div className="grid gap-6 md:grid-cols-2">
        <SalesChart />
        <InventoryOverview />
      </div>

      <RecentOrders orders={recentOrders} />
    </div>
  )
}
