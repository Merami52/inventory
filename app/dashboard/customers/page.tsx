import { CustomersTable } from "@/components/customers-table"

export default async function CustomersPage() {
  // Mock data since Supabase integration has been removed
  const customers = [
    { id: 1, name: "Иван Петров", email: "ivan@example.com", phone: "+7 (999) 123-45-67", created_at: new Date().toISOString() },
    { id: 2, name: "Мария Сидорова", email: "maria@example.com", phone: "+7 (999) 234-56-78", created_at: new Date().toISOString() },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Клиенты</h1>
        <p className="text-muted-foreground mt-2">Управление данными клиентов</p>
      </div>

      <CustomersTable customers={customers} />
    </div>
  )
}
