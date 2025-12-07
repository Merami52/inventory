import { InventoryTable } from "@/components/inventory-table"

export default async function InventoryPage() {
  // Mock data since Supabase integration has been removed
  const products = [
    { id: 1, name: "Товар 1", category_id: 1, price: 1000, quantity: 10, created_at: new Date().toISOString(), categories: { name: "Категория 1" } },
    { id: 2, name: "Товар 2", category_id: 2, price: 2000, quantity: 5, created_at: new Date().toISOString(), categories: { name: "Категория 2" } },
  ]
  
  const categories = [
    { id: 1, name: "Категория 1" },
    { id: 2, name: "Категория 2" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Инвентарь</h1>
        <p className="text-muted-foreground mt-2">Управление товарами и их количеством</p>
      </div>

      <InventoryTable products={products} categories={categories} />
    </div>
  )
}
