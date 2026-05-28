import AppLayout from "@/layouts/AppLayout";
import Dashboard from "@/pages/Dashboard";
import Expense from "@/pages/Expense";
import Investment from "@/pages/Investment";
import Reports from "@/pages/Reports";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/expenses"
            element={<Expense />}
          />

          <Route
            path="/investments"
            element={<Investment />}
          />


          <Route
            path="/reports"
            element={<Reports />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}