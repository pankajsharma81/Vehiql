/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false, //defaults to true
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rfbmgdfjozeuhvmzxgtq.supabase.co",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-policy",
            value: "frame-src 'self' https://github.com/pankajsharma81",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
