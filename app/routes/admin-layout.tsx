import { Link, Outlet } from "react-router";
import Nav from "~/components/nav-link";

export default function AdminLayout() {
    return (
        // <main className="flex items-center justify-center pt-16 pb-4 flex-col">
        <main className="bg-secondary dark:bg-primary w-full h-screen">
            {/* <nav className="w-full flex flex-col items-center gap-4 p-4 bg-gray-100 dark:bg-gray-900">
                <ul className="flex flex-row justify-around gap-4 p-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/admin">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/admin/users">Users</Link>
                    </li>
                </ul>
            </nav> */}
            <Nav />
            <Outlet />
        </main>
    );
}