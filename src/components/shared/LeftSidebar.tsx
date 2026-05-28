import {
  LayoutDashboard,
  Receipt,
  PieChart,
  BarChart3,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Expenses",
    url: "/expenses",
    icon: Receipt,
  },
  {
    title: "Investments",
    url: "/investments",
    icon: PieChart,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: BarChart3,
  },
];

export function LeftSidebar() {
  return (
    <Sidebar>
      
      {/* Header */}
      <SidebarHeader className="border-b px-4 py-5">
        <div className="flex items-center gap-3">
          
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-sm font-bold text-white">
            ET
          </div>

          <div>
            <h2 className="text-lg font-semibold">
              Expense Tracker
            </h2>

            <p className="text-xs text-zinc-500">
              Finance Platform
            </p>
          </div>
        </div>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        <SidebarGroup>
          
          <SidebarGroupLabel>
            MAIN MENU
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `
                        flex items-center gap-3 rounded-xl px-3 py-2 transition-all
                        
                        ${
                          isActive
                            ? "bg-black text-white"
                            : "text-zinc-600 hover:bg-zinc-100 hover:text-black"
                        }
                        `
                      }
                    >
                      <item.icon size={18} />

                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>

                </SidebarMenuItem>
              ))}

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t p-4">
        <div className="rounded-2xl bg-zinc-100 p-4">
          
          <p className="text-sm font-medium">
            Expense Tracker
          </p>

          <p className="mt-1 text-xs text-zinc-500">
            Manage your finances smarter.
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}