import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Order {
  id: string
  order_number: string
  status: string
  total_amount: number
  created_at: string
  customers: {
    full_name: string
    email: string
  } | null
}

const statusColors: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  pending: "outline",
  processing: "secondary",
  shipped: "default",
  delivered: "default",
  cancelled: "destructive",
}

const statusLabels: Record<string, string> = {
  pending: "Ожидает",
  processing: "В обработке",
  shipped: "Отправлен",
  delivered: "Доставлен",
  cancelled: "Отменен",
}

export function RecentOrders({ orders }: { orders: Order[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Последние заказы</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div className="space-y-1">
                <p className="text-sm font-medium">{order.order_number}</p>
                <p className="text-sm text-muted-foreground">{order.customers?.full_name || "Неизвестный клиент"}</p>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant={statusColors[order.status]}>{statusLabels[order.status]}</Badge>
                <p className="text-sm font-medium w-24 text-right">${Number(order.total_amount).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
