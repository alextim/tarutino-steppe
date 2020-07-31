export default function getExcerpt(s, length = 160, useWordBoundary = true) {
  if (!s) {
    return '';
  }
  if (s.length < length) {
    return s;
  }
  const truncated = s.substr(0, length - 1);
  if (!useWordBoundary) {
    return truncated;
  }
  return truncated.substr(0, truncated.lastIndexOf(' '));
}
