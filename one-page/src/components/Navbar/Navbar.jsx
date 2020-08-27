import React, { useState } from 'react';
import { Hamburger, DarkModeToggle } from '@ait/common-ui';

import useWindowOnScroll from '../../hooks/useWindowOnScroll';
import useSmoothScrollTo from '../../hooks/useSmoothScrollTo';

import Logo from '../Logo/Logo';
import { Left, Right } from './styled';
import Menu from './Menu';
import useMainNavItems from '../../hooks/useMainNavtems';

import colors from '../../gatsby-plugin-theme-ui/colors';
import mq from '../../gatsby-plugin-theme-ui/media-queries';

import BODY_PREVENT_SCROLLING from '../../constants/body-prevent-scrolling';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = useMainNavItems();

  const handleScrollToTop = useSmoothScrollTo(0);

  const [shrink, setShrink] = useState(false);
  const handleWindowScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShrink(scrollTop > 100);
  }, []);
  useWindowOnScroll(handleWindowScroll);

  const setIsMenuOpenWrap = (value) => {
    const list = document.body.classList;
    const hasClass = list.contains(BODY_PREVENT_SCROLLING);
    if (value) {
      if (!hasClass) {
        list.add(BODY_PREVENT_SCROLLING);
      }
    } else if (hasClass) {
      list.remove(BODY_PREVENT_SCROLLING);
    }
    setIsMenuOpen(value);
  };

  const toggleOpen = () => setIsMenuOpenWrap(!isMenuOpen);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setIsMenuOpenWrap(false);
    handleScrollToTop();
  };

  const onMenuItemClick = () => {
    if (isMenuOpen) {
      setIsMenuOpenWrap(false);
    }
  };

  return (
    <>
      <Left>
        <Hamburger open={isMenuOpen} bp={mq.lg} onClick={toggleOpen} />
        <Logo onClick={handleLogoClick} />
      </Left>
      <Menu
        navItems={navItems}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpenWrap}
        onMenuItemClick={onMenuItemClick}
      />
      <Right>
        <DarkModeToggle color={colors.header.nav.socialLink} bg={colors.white} bp={mq.md} />
      </Right>
    </>
  );
};

export default Navbar;
