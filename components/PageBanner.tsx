import Image from "next/image";
import AppLink from "@/components/AppLink";
import FinancialBackground from "./FinancialBackground";

interface PageBannerProps {
  title: string;
  breadcrumbLabel?: string;
  breadcrumbHomeLabel?: string;
  subtitle?: string;
}

export default function PageBanner({
  title,
  breadcrumbLabel = "About",
  breadcrumbHomeLabel,
  subtitle,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-void pb-20 pt-36 md:pb-28 md:pt-44">
      <FinancialBackground />
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.18]"
      />
      <div className="container-site relative z-10">
        <nav className="mb-6 text-xs uppercase tracking-[0.22em] text-mute" aria-label="Breadcrumb">
          <AppLink href="/" className="hover:text-teal">
            Home
          </AppLink>
          <span className="mx-2">/</span>
          <span className="text-mist">{breadcrumbHomeLabel ?? breadcrumbLabel}</span>
        </nav>
        <h1 className="display">{title}</h1>
        {subtitle && <p className="body-copy mt-6 max-w-xl">{subtitle}</p>}
      </div>
    </section>
  );
}
