/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["d2u3dcdbebyaiu.cloudfront.net", "teamblindstatics.s3.ap-northeast-1.amazonaws.com"],
  },
  experimental: {
    esmExternals: true,
  },
};

module.exports = nextConfig;
