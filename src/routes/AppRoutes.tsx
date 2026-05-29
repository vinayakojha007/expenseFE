import AppLayout from "@/layouts/AppLayout";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import Dashboard from "@/pages/Dashboard";
import Expense from "@/pages/Expense";
import Investment from "@/pages/Investment";
import Reports from "@/pages/Reports";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

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