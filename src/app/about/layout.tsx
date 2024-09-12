export default function Layout({
    children,
    users,
    products,
  }: {
    children: React.ReactNode
    users: React.ReactNode
    products: React.ReactNode
  }) {
    return (
      <div className="max-w-7xl m-auto">
        {children}
        <div className="flex max-w-7xl justify-center gap-32   m-auto mt-5 rounded-2xl py-20 bg-slate-900">
        {users}
        {products}
            </div>
        
        
      </div>
    )
  }