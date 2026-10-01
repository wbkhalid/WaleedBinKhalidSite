import { profile, whatsappUrl } from "@/data/profile";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div>
          <strong>{profile.name}</strong>
          <span>Frontend Developer</span>
        </div>
        <p>
          Designed &amp; built by {profile.name} · {new Date().getFullYear()}
        </p>
        <div className="footer-links">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={`Chat on WhatsApp: ${profile.phone}`}>{profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <Link href="#main">Back to top</Link>
        </div>
      </div>
    </footer>
  );
}
