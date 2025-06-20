import type { NextConfig } from "next";
const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/collation',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
