import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCTA() {
  return (
    <section className="contact-section contact-cta">
      <div className="contact-orbit" aria-hidden="true" />
      <Reveal className="section-shell contact-inner">
        <p className="eyebrow"><span />Contact</p>
        <h2>Let&apos;s build something useful.</h2>
        <p>I&apos;m open to frontend opportunities and product work involving dashboards, workflows, and high-quality responsive interfaces.</p>
        <div className="contact-actions">
          <Link className="button primary" href="/contact">Get in touch <span>↗</span></Link>
        </div>
      </Reveal>
    </section>
  );
}
