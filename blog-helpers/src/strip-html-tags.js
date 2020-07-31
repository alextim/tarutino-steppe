export default function stripHtmlTags(s) {
  return s.replace(/(<([^>]+)>)/gi, '');
}
