import type { NextConfig } from 'next'
 
// Next.js 16 - turbopack at the top level of nextConfig
const nextConfig: NextConfig = {
  cacheComponents: true,
  turbopack: {
    // options
  },
}
 
export default nextConfig