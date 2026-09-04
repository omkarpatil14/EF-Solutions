"use client";

import Image from "next/image";
import { StaggerContainer, StaggerItem } from "./SectionReveal";
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
    <section className="bg-section-soft py-24 md:py-32">
      <div className="container-site">
        <SectionReveal className="mx-auto mb-16 max-w-3xl text-center">
          <p className="section-label">Our Team</p>
          <h2 className="heading-2 uppercase tracking-wide">
            The People Behind EquiTrust
          </h2>
          <p className="body-copy mt-5">
            At EquiTrust, our strength lies in the experience, integrity, and
            research-driven mindset of our leadership. Our team combines market
            knowledge, analytical expertise, and a strong focus on transparency
            to support informed financial learning and decision-making.
          </p>
        </SectionReveal>

        <StaggerContainer className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <article className="card-surface group h-full p-8 text-center">
                <div className="relative mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full ring-[6px] ring-teal-muted">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="160px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <h3 className="heading-3 text-2xl">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-teal">{member.role}</p>
                <p className="mt-4 text-left text-[0.95rem] leading-relaxed text-ink-muted">
                  {member.bio}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
