"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";

function PortraitVisual() {
  return (
    <motion.div
      className="hero-portrait"
      initial={{ opacity: 0, scale: 0.96, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="portrait-backdrop" aria-hidden="true" />
      <div className="portrait-frame">
        <Image
          src="/profile.jpeg"
          alt={`${profile.name}, ${profile.title}`}
          width={450}
          height={570}
          priority
          sizes="(max-width: 720px) 82vw, (max-width: 980px) 58vw, 40vw"
          className="portrait-image"
        />
      </div>
      <div className="portrait-caption">
        <span>Frontend Developer</span>
        <strong>Lahore, Pakistan</strong>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="hero section-grid">
      <div className="hero-glow" aria-hidden="true" />
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.p className="eyebrow" variants={item}>
          <span />
          Hi, I&apos;m {profile.name}
        </motion.p>
        <motion.h1 variants={item}>
          <span>Frontend</span>
          <span>engineering for</span>
          <em>
            <span>complex</span>
            <span>products.</span>
          </em>
        </motion.h1>
        <motion.p className="hero-intro" variants={item}>
          {profile.hero} I work with React, Next.js, and TypeScript to deliver
          dashboards, workflows, and responsive business applications.
        </motion.p>
        <motion.div className="hero-actions" variants={item}>
          <Link className="button primary" href="/projects">
            View my Work
          </Link>
          <a
            className="button secondary"
            href="/Waleed_Frontend_Developer_Resume.docx"
            download
          >
            Download Resume
          </a>
        </motion.div>
        <motion.div className="social-row" variants={item}>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={`mailto:${profile.email}`}>Email ↗</a>
        </motion.div>
      </motion.div>
      <PortraitVisual />
      {/* <motion.div
        className="metrics"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.08, delayChildren: 0.45 }}
      >
        {profile.metrics.map((metric) => (
          <motion.div key={metric.label} variants={item}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </motion.div>
        ))}
      </motion.div> */}
    </section>
  );
}
