# MR.Engineers — Corporate Website

> **Learn • Build • Repeat.**

Premium corporate website for MR.Engineers — an engineering and technology solutions company specializing in Industrial Automation, IoT, Embedded Systems, Electronics, and Software Development.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9 or later

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Home page
│   ├── about/              # About Us page
│   ├── services/           # Services page
│   ├── projects/           # Projects portfolio
│   ├── careers/            # Careers & internships
│   ├── contact/            # Contact page
│   └── sitemap.ts          # Dynamic sitemap
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navigation
│   │   └── Footer.tsx      # Site footer
│   └── ui/
│       └── index.tsx       # Reusable UI components
├── lib/
│   ├── constants.ts        # Brand config, services, projects data
│   ├── animations.tsx      # Framer Motion utilities
│   └── seo.ts              # SEO metadata generator
└── globals.css             # Global styles & design tokens
```

## Environment Variables

Create a `.env.local` file (see `.env.example`):

```env
NEXT_PUBLIC_BASE_URL=https://mrengineers.in
```

## Configuration

### Brand Configuration

All brand data (company info, services, projects, etc.) is centralized in `src/lib/constants.ts`. Update this file to modify:

- Company details
- Service listings
- Project portfolio
- Social links
- Navigation

### Contact & Career Forms

Forms are currently client-side only. To connect them to a backend:

1. Create API routes in `src/app/api/`
2. Or integrate with a form service (Formspree, EmailJS, etc.)
3. Update the form submission handlers in the respective page components

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Set environment variables if needed
5. Deploy

The project is pre-configured for Vercel deployment with no additional setup required.

### Manual Build

```bash
npm run build
npm start
```

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#080B10` | Page background |
| Secondary BG | `#10151D` | Cards, sections |
| Primary Text | `#F5F7FA` | Headings, body |
| Secondary Text | `#929BA8` | Descriptions |
| Accent | `#00D4FF` | CTAs, highlights |
| Secondary Accent | `#7C5CFC` | Gradients, accents |

## License

All rights reserved. © MR.Engineers
