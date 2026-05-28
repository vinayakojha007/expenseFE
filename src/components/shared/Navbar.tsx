import { Bell, Menu, Search } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-20 border-b bg-white">
      <div className="flex h-full items-center justify-between px-4 md:px-6">
        
        {/* LEFT */}
        <div className="flex items-center gap-4">
          
          {/* Mobile Menu Button */}
          <button className="flex h-11 w-11 items-center justify-center rounded-2xl border transition hover:bg-zinc-100 lg:hidden">
            <Menu size={20} />
          </button>

          {/* Search */}
          <div className="hidden items-center gap-3 rounded-2xl border bg-zinc-50 px-4 py-2 md:flex">
            <Search size={18} className="text-zinc-400" />

            <input
              type="text"
              placeholder="Search transactions..."
              className="w-[220px] bg-transparent text-sm outline-none placeholder:text-zinc-400 lg:w-[300px]"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          
          {/* Notification */}
          <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border transition hover:bg-zinc-100">
            <Bell size={18} />

            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-emerald-500" />
          </button>

          {/* Profile */}
          <button className="flex items-center gap-3 rounded-2xl border px-2 py-2 transition hover:bg-zinc-100 md:px-3">
            
            {/* Avatar */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
              VO
            </div>

            {/* User Info */}
            <div className="hidden text-left md:block">
              <p className="text-sm font-semibold leading-none">
                Vinayak Ojha
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Software Engineer
              </p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}