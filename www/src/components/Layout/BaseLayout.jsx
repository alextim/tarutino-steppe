/** @jsx jsx */
import { jsx } from 'theme-ui';

import useBanner from '../../hooks/useBanner';
import AppContextProvider from '../../context';
import GlobalStyle from '../GlobalStyle';
import Header from '../Header/Header';
import Footer from '../Footer';
import Hero from '../Hero';

const rootStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  variant: 'layout.root',
};

const mainStyle = {
  width: '100%',
  flex: '1 1 auto',
  variant: 'layout.main',
};

const DefaultHero = ({ title, subtitle, cover }) => {
  const { img, alt, imgTitle } = useBanner(cover);
  return <Hero title={title} subtitle={subtitle} img={img} alt={alt} imgTitle={imgTitle} />;
};

const BaseLayout = ({ title, subtitle, cover, hero, context, children }) => (
  <AppContextProvider value={context}>
    <GlobalStyle />
    <div sx={rootStyle}>
      <Header />
      <main sx={mainStyle}>
        {hero || <DefaultHero title={title} subtitle={subtitle} cover={cover} />}
        {children}
      </main>
      <Footer />
    </div>
  </AppContextProvider>
);

export default BaseLayout;
