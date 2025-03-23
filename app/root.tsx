import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "~/tailwind.css";
import Header from "./components/custom/header";
import { THEME_KEY, useThemePreference } from "~/hooks/theme-preference";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ThemePreventFlashScript />
        <link rel="shortcut icon" href="../public/siesta.jpeg" type="image/x-icon" />
      </head>
      <body suppressHydrationWarning={true}
        className="transition-colors duration-300 bg-gray-100 dark:bg-gray-900"
      >
        <Header />
        <div className="transition-colors duration-300">{children}</div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}


export function ThemePreventFlashScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (() => {
              const theme = localStorage.getItem('${THEME_KEY}');
              if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
              } else {
                  document.documentElement.classList.add('light');
                  document.documentElement.classList.remove('dark');
              }
          })();
        `,
      }}
    />
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if(isRouteErrorResponse(error)) {
    <NotFoundBoundary />
  } else if (error instanceof Error) {
    return <h1>{error.message}</h1>
  }
  return <h1>Something went wrong</h1>
}

export function NotFoundBoundary() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <h1>Blog</h1>
      </div>
    </div>
  );
}