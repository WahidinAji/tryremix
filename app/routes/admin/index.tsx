import type { Route } from "./+types";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Admin Dashboard" },
        { name: "description", content: "Dashboard page" },
    ];
}

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}