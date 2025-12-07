import { OrdersTable } from "@/components/orders-table"

export default async function OrdersPage() {
  // Mock data since Supabase integration has been removed
  const orders = [
    { id: 1, order_number: "ORD-001", customer: { full_name: "Иван Петров", email: "ivan@example.com", phone: "+7 (999) 123-45-67" }, total: 5000, status: "completed", created_at: new Date().toISOString() },
    { id: 2, order_number: "ORD-002", customer: { full_name: "Мария Сидорова", email: "maria@example.com", phone: "+7 (999) 234-56-78" }, total: 7500, status: "pending", created_at: new Date().toISOString() },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Заказы</h1>
        <p className="text-muted-foreground mt-2">Управление заказами и их статусами</p>
      </div>

      <OrdersTable orders={orders} />
    </div>
  )
}
