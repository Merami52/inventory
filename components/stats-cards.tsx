import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, DollarSign, Package, TrendingUp, Warehouse } from "lucide-react"

interface StatsCardsProps {
  stats: {
    totalOrders: number
    totalRevenue: number
    totalProducts: number
    totalProfit: number
    inventoryValue: number
  }
}

export function StatsCards({ stats }: StatsCardsProps) {
  const cards = [
    {
      title: "Всего заказов",
      value: stats.totalOrders,
      icon: ShoppingCart,
      description: "Общее количество заказов",
    },
    {
      title: "Выручка",
      value: `$${stats.totalRevenue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      icon: DollarSign,
      description: "Общая выручка",
    },
    {
      title: "Товаров в наличии",
      value: stats.totalProducts,
      icon: Package,
      description: "Уникальных товаров",
    },
    {
      title: "Прибыль",
      value: `$${stats.totalProfit.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      icon: TrendingUp,
      description: "Чистая прибыль",
    },
    {
      title: "Стоимость инвентаря",
      value: `$${stats.inventoryValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      icon: Warehouse,
      description: "Общая стоимость товаров",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
