import { Outlet } from "react-router-dom";

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { LeftSidebar } from "@/components/shared/LeftSidebar";

import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";

export default function AppLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-white text-black">
        
        {/* Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <SidebarInset>
          <div className="flex min-h-screen flex-col">
            
            <Navbar />

            <main className="flex-1 overflow-y-auto bg-zinc-50 p-4 md:p-6 lg:p-8">
              <Outlet />
            </main>

            <Footer />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}