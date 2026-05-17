import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Loader } from "@/components/Loader";
import { CursorGlow } from "@/components/CursorGlow";
import { Particles } from "@/components/Particles";
import { FloatingShapes } from "@/components/FloatingShapes";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Arooj Shahzadi — Teacher · Artist · Designer · BSSE" },
      { name: "description", content: "Portfolio of Arooj Shahzadi — teacher, digital artist, social media designer, and BSSE student crafting luxe, glowing experiences." },
      { name: "author", content: "Arooj Shahzadi" },
      { property: "og:site_name", content: "Arooj Shahzadi" },
      { property: "og:title", content: "Arooj Shahzadi — Teacher · Artist · Designer · BSSE" },
      { property: "og:description", content: "Portfolio of Arooj Shahzadi — teacher, digital artist, social media designer, and BSSE student crafting luxe, glowing experiences." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.svg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:url", content: "https://arooj-shahzadi.vercel.app" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Arooj Shahzadi — Teacher · Artist · Designer · BSSE" },
      { name: "twitter:description", content: "Portfolio of Arooj Shahzadi — teacher, digital artist, social media designer, and BSSE student crafting luxe, glowing experiences." },
      { name: "twitter:image", content: "/og-image.svg" },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Loader />
      <CursorGlow />
      <FloatingShapes />
      <Particles count={50} />
      <Nav />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
