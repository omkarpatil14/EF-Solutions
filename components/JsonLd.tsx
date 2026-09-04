import { SITE } from "@/lib/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    description: SITE.description,
    sameAs: [SITE.socials.facebook, SITE.socials.twitter, SITE.socials.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
