/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    images: {
        unoptimized: true,
    },
    // Remove i18n for static export compatibility
    // Remove server-side features for static export
    webpack: (config) => {
        config.resolve.fallback = {
            fs: false,
            path: false,
        }
        return config
    },
}

module.exports = nextConfig