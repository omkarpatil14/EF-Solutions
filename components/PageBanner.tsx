import Image from "next/image";
import Link from "next/link";
import WaveDivider from "./WaveDivider";

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
    <section className="relative overflow-hidden bg-navy-deep pb-20 pt-32 md:pb-24 md:pt-40">
      <Image
        src="/images/hero-bg.jpg"
        alt="Dark navy banner background for MoneyMatters by ET"
        fill
        priority
        sizes="100vw"
        className="animate-ken-burns object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="container-site relative z-10 text-center">
        <nav className="mb-4 text-sm text-cream/60" aria-label="Breadcrumb">
          <Link href="/" prefetch className="transition-colors duration-200 hover:text-accent">
            Home
          </Link>
          <span className="mx-2" aria-hidden>
            &gt;
          </span>
          <span className="text-cream/90">
            {breadcrumbHomeLabel ?? breadcrumbLabel}
          </span>
        </nav>
        <h1 className="heading-1 text-cream">{title}</h1>
        {subtitle && (
          <p className="body-copy mx-auto mt-4 max-w-xl !text-cream/70">{subtitle}</p>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <WaveDivider fill="#F4F1EA" />
      </div>
    </section>
  );
}
