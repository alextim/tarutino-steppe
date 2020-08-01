/** @jsx jsx */
import { jsx } from 'theme-ui';

import { Container, FooterWidget, LegalInfo, FooterNavigation } from '@ait/common-ui';

import { useTranslation } from '../../i18n';
import useLocaleData from '../../hooks/useLocaleData';
import useOrganization from '../../hooks/useOrganization';
import useFooterNavItems from '../../hooks/useFooterNavItems';
import useSocialLinks from '../../hooks/useSocialLinks';

import SocialLinks from './SocialLinks';

import OrganizationPostalAddress from '../organization/OrganizationPostalAddress';
import OrganizationEmail from '../organization/OrganizationEmail';
// import OrganizationSite from '../organization/OrganizationSite';
import OrganizationPhones from '../organization/OrganizationPhones';
// import OrganizationCloudPhones from '../organization/OrganizationCloudPhones';

const styleWidgetArea = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-around',
  py: [4, 4, 6],
  a: {
    ':hover': {
      color: 'footer.highlight',
    },
  },
};

const WidgetWrapper = ({ extraStyle, children }) => (
  <div
    sx={{
      ...extraStyle,
      mb: ['1rem', '1.5rem', '1rem', 0],
      lineHeight: 1.75,
    }}
  >
    {children}
  </div>
);

const styleWidgetGreeting = {
  width: ['100%', '100%', '100%', '50%'],
  pr: [0, 0, 0, 6],
};
const styleGreetingImg = { float: 'left', mt: 3 };
const styleGreetingText = { textAlign: 'justify' };

const styleWidgetAddr1 = {
  width: ['100%', 'auto', 'auto', 'auto'],
};
const styleWidgetAddr2 = {
  width: ['100%', 'auto', 'auto', 'auto'],
};

const styleColophonTop = {
  variant: 'layout.footer.colophon.top',
};
const styleColophonBottom = {
  variant: 'layout.footer.colophon.bottom',
};

const Footer = () => {
  const { t } = useTranslation();
  const { email, phone } = useOrganization();
  const { legalName } = useLocaleData();
  const navItems = useFooterNavItems();
  const socialLinks = useSocialLinks();

  return (
    <footer sx={{ variant: 'layout.footer' }}>
      <Container sx={styleWidgetArea}>
        <WidgetWrapper extraStyle={styleWidgetGreeting}>
          <h3>{t('footer.greeting.title')}</h3>
          <img
            sx={styleGreetingImg}
            src="/assets/logo-danube-delta.svg"
            alt="Danube Delta Rewilding Europe Logo"
            height="121"
            width="100"
          />
          <div sx={styleGreetingText}>{t('footer.greeting.text')}</div>
        </WidgetWrapper>

        <WidgetWrapper extraStyle={styleWidgetAddr1}>
          <FooterWidget title={t('footer.our_address')}>
            <OrganizationPostalAddress />
          </FooterWidget>
        </WidgetWrapper>

        <WidgetWrapper extraStyle={styleWidgetAddr2}>
          <FooterWidget title={t('footer.call_us')}>
            <OrganizationPhones phones={phone} />
            <OrganizationEmail email={email} />
            {/*
            <OrganizationSite />
            <OrganizationCloudPhones voice={voice} />
            */}
          </FooterWidget>
        </WidgetWrapper>
      </Container>

      <div sx={styleColophonTop}>
        <Container>
          {socialLinks && <SocialLinks items={socialLinks} />}
          <FooterNavigation items={navItems} />
        </Container>
      </div>
      <div sx={styleColophonBottom}>
        <Container>
          <LegalInfo legalName={legalName} text={t('all_rights_reserved')} />
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
