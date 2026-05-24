export function Navbar() {
  const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Expenses", href: "/expenses" },
    { label: "Investments", href: "/investments" },
    { label: "Budgets", href: "/budgets" },
    { label: "Reports", href: "/reports" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="mx-auto flex h-20 w-full items-center justify-between px-6">
        {/* Left */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-sm font-bold text-white">
              ET
            </div>

            <div className="leading-tight">
              <h1 className="text-md font-bold whitespace-nowrap">
                {" "}
                Expense Tracker
              </h1>

              <p className="text-xs text-muted-foreground">
                Finance Management Platform
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden items-center lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden sm:block">
            <input
              type="text"
              placeholder="Search expenses..."
              className="h-10 w-[240px] rounded-xl border bg-background px-4 text-sm outline-none ring-offset-background transition-all placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          {/* Notification */}
          <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border hover:bg-muted">
            🔔
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button>

          {/* Profile */}
          <button className="flex shrink-0 items-center gap-3 rounded-2xl border px-3 py-2 hover:bg-muted">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
              VO
            </div>

            <div className="hidden text-left md:block">
              <p className="text-sm font-semibold">Vinayak Ojha</p>

              <p className="text-xs text-muted-foreground">Software Engineer</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
