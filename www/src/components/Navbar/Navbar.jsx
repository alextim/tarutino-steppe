import React, { useState } from 'react';
import { Hamburger, DarkModeToggle } from '@ait/common-ui';

import useMainNavItems from '../../hooks/useMainNavtems';

import Logo from '../Logo/Logo';
import LanguageSwitch from '../LanguageSwitch';
import { Left, Right } from './styled';
import Menu from './Menu';

import colors from '../../gatsby-plugin-theme-ui/colors';
import mq from '../../gatsby-plugin-theme-ui/media-queries';

import BODY_PREVENT_SCROLLING from '../../constants/body-prevent-scrolling';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = useMainNavItems();

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
  const close = () => setIsMenuOpenWrap(false);

  //    <Menu menuData={menuData} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpenWrap} />
  return (
    <>
      <Left>
        <Hamburger open={isMenuOpen} bp={mq.lg} onClick={toggleOpen} />
        <Logo onClick={close} />
      </Left>
      <Menu navItems={navItems} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpenWrap} />
      <Right>
        <LanguageSwitch closeMenu={close} />
        <DarkModeToggle color={colors.header.nav.socialLink} bg={colors.white} bp={mq.md} />
      </Right>
    </>
  );
};

export default Navbar;
