export const siteUrl = "https://pastelmakeupandstyle.com";
export const siteName = "Pastel Makeup and Style";
export const defaultOgImage = "/hero-banner.jpg";
export const contactEmail = "pastelmakeupandstyle@gmail.com";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
