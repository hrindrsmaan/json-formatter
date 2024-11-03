// app/json-formatter/page.tsx
import { Metadata } from "next";
import JsonFormatter from "./jsonFormatter";

export const metadata: Metadata = {
  title: "JSON Formatter & Validator | Format, Validate & Beautify JSON Online",
  description:
    "Free online JSON formatter and validator with syntax highlighting. Format, beautify, and validate JSON with our easy-to-use tool. Supports dark mode and copy functionality.",
  keywords:
    "JSON formatter, JSON validator, JSON beautifier, JSON parser, JSON editor, online JSON tool, format JSON, validate JSON, beautify JSON",
  openGraph: {
    title:
      "JSON Formatter & Validator | Format, Validate & Beautify JSON Online",
    description:
      "Free online JSON formatter and validator with syntax highlighting. Format, beautify, and validate JSON with our easy-to-use tool.",
    type: "website",
    siteName: "JSON Formatter",
    locale: "en_US",
    url: "https://yourdomain.com/json-formatter",
  },

  alternates: {
    canonical: "https://yourdomain.com/json-formatter",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  authors: [{ name: "Your Name" }],
  generator: "Next.js",
  applicationName: "JSON Formatter",
  referrer: "origin-when-cross-origin",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function JsonFormatterPage() {
  return (
    <div>
      {/* This section helps with SEO by providing static, indexable content */}
      <section className="hidden">
        <h1>JSON Formatter and Validator - Format and Validate JSON Online</h1>
        <p>
          Welcome to our free online JSON formatter and validator tool. This
          tool helps developers format, validate, and beautify JSON data with
          features like syntax highlighting, dark mode, and copy functionality.
        </p>
        <h2>Key Features:</h2>
        <ul>
          <li>Format and beautify JSON with automatic indentation</li>
          <li>Validate JSON syntax and display meaningful error messages</li>
          <li>Dark mode support for comfortable viewing</li>
          <li>Copy formatted JSON to clipboard with one click</li>
          <li>Expandable/collapsible view for nested objects and arrays</li>
          <li>Syntax highlighting for better readability</li>
        </ul>
      </section>

      {/* The actual JSON Formatter component */}
      <JsonFormatter />
    </div>
  );
}
