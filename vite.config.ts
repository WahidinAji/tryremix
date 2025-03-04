import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("backoffice", "routes/backoffice/dashboard.tsx", {
            index: true,
          });
          route(
            "backoffice/users",
            "routes/backoffice/users/layout.tsx",
            () => {
              route("", "routes/backoffice/users/index.tsx", { index: true });
            }
          );
        });
      },
    }),
    tsconfigPaths(),
  ],
});
