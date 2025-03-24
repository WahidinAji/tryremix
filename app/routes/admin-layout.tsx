import { Link, Outlet } from "react-router";
import Nav from "~/components/nav-link";

export default function AdminLayout() {
    return (
        <main className="bg-secondary dark:bg-primary w-full h-screen">
            <Nav />
            <Outlet />
        </main>
    );
}