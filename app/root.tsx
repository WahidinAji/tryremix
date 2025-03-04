import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "./tailwind.css";
import { useState, useEffect } from "react";
import Header from "./components/custom/header";

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
  const [isDark, setIsDark] = useState(false);
  // Toggle dark mode and save to localStorage
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme-ui', newTheme ? 'dark' : 'light');
  };

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle('dark', isDark);
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
   // Check localStorage first
    const savedTheme = localStorage.getItem('theme-ui');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      // Fall back to system preference if no saved theme
      const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDark(darkModePreference.matches);
      const handleChange = (e: MediaQueryListEvent) => {
        // Only update if no user preference is stored
        if (!localStorage.getItem('theme-ui')) {
          setIsDark(e.matches);
        }
      };
      darkModePreference.addEventListener('change', handleChange);
      return () => darkModePreference.removeEventListener('change', handleChange);
    }
  }, []);
  const location = useLocation();
  return (
    <html lang="en" className={isDark ? 'dark' : ''}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body data-theme={isDark ? 'dark' : 'light'} className="transition-colors duration-300 bg-gray-100 dark:bg-gray-900">
        <Header navActive={location.pathname} isDark={isDark} toggleTheme={toggleTheme}  />
        <div className="transition-colors duration-300">
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}