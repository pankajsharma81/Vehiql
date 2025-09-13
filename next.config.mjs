/** @type {import('next').NextConfig} */
const nextConfig = {
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
