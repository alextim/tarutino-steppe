import { useAppContext } from '../context';

const useMainNavtems = () => {
  const { mainNav } = useAppContext();
  return mainNav.edges.map(({ node: { title, to } }) => ({ title, to }));
};

export default useMainNavtems;
