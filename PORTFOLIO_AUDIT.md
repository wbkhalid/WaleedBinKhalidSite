# Portfolio Audit

Date: 2026-09-30

## Hiring Review

The strongest evidence is the three production government and club-management
applications. Project descriptions explain responsibilities, operational workflows,
and integrations. Employment and project claims were cross-checked against the
existing DOCX resume; no achievements, employers, demo URLs, or GitHub URLs were added.
The existing order puts the most relevant production applications first.

## Findings Addressed

- Corrected the misspelled navigation resume label; added resume access to the mobile menu.
- Added experience, specialization, and the core stack to the concise hero introduction.
- Moved selected projects ahead of skills so production work is easier to discover.
- Removed unfinished preview copy for Asian Wok, retaining its project description and contribution.
- Inspected every project image. Existing device compositions now appear without a second laptop/browser frame; the raw CPD dashboard retains its browser treatment.
- Removed fabricated preview addresses. Screenshot previews open their actual full-size assets.
- Used static image dimensions to preserve each asset's aspect ratio, avoiding letterboxing and hover cropping.
- Generated WebP showcase copies using existing Sharp tooling. Combined image payload is about 0.87 MB instead of 6.00 MB (about 85% less); original uploads are preserved.
- Kept homepage project images lazy-loaded. The portrait remains the homepage priority image.
- Consolidated duplicated project markup into one rendering path.
- Removed repeated featured skill badges and reduced the uncontextualized tools/backend list; emphasized manual QA and deployment without claiming automated testing expertise.
- Made email and phone details actionable and corrected the footer's current-page back-to-top link.
- Added navigation current-page semantics, menu controls, Escape dismissal with focus restoration, and outside-click dismissal.
- Made theme switching resilient to unavailable local storage.
- Added H1 headings to secondary pages, descriptive page metadata, canonical URLs, a sitemap, and robots instructions.
- Improved secondary-text and primary-button contrast using the existing palette.
- Kept content visible in server-rendered markup before animation initializes; reduced-motion users receive no reveal animation or mockup hover transforms.
- Reviewed responsive CSS and corrected tablet heading columns, mobile skill spacing, and wrapping of footer/contact links.

## Verification

- `npm run build`: passed with Next.js 16.3.6, including TypeScript and all static routes.
- `npx tsc --noEmit --incremental false`: passed.
- `node scripts/audit-static-export.mjs`: passed on all four portfolio pages, checking 69 links and 13 rendered images for local target availability, image alt attributes, main landmarks, one H1 per page, unique titles, canonicals, and unfinished preview copy.
- Image dimensions and the original screenshot contents were inspected directly. No screenshots were replaced or redesigned.
- The resume DOCX was read and its local download target was verified.
- No lint script or ESLint configuration exists in the project; no lint pass is claimed.

## Remaining Verification

Browser access was declined earlier in this chat. No browser workaround was used.
Rendered checks at 320, 375, 430, 768, 1024, 1280, 1440, and 1920 pixels, interactive
dark/light theme checks, keyboard testing, and Lighthouse measurements remain
unverified. CSS review and static assertions do not substitute for those checks.
External LinkedIn availability was not tested. No GitHub or project demo URLs exist
in the supplied portfolio data, so none were invented.

Asian Wok has no matching uploaded screenshot. It remains a text project rather than
displaying a misleading image. The supplied resume is DOCX; no PDF version was available.

## Maintenance

After replacing original screenshots, run `node scripts/optimize-project-images.mjs`
to regenerate showcase assets, then build and run the static audit. Include the
new `public/projects` images in version control together with the code.
