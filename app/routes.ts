import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    ...prefix("admin", [
        layout("routes/admin-layout.tsx", [
            route("/", "routes/admin/index.tsx"),
            route("users", "routes/admin/users.tsx"),
        ]),
    ]),
] satisfies RouteConfig;
