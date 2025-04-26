import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import tailwind from "./tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico" },
  { rel: "stylesheet", href: tailwind }
];

export const meta: MetaFunction = () => [
  { title: "Remix App" },
];

export default function App() {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head >
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen bg-secondary/70" suppressHydrationWarning={true}>
        <main className="flex-grow">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return <div>An unexpected error occurred: {error instanceof Error ? error.message : "Unknown error"}</div>;
}