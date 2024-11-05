import type { Metadata } from "next";
import FlexboxPlayground from "@/components/FlexboxPlayground/FlexboxPlayground";
import { JsonLd } from "@/components/JsonLd/json-ld";

export const metadata: Metadata = {
  title: "Flexbox Playground - Interactive CSS Flexbox Learning Tool",
  description:
    "Learn and experiment with CSS Flexbox properties in real-time. Interactive tool for understanding flex container and item properties with live preview.",
  keywords:
    "CSS Flexbox, web development, CSS layout, flex container, flex items, interactive learning, CSS tutorial",
  openGraph: {
    title: "Flexbox Playground - Interactive CSS Flexbox Learning Tool",
    description:
      "Learn and experiment with CSS Flexbox properties in real-time. Interactive tool for understanding flex container and item properties with live preview.",
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com/flexbox-playground",
    siteName: "Your Website Name",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flexbox Playground - Interactive CSS Flexbox Learning Tool",
    description:
      "Learn and experiment with CSS Flexbox properties in real-time. Interactive tool for understanding flex container and item properties with live preview.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Flexbox Playground",
  description:
    "Interactive tool for learning and experimenting with CSS Flexbox properties",
  applicationCategory: "DevelopmentTool",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Interactive Flex Container Properties",
    "Interactive Flex Item Properties",
    "Live Preview",
    "CSS Code Generation",
    "Dark Mode Support",
  ],
} as const;

export default function FlexboxPlaygroundPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <div className="container mx-auto py-8 px-4">
          <header className="mb-8">
            <h1 className="sr-only">
              Flexbox Playground - Interactive CSS Flexbox Learning Tool
            </h1>
            <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto">
              Experiment with CSS Flexbox properties in real-time. Understand
              how flex container and item properties work together to create
              flexible layouts.
            </p>
          </header>
          <FlexboxPlayground />
          <footer className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              Built with Next.js and Tailwind CSS. Open source and free to use.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
