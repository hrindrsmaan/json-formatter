import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>
      <Link href="/json-formatter" className="text-blue-500 underline">
        Go to JSON Formatter
      </Link>
      <Link href="/flexbox-playground" className="text-blue-500 underline">
        Flexbox playground
      </Link>
    </main>
  );
}
