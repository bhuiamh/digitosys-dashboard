export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        This is Dashboard
        {children}
      </section>
    )
  }