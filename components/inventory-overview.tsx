import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/server"
import { Package } from "lucide-react"

export async function InventoryOverview() {
  const supabase = await createClient()

  const { data: products } = await supabase
    .from("products")
    .select("name, quantity, status")
    .order("quantity", { ascending: true })
    .limit(5)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5" />
          Товары с низким запасом
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {products?.map((product) => (
            <div key={product.name} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div className="space-y-1">
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-xs text-muted-foreground">
                  Статус: {product.status === "active" ? "Активен" : product.status}
                </p>
              </div>
              <div className={`text-sm font-medium ${product.quantity < 50 ? "text-destructive" : ""}`}>
                {product.quantity} шт.
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
