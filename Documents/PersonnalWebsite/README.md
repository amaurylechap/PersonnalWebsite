# Amaury Lechapelain — Personal Website

A production-ready personal website showcasing aerospace engineering projects, experience, and expertise.

## Features

- **Fast & Modern**: Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS
- **SEO Optimized**: Complete metadata, sitemap, robots.txt, and JSON-LD structured data
- **Print-Friendly Resume**: A4-optimized resume page with print styles
- **MDX Content**: Rich project pages with MDX support
- **Analytics**: Plausible Analytics integration (privacy-focused)
- **Accessible**: Semantic HTML, ARIA labels, and keyboard navigation
- **Mobile-First**: Responsive design optimized for all devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Content**: MDX with next-mdx-remote
- **SEO**: next-seo, built-in sitemap & robots
- **Analytics**: Plausible Analytics

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm (or npm/yarn)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Create a `.env.local` file (optional):
```env
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (site)/            # Site routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── resume/            # Resume page
│   ├── projects/          # Projects listing & detail
│   ├── contact/           # Contact page
│   ├── legal/             # Legal & privacy
│   ├── sitemap.ts         # Sitemap generator
│   └── robots.ts          # Robots.txt generator
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   └── ...
├── content/               # MDX content files
│   └── projects/         # Project MDX files
├── lib/                  # Utilities
│   ├── content.ts        # Content loader
│   ├── mdx.ts            # MDX utilities
│   └── utils.ts          # General utilities
└── src/data/             # Data files
    ├── profile.ts        # Profile data
    └── resume.ts         # Resume data
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables if needed
4. Deploy!

The site is optimized for Vercel deployment with automatic builds and deployments.

## Environment Variables

- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` - Plausible Analytics domain (optional)
- `NEXT_PUBLIC_SITE_URL` - Site URL for sitemap/SEO (optional, defaults to placeholder)

## License

Private project — All rights reserved.

