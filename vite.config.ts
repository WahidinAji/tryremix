import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*.css"],
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/about", "routes/about/_layout.tsx", () => {
            route("", "routes/about/route.tsx", { index: true });
            route("team", "routes/about/team/route.tsx");
            route("contact", "routes/about/contact/route.tsx");
          });
          route("/contacts", "routes/contacts/_layout.tsx", () => {
            route("", "routes/contacts/route.tsx", { index: true });
            route(":contactId", "routes/contacts/$contactId.tsx");
            route(":contactId/edit", "routes/contacts/$contactId.edit.tsx");
            route(":contactId/delete", "routes/contacts/$contactId.delete.tsx");
          });
        });
      },
      // routes(defineRoutes) {
      //   return defineRoutes((route) => {
      //     route("/about", "routes/about/route.tsx", { index: true });
      //     // route("/auth/login", "routes/auth/login.tsx");

      //     //     //     route("/", "routes/_index/route.tsx", { index: true }),
      //     //     //     route("/auth/login", "routes/auth/login.tsx"),
      //     //     //     // route("/contacts", "routes/contacts/layout.tsx", {index: true, }, Children]),
      //     //     // route("/contacts", "routes/contacts/route.tsx"),
      //     //     // route("/contacts", "routes/contacts/_index.tsx"),
      //     //     route("/contacts/:contactId", "routes/contacts/$contactId.tsx");
      //     //     //     route(
      //     //     //       "/contacts/:contactId/edit",
      //     //     //       "routes/contacts/$contactId.edit.tsx"
      //     //     //     ),
      //     //     //     route(
      //     //     //       "/contacts/:contactId/destroy",
      //     //     //       "routes/contacts/$contactId.destroy.tsx"
      //     //     //     );
      //   });
      // },
    }),
    tsconfigPaths(),
  ],
});
