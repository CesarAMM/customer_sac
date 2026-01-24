import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../features/auth/Loginpage";
import ProtectedRoute from "../components/ProtectedRoute";

function CaseListPage() {
  return <div>Listado de casos (placeholder)</div>;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/cases"
        element={
          <ProtectedRoute>
            <CaseListPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/cases" />} />
    </Routes>
  );
}
