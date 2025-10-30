# 🚀 Portfolio Setup & Deployment Guide

## Fresh GitHub Clone Setup

### Prerequisites
- **Node.js**: v20.14.0+ (recommended: use the version in `.nvmrc`)
- **npm**: v10.0.0+
- **Git**: Latest version

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone https://github.com/ashanwithana/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Fix any formatting issues (if cloning fresh)
npm run lint:fix
```

### 2. Environment Setup

Create `.env.local` file in the root directory:

```bash
# Copy the example file
cp .env.local.example .env.local

# Edit the file with your actual values
# NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
# NEXT_PUBLIC_POSTHOG_HOST=your_posthog_host
```

### 3. Development

```bash
# Start development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

**Best for**: Full-featured deployment with i18n, server-side features, and analytics.

1. Connect your GitHub repository to Vercel
2. Use default build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
3. Deploy automatically on push

### Option 2: Cloudflare Pages

**Best for**: Static deployment with fast global CDN.

#### Cloudflare Pages Settings:
- **Framework preset**: `Next.js (Static Exports)`
- **Build command**: `NEXT_CONFIG_FILE=next.config.cloudflare.js npm run build`
- **Build output directory**: `out`
- **Node.js version**: `20.14.0`

#### Limitations with Cloudflare Pages:
- ❌ No internationalization (English only)
- ❌ No server-side redirects
- ❌ No PostHog analytics proxying
- ❌ No custom security headers
- ✅ All static content works
- ✅ SEO optimizations included
- ✅ Fast performance

### Option 3: Other Static Hosts

For GitHub Pages, Netlify, or other static hosts:

```bash
# Build static version
NEXT_CONFIG_FILE=next.config.cloudflare.js npm run build

# The output will be in the `out` directory
```

## 🔧 Build Configurations

### Regular Build (Vercel/Full Features)
```bash
npm run build
```
Uses: `next.config.js` with all features enabled.

### Static Build (Cloudflare Pages/Static Hosts)
```bash
NEXT_CONFIG_FILE=next.config.cloudflare.js npm run build
```
Uses: `next.config.cloudflare.js` optimized for static export.

## 🐛 Common Issues & Solutions

### Issue 1: Build Fails with Linting Errors
```bash
# Fix formatting issues
npm run lint:fix

# Or build without linting
npm run build -- --no-lint
```

### Issue 2: TypeScript Errors
```bash
# Check for type errors
npm run type-check

# Ensure all dependencies are installed
npm install
```

### Issue 3: Cloudflare Pages Build Fails
- Make sure you're using the correct build configuration
- Use `next.config.cloudflare.js` for static export
- Set Node.js version to `20.14.0` in Cloudflare Pages settings

### Issue 4: i18n Issues in Static Export
- Static export doesn't support i18n
- Use the Cloudflare configuration which removes i18n
- For multilingual support, use Vercel deployment

## 📁 Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   ├── data/             # Project data and content
│   ├── pages/            # Next.js pages
│   ├── theme/            # Chakra UI theme
│   └── utils/            # Utility functions
├── next.config.js        # Main Next.js config (Vercel)
├── next.config.cloudflare.js  # Static export config
└── package.json
```

## 🚀 Quick Start Commands

```bash
# Fresh setup
npm install
npm run lint:fix
npm run dev

# Production build (Vercel)
npm run build

# Static build (Cloudflare Pages)
NEXT_CONFIG_FILE=next.config.cloudflare.js npm run build

# Type checking
npm run type-check
```

## 📋 Features Overview

- ✅ **Modern Tech Stack**: Next.js 14, TypeScript, Chakra UI
- ✅ **SEO Optimized**: Structured data, sitemap, meta tags
- ✅ **Professional Icons**: React Icons with proper typing
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Performance**: Optimized builds and lazy loading
- ✅ **Analytics**: PostHog integration (Vercel only)
- ✅ **Type Safety**: Full TypeScript coverage
- ✅ **Accessibility**: ARIA labels and keyboard navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint:fix` 
5. Commit and push
6. Create a pull request

## 📞 Support

If you encounter any issues:
1. Check this guide first
2. Run `npm run lint:fix` to resolve formatting issues
3. Ensure you're using the correct Node.js version
4. Check the build logs for specific error messages