"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AppLink, { pathMatches } from "@/components/AppLink";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { NAV_LINKS } from "@/lib/site";
import { easePremium } from "@/lib/motion";

export default function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
  const solid = scrolled || !isHome || open;
  const t = { duration: reduce ? 0 : 0.45, ease: easePremium };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
            solid
              ? "border-teal/20 bg-panel/95 shadow-[0_10px_32px_rgba(6,122,114,0.12)] backdrop-blur-[20px]"
              : "border-transparent bg-void/70 backdrop-blur-[8px]"
          }`}
        >
          <div className="container-site grid grid-cols-[1fr_auto] items-center py-4 md:grid-cols-[1fr_auto_1fr]">
            <AppLink href="/" className="flex items-center gap-3" aria-label="MoneyMatters by ET home">
              <Image
                src="/images/logo.png"
                alt="MoneyMatters by ET logo"
                width={40}
                height={40}
                className="h-9 w-9 rounded-full object-cover"
                priority
              />
              <span className="hidden text-sm font-semibold tracking-wide text-snow sm:block">
                MoneyMatters <span className="text-mist">by ET</span>
              </span>
            </AppLink>

            <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
              {NAV_LINKS.map((link) => {
                const active = pathMatches(pathname, link.href);
                return (
                  <AppLink
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                      active ? "text-snow" : "text-mist hover:text-snow"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-teal"
                      />
                    )}
                  </AppLink>
                );
              })}
            </nav>

            <div className="hidden justify-end md:flex">
              <AppLink href="/contact" className="group btn-primary text-xs">
                Get Started
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </AppLink>
            </div>

            <button
              type="button"
              className="justify-self-end text-snow md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <div className="flex w-6 flex-col gap-1.5">
                <motion.span animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} transition={t} className="block h-px w-full bg-snow" />
                <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} transition={t} className="block h-px w-full bg-snow" />
                <motion.span animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} transition={t} className="block h-px w-full bg-snow" />
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={t}
            className="fixed inset-0 z-[70] flex flex-col bg-void px-8 pt-28 md:hidden"
          >
            <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Mobile">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reduce ? false : { y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ...t, delay: 0.08 * i }}
                >
                  <AppLink
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block font-display text-5xl font-bold tracking-tighter2 ${
                      pathMatches(pathname, link.href) ? "text-teal" : "text-snow"
                    }`}
                  >
                    {link.label}
                  </AppLink>
                </motion.div>
              ))}
            </nav>
            <AppLink href="/contact" onClick={() => setOpen(false)} className="btn-primary mb-10 w-full justify-center">
              Get Started →
            </AppLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
