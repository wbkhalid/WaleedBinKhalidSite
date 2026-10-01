import { Reveal } from "@/components/ui/Reveal";
import { profile, whatsappUrl } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-orbit" aria-hidden="true" />
      <Reveal className="section-shell contact-inner">
        <p className="eyebrow">
          <span />
          Contact
        </p>
        <h1>Let&apos;s build something useful.</h1>
        <p>
          I&apos;m open to frontend opportunities and product work involving
          complex workflows, dashboards, and high-quality responsive interfaces.
        </p>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${profile.email}`}>
            Send an email <span>↗</span>
          </a>
          <a
            className="button secondary"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn <span>↗</span>
          </a>
        </div>
        <div className="contact-details">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={`Chat on WhatsApp: ${profile.phone}`}>{profile.phone}</a>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span>{profile.location}</span>
        </div>
      </Reveal>
    </section>
  );
}
