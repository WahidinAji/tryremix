import { Outlet } from "react-router";

export default function AdminLayout() {
    return (
        <div>
            <h1>Admin</h1>
            <div>
                <Outlet />
            </div>
        </div>
    );
}