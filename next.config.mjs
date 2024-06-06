/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '1338',
                pathname: '/uploads/**',
            },
        ],
    },
};

export default nextConfig;
