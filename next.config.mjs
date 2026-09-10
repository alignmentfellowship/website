/** @type {import('next').NextConfig} */
const nextConfig = {
  // Rendered per request, not exported.
  //
  // This was `output: 'export'` — pure static HTML that redeployed to any host — and
  // giving that up was the price of reading content from the store: a static export
  // can only read it at build time, which takes on the dependency and gains none of
  // the speed. Now a correction is live in seconds without a deploy.
  //
  // The publication is still meant to outlive any host. What guarantees that is no
  // longer this flag but the bundle itself, which is portable by design, plus a
  // snapshot of the store.
  trailingSlash: true,
}
export default nextConfig
