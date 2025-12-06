import { createClient } from "@/lib/supabase/server"
import { OrdersTable } from "@/components/orders-table"

export default async function OrdersPage() {
  const supabase = await createClient()

  const { data: orders } = await supabase
    .from("orders")
    .select("*, customers(full_name, email, phone)")
    .order("created_at", { ascending: false })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Заказы</h1>
        <p className="text-muted-foreground mt-2">Управление заказами и их статусами</p>
      </div>

      <OrdersTable orders={orders || []} />
    </div>
  )
}
