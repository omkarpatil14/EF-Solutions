import type { Metadata } from "next";
import AppLink from "@/components/AppLink";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center bg-void px-6 pt-32">
      <div className="container-site">
        <p className="eyebrow">404</p>
        <h1 className="display-md mt-4">This page does not exist</h1>
        <p className="body-copy mt-6 max-w-md">
          The page you are looking for may have moved. Return home or visit About
          or Contact.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <AppLink href="/" className="btn-primary">
            Home →
          </AppLink>
          <AppLink href="/about" className="btn-secondary">
            About
          </AppLink>
          <AppLink href="/contact" className="btn-secondary">
            Contact
          </AppLink>
        </div>
      </div>
    </section>
  );
}
