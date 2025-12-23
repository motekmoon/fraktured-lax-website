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
│   │   └── Header.tsx       # Sticky header component
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── public/
│   ├── hero-image.png       # Main hero image
│   └── hero-image-bw.png    # Black & white version (unused)
├── Documentation/
│   ├── README.md            # This file
│   ├── deployment.md        # Deployment instructions
│   └── dns-settings.md      # DNS configuration (gitignored)
└── package.json
```

## Features

1. **Sticky Header** - Fixed navigation bar with "FRAKTURED LAX" branding
2. **Hero Image** - Full-width image with grayscale-to-color hover effect
3. **Coming Soon Text** - "New Website Coming Soon..." message
4. **Dark Mode Support** - Automatic dark mode based on system preferences

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

See [deployment.md](./deployment.md) for deployment instructions.

## DNS Configuration

See [dns-settings.md](./dns-settings.md) for DNS configuration details.
**Note:** This file is gitignored for security.

