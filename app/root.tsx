import styles from "./tailwind.css";
import {
  Links,
  LinksFunction,
  LiveReload,
  MetaFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";

export const meta: MetaFunction = () => {
  return { title: "Hot Reservation" };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];;
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
        
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-sans bg-white border-box">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
