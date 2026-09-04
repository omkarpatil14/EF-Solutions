"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

type AppLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: "/" | "/about" | "/contact" | string;
};

export default function AppLink({ href, prefetch = true, scroll = true, ...props }: AppLinkProps) {
  return <Link href={href} prefetch={prefetch} scroll={scroll} {...props} />;
}

export function pathMatches(pathname: string, href: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const target = href.replace(/\/+$/, "") || "/";
  return path === target;
}
