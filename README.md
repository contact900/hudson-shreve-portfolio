# Hudson Shreve — Personal Portfolio

Personal portfolio website for Hudson Shreve: sales leader, AI builder, founder.
Built with Next.js 14+, Tailwind CSS v4, TypeScript, and deployed on Vercel.

**Live site:** [hudsonshreve.com](https://hudsonshreve.com)

---

## Tech Stack

- **Framework:** Next.js (App Router, TypeScript)
- **Styles:** Tailwind CSS v4
- **Fonts:** Space Grotesk + JetBrains Mono (via `next/font/google`)
- **Data:** GitHub public API (server-fetched, revalidates every hour)
- **Deploy:** Vercel

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Deploy to Vercel

### Option 1 — Vercel CLI (recommended)

```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Deploy from the project root
vercel

# Follow prompts:
#   - Link to your Vercel account
#   - Set project name (e.g., "hudson-shreve-portfolio")
#   - Framework: Next.js (auto-detected)
#   - No env vars required (GitHub API is public/unauthenticated)

# Deploy to production
vercel --prod
```

### Option 2 — Vercel Dashboard (Git integration)

1. Push this repo to GitHub (or your preferred Git host)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Framework will be auto-detected as **Next.js**
5. No environment variables needed
6. Click **Deploy**

### Custom Domain

After deploying:
1. Go to your project on vercel.com → **Settings → Domains**
2. Add `hudsonshreve.com`
3. Update your DNS:
   - **A record:** `@` → `76.76.21.21`
   - **CNAME:** `www` → `cname.vercel-dns.com`

---

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Assembles all sections
│   └── globals.css       # Tailwind v4 + custom CSS
├── components/
│   ├── Nav.tsx           # Sticky nav with scroll effect
│   ├── Hero.tsx          # Hero with animated particle canvas
│   ├── About.tsx         # Story + highlight cards
│   ├── Experience.tsx    # Timeline of 3 companies
│   ├── Projects.tsx      # Server component — fetches GitHub repos
│   ├── Skills.tsx        # Skill categories
│   ├── Recognition.tsx   # Awards section
│   ├── Contact.tsx       # Contact cards + CTA
│   └── AnimateOnScroll.tsx  # Intersection Observer scroll animations
├── vercel.json           # Vercel config + security headers
└── README.md
```

---

## GitHub API

The Projects section fetches `https://api.github.com/users/contact900/repos` as a **React Server Component** — no client-side fetching, no CORS issues. Data revalidates every 3600 seconds (1 hour) via Next.js ISR.

No GitHub token is required for public repos (60 requests/hour unauthenticated rate limit is more than sufficient for a portfolio site).

---

## Build

```bash
npm run build   # Production build
npm run start   # Start production server locally
```
