import { Outlet } from "@remix-run/react";

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <div className="auth-container">
        <Outlet />
      </div>
    </div>
  );
}