/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/:slug",
                destination: "/blog/:slug",
            },
        ];
    },
};

module.exports = nextConfig;
