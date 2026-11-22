// Canonical domain for search. Left on pastelmakeupandstyle.com (which forwards to
// the Wix site) on purpose, so this app doesn't compete with Wix in search yet.
export const siteUrl = "https://pastelmakeupandstyle.com";
// Where this app's files are actually served. Share images must load from here:
// siteUrl forwards to Wix, which doesn't have them.
export const assetBase = "https://pastel-navy.vercel.app";
export const siteName = "Pastel Makeup and Style";
export const defaultOgImage = "/hero-banner.jpg";
export const defaultOgImageSize = { width: 1280, height: 915 };
export const contactEmail = "pastelmakeupandstyle@gmail.com";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function assetUrl(path: string) {
  return new URL(path, assetBase).toString();
}
