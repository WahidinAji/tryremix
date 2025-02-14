import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*.css"],
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "routes/_index/route.tsx", { index: true }),
            route("/auth/login", "routes/auth/login.tsx"),
            // route("/contacts", "routes/contacts/route.tsx"),
            route("/contacts", "routes/contacts/_index.tsx"),
            route("/contacts/:contactId", "routes/contacts/$contactId.tsx"),
            route(
              "/contacts/:contactId/edit",
              "routes/contacts/$contactId.edit.tsx"
            ),
            route(
              "/contacts/:contactId/destroy",
              "routes/contacts/$contactId.destroy.tsx"
            );
        });
      },
    }),
    tsconfigPaths(),
  ],
});
