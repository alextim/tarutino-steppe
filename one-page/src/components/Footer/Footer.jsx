/** @jsx jsx */
import { jsx } from 'theme-ui';

import { Container, LegalInfo, FooterNavigation } from '@ait/common-ui';

import useFooterNavItems from '../../hooks/useFooterNavItems';

const styleColophonTop = {
  variant: 'layout.footer.colophon.top',
};
const styleColophonBottom = {
  variant: 'layout.footer.colophon.bottom',
};

const Footer = () => {
  const legalName = 'legal name';
  const navItems = useFooterNavItems();

  return (
    <footer sx={{ variant: 'layout.footer' }}>
      <div sx={styleColophonTop}>
        <Container>
          <FooterNavigation items={navItems} />
        </Container>
      </div>
      <div sx={styleColophonBottom}>
        <Container>
          <LegalInfo legalName={legalName} text="all_rights_reserved" />
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
