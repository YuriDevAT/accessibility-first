/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin') 

const nextConfig = nextTranslate({
  images: {
    unoptimized: true,
  },
});

module.exports = nextConfig;