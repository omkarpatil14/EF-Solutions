"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/site";

const socialLinks = [
  {
    label: "Facebook",
    href: SITE.socials.facebook,
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: SITE.socials.twitter,
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: SITE.socials.instagram,
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome;

  const ease = { duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`transition-[background-color,box-shadow,padding] duration-300 ease-out ${
            solid
              ? "bg-navy py-3 shadow-nav"
              : "bg-transparent py-5"
          }`}
        >
          <div className="container-site flex items-center justify-between gap-4">
            <Link href="/" className="relative z-10 flex items-center gap-2.5" aria-label="MoneyMatters by ET home">
              <Image
                src="/images/logo.png"
                alt="MoneyMatters by ET logo"
                width={48}
                height={48}
                className="h-10 w-10 rounded-full object-cover ring-1 ring-white/25"
                priority
              />
              <span className="hidden leading-tight sm:block">
                <span className="block font-display text-base font-semibold text-cream">
                  money Matters
                </span>
                <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-accent-soft">
                  by ET
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch
                    className={`rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                      active
                        ? "bg-teal text-cream"
                        : "link-underline text-cream/85 hover:text-cream"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-1 md:flex">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="rounded-full p-2 text-cream/70 transition-colors duration-200 hover:bg-white/10 hover:text-accent"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <button
              type="button"
              className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg text-cream md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <div className="flex w-5 flex-col gap-1.5">
                <motion.span
                  animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={ease}
                  className="block h-0.5 w-full origin-center rounded bg-cream"
                />
                <motion.span
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  transition={ease}
                  className="block h-0.5 w-full rounded bg-cream"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={ease}
                  className="block h-0.5 w-full origin-center rounded bg-cream"
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={ease}
              className="fixed inset-0 z-[60] bg-navy-deep/55 md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={reduce ? { x: 0 } : { x: "100%" }}
              animate={{ x: 0 }}
              exit={reduce ? { x: 0, opacity: 0 } : { x: "100%" }}
              transition={ease}
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(100%,20rem)] flex-col bg-navy-deep px-6 pb-8 pt-24 shadow-2xl md:hidden"
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={reduce ? false : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...ease, delay: reduce ? 0 : 0.04 * i }}
                  >
                    <Link
                      href={link.href}
                      prefetch
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-3 py-3 text-lg font-semibold transition-colors duration-200 ${
                        pathname === link.href ? "text-accent" : "text-cream"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto flex gap-3 border-t border-white/10 pt-6">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="rounded-full bg-white/5 p-3 text-cream/80 transition-colors duration-200 hover:bg-teal hover:text-cream"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
