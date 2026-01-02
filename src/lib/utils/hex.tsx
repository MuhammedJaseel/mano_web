export function shortenHash(hash: string) {
  if (!hash) return "";
  return hash.slice(0, 6) + "..." + hash.slice(-4);
}
