# Deployment Guide

## Hosting Platform

- **Platform:** Vercel
- **Team:** Mo's projects (`mos-projects-04ee8a86`)
- **Project:** fraktured-lax-website

## URLs

| Environment | URL |
|-------------|-----|
| Production | https://fraktured-lax-website.vercel.app |
| Custom Domain | https://www.frakturedla.com |
| Vercel Dashboard | https://vercel.com/mos-projects-04ee8a86/fraktured-lax-website |

## GitHub Integration

- **Repository:** https://github.com/motekmoon/fraktured-lax-website
- **Branch:** `main`
- **Auto-deploy:** Yes (pushes to `main` trigger automatic deployments)

## Deployment Methods

### Automatic Deployment (Recommended)

Push to the `main` branch to trigger an automatic deployment:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

### Manual Deployment via CLI

```bash
# Deploy to preview
vercel deploy

# Deploy to production
vercel deploy --prod
```

## Version History

| Version | Date | Description |
|---------|------|-------------|
| v1.0.0 | Dec 23, 2025 | Initial release - Coming soon page |

## Domain Configuration

The custom domain `www.frakturedla.com` is configured via GoDaddy DNS.
See [dns-settings.md](./dns-settings.md) for DNS record details.

## Build Settings

| Setting | Value |
|---------|-------|
| Framework | Next.js |
| Build Command | `next build` |
| Output Directory | `.next` |
| Install Command | `npm install` |
| Node.js Version | 20.x |

## Environment Variables

Currently no environment variables are required for this project.

