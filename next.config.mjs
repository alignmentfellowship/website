/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pure static HTML. The publication should outlive any particular host: this output
  // redeploys to Cloudflare Pages, Netlify, GitHub Pages, S3 or a thumb drive without
  // a code change. Images are already derived to sized WebP by the bundle exporter, so
  // there is nothing left for a server-side optimizer to do.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
}
export default nextConfig
