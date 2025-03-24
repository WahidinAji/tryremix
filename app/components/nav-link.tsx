'use client';

import { Link, useLocation } from "react-router";



export default function Nav() {
    const path = useLocation().pathname;

    return (
        // <nav className="w-full flex flex-col items-center gap-4 p-4 bg-gray-100 dark:bg-gray-900">
        <nav className="flex flex-col items-center gap-4 p-4 bg-secondary dark:bg-primary">
            <ul className="flex flex-row justify-around gap-4 p-4">
                <li className={path === "/admin" ? "text-blue-500" : ""}>
                    <Link to="/admin">Dashboard</Link>
                </li>
                <li className={path === "/admin/users" ? "text-blue-500" : ""}>
                    <Link to="/admin/users">Users</Link>
                </li>
            </ul>
        </nav>
    );
}