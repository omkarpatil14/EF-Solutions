import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-surface px-6 pt-32 text-center">
      <p className="section-label">404</p>
      <h1 className="heading-2">This page does not exist</h1>
      <p className="body-copy mt-4 max-w-md">
        The page you are looking for may have moved. Return home or visit About
        or Contact.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Home
        </Link>
        <Link href="/about" className="btn-secondary">
          About
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact
        </Link>
      </div>
    </section>
  );
}
