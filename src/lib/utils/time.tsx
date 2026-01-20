export function timeAgo(tsInSeconds: number) {
  const now = Math.floor(Date.now()); // current time in seconds
  const diff = (now - tsInSeconds) / 1000; // difference in seconds

  if (diff < 60) return `${Math.floor(diff)}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}
