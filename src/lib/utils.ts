export function removeHtmlTags(str: string) {
  const regex = /<[^>]*>/g;
  return str.replace(regex, '');
}