export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
        <div>
          <h2 className="text-sm font-semibold">
            Expense Tracker
          </h2>

          <p className="text-xs text-muted-foreground">
            Production-ready finance management platform.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a
            href="/privacy"
            className="transition-colors hover:text-foreground"
          >
            Privacy
          </a>

          <a
            href="/terms"
            className="transition-colors hover:text-foreground"
          >
            Terms
          </a>

          <a
            href="/support"
            className="transition-colors hover:text-foreground"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  )
}