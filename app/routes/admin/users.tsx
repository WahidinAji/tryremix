import type { Route } from "./+types";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Users" },
        { name: "description", content: "Users page" },
    ];
}
export default function Users() {
    return (
        <div>
            <h1>Users</h1>
        </div>
    );
}