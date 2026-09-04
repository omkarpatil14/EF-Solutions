export const SITE = {
  name: "MoneyMatters by ET",
  shortName: "money Matters by ET",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.moneymattersbyet.com",
  description:
    "MoneyMatters by ET is an education-focused platform helping people understand financial investments, risks, and smart money decisions through podcasts, guides, and practical insights.",
  socials: {
    facebook: "https://www.facebook.com/moneymattersbyet",
    twitter: "https://x.com/moneymatterset",
    instagram: "https://www.instagram.com/moneymatterswithet",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
