import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/newtakeongrundforloebcase' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/newtakeongrundforloebcase/' : '',
}

export default nextConfig;
