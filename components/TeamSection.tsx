"use client";

import Image from "next/image";
import SectionReveal from "./SectionReveal";

const team = [
  {
    name: "Rubina Singla",
    role: "Sales & Marketing",
    bio: "Rubina Singla is an MBA graduate with extensive experience in banking, portfolio management, and entrepreneurship. She has previously worked with an ex-HDFC Bank team and has served as a Mutual Fund Portfolio Manager, managing assets worth INR 1000 million. A successful two-time entrepreneur, Rubina brings a deep understanding of investor communication, customer engagement, and market positioning. At EquiTrust, she leads sales and marketing initiatives with a strong emphasis on trust, clarity, and long-term relationships.",
    image: "/images/team/placeholder-1.jpg",
    alt: "Portrait of Rubina Singla, Sales & Marketing at EquiTrust",
  },
  {
    name: "Shiva Grover",
    role: "Research & Advisory",
    bio: "Shiva Grover is a B.Com graduate with NISM certifications in Derivatives and Research Analysis. He brings over 15 years of experience working with established financial institutions, including Anagram Rathi and Aditya Birla. With an AUM of INR 500 million, Shiva specializes in research-based analysis, market insights, and risk-aware investment frameworks. At EquiTrust, he plays a key role in developing structured research processes and educational insights that promote rational and informed financial decision-making.",
    image: "/images/team/placeholder-2.jpg",
    alt: "Portrait of Shiva Grover, Research & Advisory at EquiTrust",
  },
];

export default function TeamSection() {
  return (
    <section className="relative bg-night py-28 md:py-36">
      <div className="container-site">
        <SectionReveal className="max-w-3xl">
          <p className="eyebrow">Our Team</p>
          <h2 className="display-md mt-4">The People Behind EquiTrust</h2>
          <p className="body-copy mt-6">
            At EquiTrust, our strength lies in the experience, integrity, and
            research-driven mindset of our leadership. Our team combines market
            knowledge, analytical expertise, and a strong focus on transparency
            to support informed financial learning and decision-making.
          </p>
        </SectionReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {team.map((member) => (
            <article key={member.name} className="group flex h-full flex-col">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1624]/85 via-[#0B1624]/20 to-transparent opacity-80 transition duration-500 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition duration-500 group-hover:translate-y-0">
                  <h3 className="font-display text-2xl font-semibold text-white">{member.name}</h3>
                  <p className="mt-1 text-sm text-teal">{member.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-mist">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
