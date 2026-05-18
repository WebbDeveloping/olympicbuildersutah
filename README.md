# Olympic Builders — Company Website

Single-page marketing site for **Olympic Builders**, a general contractor serving Park City and Salt Lake City, Utah. Built with Next.js, MUI, and deployed on Vercel.

## Features

- Single scrolling homepage with anchor navigation
- Contact form powered by [Resend](https://resend.com)
- Mobile sticky call-to-action bar
- SEO metadata and LocalBusiness JSON-LD
- Centralized content in `src/content/site.ts`

## Getting Started

### Prerequisites

- Node.js 18+
- A [Resend](https://resend.com) account and API key

### Setup

```bash
npm install
cp .env.example .env.local
```

Edit `.env.local` and set:

- `RESEND_API_KEY` — from Resend dashboard
- `CONTACT_TO_EMAIL` — defaults to `olympicbuildersutah@gmail.com`
- `CONTACT_FROM_EMAIL` — use `onboarding@resend.dev` for testing; switch to a verified domain sender for production
- `NEXT_PUBLIC_SITE_URL` — your production URL

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Updating Content

Edit [`src/content/site.ts`](src/content/site.ts) for copy, phone, email, services, and navigation.

### Replacing Images

1. Add photos to `public/images/`
2. Update paths in `site.ts` under `images` and `projects`
3. Replace `public/logo.svg` with the client logo (`logo.png` or `logo.svg`)

Placeholder project photos are marked with a "Sample" chip in the gallery.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables from `.env.example`
4. Deploy
5. Connect your custom domain
6. Verify your domain in Resend and update `CONTACT_FROM_EMAIL`

## Project Structure

```
src/
  app/              # Next.js App Router pages and API
  components/       # UI components and page sections
  content/site.ts   # Editable site copy and image paths
  theme/            # MUI theme and provider
  lib/seo.ts        # Metadata configuration
public/
  images/           # Hero and project photos
  logo.svg          # Logo (replace with client asset)
```
