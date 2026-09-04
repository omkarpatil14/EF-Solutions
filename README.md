# MoneyMatters / EquiTrust — Financial Education Website

Next.js 14 (App Router) marketing site for financial-education content (podcasts, guides, risk awareness). **Education only — not investment advice.**

## Stack

- Next.js 14 + TypeScript + Tailwind CSS
- Framer Motion (`whileInView` via `SectionReveal`)
- Resend + Zod contact API (`app/api/contact/route.ts`)

## Local development

```bash
npm install
cp .env.example .env.local
# Fill RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_TO_EMAIL` | Inbox for form submissions |
| `CONTACT_FROM_EMAIL` | Verified sender, e.g. `MoneyMatters <contact@yourdomain.com>` |

Never commit `.env.local`. Set the same keys in Hostinger’s Node.js app env settings for production.

## Deploy (Hostinger + GoDaddy)

1. Push to GitHub; connect the repo as a Node.js web app in Hostinger Business/Cloud.
2. Add env vars in Hostinger; deploy.
3. Point the GoDaddy domain at Hostinger (nameserver switch recommended, or A/CNAME records).
4. Verify the sending domain in Resend (SPF/DKIM/DMARC on whichever DNS is authoritative).
5. SSL is issued automatically by Hostinger once DNS resolves.

## Assets to replace

- `/public/images/logo.png` — client logo
- `/public/images/team/placeholder-*.jpg` — team photos (same filenames)
- `/public/images/hero-bg.jpg`, `/public/images/about-teaser.jpg` — photography
- Contact page email/phone/address placeholders

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
