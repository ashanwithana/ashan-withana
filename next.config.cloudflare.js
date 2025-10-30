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
}

module.exports = nextConfig