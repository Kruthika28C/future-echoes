import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Nav, Footer } from "@/components/cv/Nav";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass-strong rounded-3xl p-10">
        <h1 className="font-display text-7xl text-aurora">404</h1>
        <p className="mt-4 text-muted-foreground">This universe doesn't exist… yet.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-medium text-primary-foreground">
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass-strong rounded-3xl p-10">
        <h1 className="font-display text-2xl">A wormhole collapsed</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-medium text-primary-foreground">
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CareerVerse — Step into the parallel universes of your future self" },
      { name: "description", content: "An AI-powered career multiverse. Explore cinematic future versions of yourself based on your skills, personality, and dreams." },
      { property: "og:title", content: "CareerVerse — Step into the parallel universes of your future self" },
      { property: "og:description", content: "An AI-powered career multiverse. Explore cinematic future versions of yourself based on your skills, personality, and dreams." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CareerVerse — Step into the parallel universes of your future self" },
      { name: "twitter:description", content: "An AI-powered career multiverse. Explore cinematic future versions of yourself based on your skills, personality, and dreams." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d8ea828d-6cfa-4f22-a5e1-46c9ec4bf429/id-preview-37354052--0d8c377e-0f27-40a3-acae-48b049a01ddd.lovable.app-1778313506606.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d8ea828d-6cfa-4f22-a5e1-46c9ec4bf429/id-preview-37354052--0d8c377e-0f27-40a3-acae-48b049a01ddd.lovable.app-1778313506606.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen relative">
        <Nav />
        <main className="pt-24">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
