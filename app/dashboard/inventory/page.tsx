import { createClient } from "@/lib/supabase/server"
import { InventoryTable } from "@/components/inventory-table"

export default async function InventoryPage() {
  const supabase = await createClient()

  const { data: products } = await supabase
    .from("products")
    .select("*, categories(name)")
    .order("created_at", { ascending: false })

  const { data: categories } = await supabase.from("categories").select("*").order("name")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Инвентарь</h1>
        <p className="text-muted-foreground mt-2">Управление товарами и их количеством</p>
      </div>

      <InventoryTable products={products || []} categories={categories || []} />
    </div>
  )
}
