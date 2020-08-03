import { useAppContext } from '../context';

const useSocialLinks = () => {
  const { socialLinks } = useAppContext();
  if (!socialLinks.edges.length) {
    return undefined;
  }
  return socialLinks.edges.reduce((acc, { node: { code, url, text } }) => {
    acc[code] = { url, text };
    return acc;
  }, {});
};

export default useSocialLinks;
