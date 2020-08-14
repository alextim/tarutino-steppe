import React, { useState } from 'react';
import { Hamburger, DarkModeToggle } from '@ait/common-ui';
import Scrollspy from 'react-scrollspy';

import Logo from '../Logo/Logo';
import { Left, Right } from './styled';
import Menu from './Menu';
import useMainNavItems from '../../hooks/useMainNavtems';

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

  const onMenuItemClick = (e, to) => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    const n = to.indexOf('#');
    if (n === -1) {
      return;
    }
    const id = to.substring(n + 1);
    const el = document.getElementById(id);
    if (!el) {
      console.warn(`Element with id="${id}" not found`);
      return;
    }
    const { top } = el.getBoundingClientRect();
    // eslint-disable-next-line no-console
    window.scrollTo({ top, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Left>
        <Hamburger open={isMenuOpen} onClick={toggleOpen} />
        <Logo onClick={close} />
      </Left>
      <Scrollspy
        items={navItems.map((a) => a.to)}
        componentTag="a"
        currentClassNamem="aactive"
        offset={-100}
      >
        <Menu
          navItems={navItems}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpenWrap}
          onMenuItemClick={onMenuItemClick}
        />
      </Scrollspy>
      <Right>
        <DarkModeToggle />
      </Right>
    </>
  );
};

export default Navbar;
