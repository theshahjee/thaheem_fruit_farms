/**
 * Prefix a local public asset path with the configured basePath.
 *
 * Required because Next.js' static export does not reliably prefix
 * <Image src> values with basePath when `unoptimized: true`, which breaks
 * images on GitHub Pages where the site is served from
 * `https://<user>.github.io/<repo>/`.
 */
export function imgPath(src: string): string {
  if (!src) return src;
  if (/^(https?:|data:|blob:|mailto:|tel:)/i.test(src)) return src;
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalised = src.startsWith("/") ? src : `/${src}`;
  return `${prefix}${normalised}`;
}
