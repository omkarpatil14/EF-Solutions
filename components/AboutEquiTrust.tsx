import AppLink from "@/components/AppLink";
import ClarityPanel from "./ClarityPanel";
import SectionReveal from "./SectionReveal";
import TextReveal from "./TextReveal";

export default function AboutEquiTrust() {
  return (
    <section className="relative overflow-hidden bg-void py-20 md:py-36">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <p className="eyebrow">Who We Are</p>
          <TextReveal as="h2" className="display-md mt-4" lines={["ABOUT", "EQUITRUST"]} />
          <SectionReveal className="mt-8 space-y-4 text-mist">
            <p>
              EquiTrust is a financial education and research-driven platform
              focused on building trust, transparency, and informed
              decision-making in the investment ecosystem.
            </p>
            <p>
              We believe that strong financial outcomes begin with clear
              understanding, rational thinking, and disciplined processes. Our
              approach is designed to help individuals understand investments,
              risk dynamics, and decision frameworks before committing capital.
            </p>
          </SectionReveal>
          <AppLink href="/about" className="group btn-primary mt-10">
            About Us
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </AppLink>
        </div>
        <div className="mx-auto w-full max-w-xl lg:max-w-none">
          <ClarityPanel />
        </div>
      </div>
    </section>
  );
}
