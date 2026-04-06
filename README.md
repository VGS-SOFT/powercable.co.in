# powercable.co.in

Next.js website for **Power Cable** — Premium Copper Products dealer based in Palghar, Maharashtra, India.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Fonts**: Inter + Playfair Display (via `next/font`)
- **Images**: Unsplash (via `next/image`)
- **Forms**: React Server Actions (`useActionState`)
- **SEO**: Metadata API + JSON-LD structured data + sitemap + robots

## Getting Started

```bash
git clone https://github.com/VGS-SOFT/powercable.co.in.git
cd powercable.co.in
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/products` | Products Index |
| `/products/copper-ingots` | Copper Ingots |
| `/products/copper-strips` | Copper Strips |
| `/products/copper-wire` | Copper Wire |
| `/products/copper-rod` | Copper Rod |
| `/raw-materials` | Raw Materials Index |
| `/raw-materials/copper-druid` | Copper Druid |
| `/raw-materials/copper-scrap-birch` | Copper Scrap Birch |
| `/raw-materials/all-copper-scrap` | All Copper Scrap |
| `/about` | About Us |
| `/contact` | Contact Us |

## SEO

- Full `Metadata` API on every page (title, description, OG, Twitter, canonical)
- `Organization` JSON-LD on all pages (via root layout)
- `Product` JSON-LD on product pages
- `BreadcrumbList` JSON-LD on inner pages
- `/sitemap.xml` auto-generated via `src/app/sitemap.ts`
- `/robots.txt` auto-generated via `src/app/robots.ts`

## Contact Form

The contact form uses React Server Actions. To integrate email delivery:

1. Install Resend: `npm install resend`
2. Add your API key in `.env.local`: `RESEND_API_KEY=your_key`
3. Update `src/app/contact/actions.ts` with the Resend send call

## Environment Variables

Create a `.env.local` file:

```env
# Email service (optional — for contact form delivery)
RESEND_API_KEY=your_resend_api_key

# Google Search Console verification
NEXT_PUBLIC_GSC_TOKEN=your_token
```

## Build & Deploy

```bash
npm run build
npm run start
```

Deploy on **Vercel** for best Next.js performance.

---

All Copyright Reserved | 2024 Power Cable
