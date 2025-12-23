# FRAKTURED LAX Website Documentation

## Project Overview

A single-page "Coming Soon" website for FRAKTURED LAX built with Next.js 16 and Tailwind CSS v4.

## Tech Stack

| Technology | Version |
|------------|---------|
| Next.js | 16.1.1 |
| React | 19.2.3 |
| React DOM | 19.2.3 |
| Tailwind CSS | 4.x |
| TypeScript | 5.x |

## Project Structure

```
fraktured-lax-website/
├── app/
│   ├── components/
│   │   ├── Header.tsx       # Sticky header component
│   │   └── HeroImage.tsx    # Hero image with mobile/desktop interactions
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── public/
│   ├── hero-image.png       # Main hero image (color)
│   └── hero-image-bw.png    # Black & white version (unused)
├── Documentation/
│   └── README.md            # This file
└── package.json
```

## Features

1. **Sticky Header** - Fixed navigation bar with "FRAKTURED LAX" branding
2. **Hero Image** - Full-width image with interactive color reveal
3. **Coming Soon Text** - "New Website Coming Soon..." message
4. **Dark Mode Support** - Automatic dark mode based on system preferences

## Hero Image Behavior

The hero image displays in grayscale by default and reveals color through user interaction:

| Device | Interaction | Behavior |
|--------|-------------|----------|
| Desktop | Hover | Reveals color while hovering |
| Mobile | Tap/Click | Toggles between grayscale and color |

### Implementation Details

- Uses `HeroImage.tsx` client component for interactivity
- Mobile detection via `matchMedia` and touch event support
- Smooth 500ms CSS transition between states
- Accessible: supports keyboard navigation (Enter/Space)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

This project is deployed on Vercel with automatic deployments on push to `main`.

## Version History

| Version | Date | Description |
|---------|------|-------------|
| v1.0.0 | Dec 23, 2025 | Initial release - Coming soon page |
| v1.1.0 | Dec 23, 2025 | Added mobile tap-to-reveal for hero image |

## Local Configuration Files

The following configuration files are gitignored and must be created locally:

| File | Purpose |
|------|---------|
| `Documentation/deployment.md` | Vercel project details, URLs, dashboard links |
| `Documentation/dns-settings.md` | DNS records and domain configuration |

Contact the project maintainer for access to sensitive configuration details.

