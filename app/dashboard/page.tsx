import { createClient } from "@/lib/supabase/server"
import { StatsCards } from "@/components/stats-cards"
import { RecentOrders } from "@/components/recent-orders"
import { InventoryOverview } from "@/components/inventory-overview"
import { SalesChart } from "@/components/sales-chart"

export default async function DashboardPage() {
  const supabase = await createClient()

  // Fetch statistics
  const [
    { count: totalOrders },
    { data: orders },
    { count: totalProducts },
    { data: products },
    { data: recentOrders },
  ] = await Promise.all([
    supabase.from("orders").select("*", { count: "exact", head: true }),
    supabase.from("orders").select("total_amount, total_cost"),
    supabase.from("products").select("*", { count: "exact", head: true }),
    supabase.from("products").select("quantity, price, cost"),
    supabase.from("orders").select("*, customers(full_name, email)").order("created_at", { ascending: false }).limit(5),
  ])

  const totalRevenue = orders?.reduce((sum, order) => sum + Number(order.total_amount), 0) || 0
  const totalCost = orders?.reduce((sum, order) => sum + Number(order.total_cost), 0) || 0
  const totalProfit = totalRevenue - totalCost

  const inventoryValue =
    products?.reduce((sum, product) => {
      return sum + Number(product.price) * product.quantity
    }, 0) || 0

  const stats = {
    totalOrders: totalOrders || 0,
    totalRevenue,
    totalProducts: totalProducts || 0,
    totalProfit,
    inventoryValue,
  }

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

      <RecentOrders orders={recentOrders || []} />
    </div>
  )
}
