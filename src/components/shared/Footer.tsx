export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="flex flex-col items-center justify-between gap-3 px-4 py-4 text-sm text-zinc-500 md:flex-row md:px-6">
        
        {/* Left */}
        <p>
          © 2026 Expense Tracker. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-6">
          <button className="transition hover:text-black">
            Privacy
          </button>

          <button className="transition hover:text-black">
            Terms
          </button>

          <button className="transition hover:text-black">
            Support
          </button>
        </div>
      </div>
    </footer>
  );
}