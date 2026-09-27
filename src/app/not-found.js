import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Luxury Russian Spa",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#fffaf5] px-6 text-center text-[#1f1a17]">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">404</p>
      <h1 className="mt-3 text-3xl font-bold text-[#1f1a17] md:text-4xl">This page couldn't be found</h1>
      <p className="mt-4 max-w-md text-gray-600">
        The page you're looking for doesn't exist or may have moved. Try one of these instead:
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-700">
          Back to Home
        </Link>
        <Link href="/massage-service-in-delhi" className="rounded-full border border-amber-300 bg-white px-6 py-3 font-semibold text-amber-700 shadow-sm transition hover:bg-amber-50">
          All Services
        </Link>
        <Link href="/outlets" className="rounded-full border border-amber-300 bg-white px-6 py-3 font-semibold text-amber-700 shadow-sm transition hover:bg-amber-50">
          Our Outlets
        </Link>
      </div>
    </main>
  );
}
