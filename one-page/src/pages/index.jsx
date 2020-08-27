/** @jsx jsx */
import { jsx } from 'theme-ui';
import ScrollAnimation from 'react-animate-on-scroll';
import { Section } from '@ait/common-ui';

import { BaseLayout as Layout } from '../components/Layout';
import '../styles/animate.css';

const HomePage = () => {
  const title = 'title';
  const description = 'description';
  const cover = null;

  return (
    <Layout title={title} subtitle={description} cover={cover}>
      <Section id="about" title="About">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nunc sit amet turpis
        facilisis ultrices nec vel diam. Nam sed lacinia nisi. Mauris dapibus elit at risus
        efficitur, in gravida nisi consequat. Suspendisse varius congue dignissim. Curabitur ac
        libero commodo, tristique nisl ac, posuere turpis. Phasellus mattis dignissim eros sit amet
        elementum. In non leo in nisi convallis finibus nec vel dolor. Donec tempus justo vel libero
        mollis tincidunt. In mattis neque eget erat vulputate tempus quis at nibh. In ultrices dui
        in nulla bibendum, vel tincidunt justo accumsan. Pellentesque pellentesque ac nulla sit amet
        porttitor. Ut scelerisque sagittis tortor, eget sagittis neque rhoncus at. Morbi justo
        lorem, tincidunt a pellentesque et, scelerisque sit amet ex. Aliquam justo leo, pretium sed
        nunc sit amet, feugiat sagittis diam. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Duis quis nunc sit amet turpis facilisis ultrices nec vel diam. Nam sed lacinia nisi.
        Mauris dapibus elit at risus efficitur, in gravida nisi consequat. Suspendisse varius congue
        dignissim. Curabitur ac libero commodo, tristique nisl ac, posuere turpis. Phasellus mattis
        dignissim eros sit amet elementum. In non leo in nisi convallis finibus nec vel dolor. Donec
        tempus justo vel libero mollis tincidunt. In mattis neque eget erat vulputate tempus quis at
        nibh. In ultrices dui in nulla bibendum, vel tincidunt justo accumsan. Pellentesque
        pellentesque ac nulla sit amet porttitor. Ut scelerisque sagittis tortor, eget sagittis
        neque rhoncus at. Morbi justo lorem, tincidunt a pellentesque et, scelerisque sit amet ex.
        Aliquam justo leo, pretium sed nunc sit amet, feugiat sagittis diam. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Duis quis nunc sit amet turpis facilisis ultrices nec vel
        diam. Nam sed lacinia nisi. Mauris dapibus elit at risus efficitur, in gravida nisi
        consequat. Suspendisse varius congue dignissim. Curabitur ac libero commodo, tristique nisl
        ac, posuere turpis. Phasellus mattis dignissim eros sit amet elementum. In non leo in nisi
        convallis finibus nec vel dolor. Donec tempus justo vel libero mollis tincidunt. In mattis
        neque eget erat vulputate tempus quis at nibh. In ultrices dui in nulla bibendum, vel
        tincidunt justo accumsan. Pellentesque pellentesque ac nulla sit amet porttitor. Ut
        scelerisque sagittis tortor, eget sagittis neque rhoncus at. Morbi justo lorem, tincidunt a
        pellentesque et, scelerisque sit amet ex. Aliquam justo leo, pretium sed nunc sit amet,
        feugiat sagittis diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
        nunc sit amet turpis facilisis ultrices nec vel diam. Nam sed lacinia nisi. Mauris dapibus
        elit at risus efficitur, in gravida nisi consequat. Suspendisse varius congue dignissim.
        Curabitur ac libero commodo, tristique nisl ac, posuere turpis. Phasellus mattis dignissim
        eros sit amet elementum. In non leo in nisi convallis finibus nec vel dolor. Donec tempus
        justo vel libero mollis tincidunt. In mattis neque eget erat vulputate tempus quis at nibh.
        In ultrices dui in nulla bibendum, vel tincidunt justo accumsan. Pellentesque pellentesque
        ac nulla sit amet porttitor. Ut scelerisque sagittis tortor, eget sagittis neque rhoncus at.
        Morbi justo lorem, tincidunt a pellentesque et, scelerisque sit amet ex. Aliquam justo leo,
        pretium sed nunc sit amet, feugiat sagittis diam. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Duis quis nunc sit amet turpis facilisis ultrices nec vel diam. Nam sed
        lacinia nisi. Mauris dapibus elit at risus efficitur, in gravida nisi consequat. Suspendisse
        varius congue dignissim. Curabitur ac libero commodo, tristique nisl ac, posuere turpis.
        Phasellus mattis dignissim eros sit amet elementum. In non leo in nisi convallis finibus nec
        vel dolor. Donec tempus justo vel libero mollis tincidunt. In mattis neque eget erat
        vulputate tempus quis at nibh. In ultrices dui in nulla bibendum, vel tincidunt justo
        accumsan. Pellentesque pellentesque ac nulla sit amet porttitor. Ut scelerisque sagittis
        tortor, eget sagittis neque rhoncus at. Morbi justo lorem, tincidunt a pellentesque et,
        scelerisque sit amet ex. Aliquam justo leo, pretium sed nunc sit amet, feugiat sagittis
        diam.
      </Section>
      <Section id="experience" title="Experience">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nunc sit amet turpis
        facilisis ultrices nec vel diam. Nam sed lacinia nisi. Mauris dapibus elit at risus
        efficitur, in gravida nisi consequat. Suspendisse varius congue dignissim. Curabitur ac
        libero commodo, tristique nisl ac, posuere turpis. Phasellus mattis dignissim eros sit amet
        elementum. In non leo in nisi convallis finibus nec vel dolor. Donec tempus justo vel libero
        mollis tincidunt. In mattis neque eget erat vulputate tempus quis at nibh. In ultrices dui
        in nulla bibendum, vel tincidunt justo accumsan. Pellentesque pellentesque ac nulla sit amet
        porttitor. Ut scelerisque sagittis tortor, eget sagittis neque rhoncus at. Morbi justo
        lorem, tincidunt a pellentesque et, scelerisque sit amet ex. Aliquam justo leo, pretium sed
        nunc sit amet, feugiat sagittis diam. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Duis quis nunc sit amet turpis facilisis ultrices nec vel diam. Nam sed lacinia nisi.
        Mauris dapibus elit at risus efficitur, in gravida nisi consequat. Suspendisse varius congue
        dignissim. Curabitur ac libero commodo, tristique nisl ac, posuere turpis. Phasellus mattis
        dignissim eros sit amet elementum. In non leo in nisi convallis finibus nec vel dolor. Donec
        tempus justo vel libero mollis tincidunt. In mattis neque eget erat vulputate tempus quis at
        nibh. In ultrices dui in nulla bibendum, vel tincidunt justo accumsan. Pellentesque
        pellentesque ac nulla sit amet porttitor. Ut scelerisque sagittis tortor, eget sagittis
        neque rhoncus at. Morbi justo lorem, tincidunt a pellentesque et, scelerisque sit amet ex.
        Aliquam justo leo, pretium sed nunc sit amet, feugiat sagittis diam. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Duis quis nunc sit amet turpis facilisis ultrices nec vel
        diam. Nam sed lacinia nisi. Mauris dapibus elit at risus efficitur, in gravida nisi
        consequat. Suspendisse varius congue dignissim. Curabitur ac libero commodo, tristique nisl
        ac, posuere turpis. Phasellus mattis dignissim eros sit amet elementum. In non leo in nisi
        convallis finibus nec vel dolor. Donec tempus justo vel libero mollis tincidunt. In mattis
        neque eget erat vulputate tempus quis at nibh. In ultrices dui in nulla bibendum, vel
        tincidunt justo accumsan. Pellentesque pellentesque ac nulla sit amet porttitor. Ut
        scelerisque sagittis tortor, eget sagittis neque rhoncus at. Morbi justo lorem, tincidunt a
        pellentesque et, scelerisque sit amet ex. Aliquam justo leo, pretium sed nunc sit amet,
        feugiat sagittis diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
        nunc sit amet turpis facilisis ultrices nec vel diam. Nam sed lacinia nisi. Mauris dapibus
        elit at risus efficitur, in gravida nisi consequat. Suspendisse varius congue dignissim.
        Curabitur ac libero commodo, tristique nisl ac, posuere turpis. Phasellus mattis dignissim
        eros sit amet elementum. In non leo in nisi convallis finibus nec vel dolor. Donec tempus
        justo vel libero mollis tincidunt. In mattis neque eget erat vulputate tempus quis at nibh.
        In ultrices dui in nulla bibendum, vel tincidunt justo accumsan. Pellentesque pellentesque
        ac nulla sit amet porttitor. Ut scelerisque sagittis tortor, eget sagittis neque rhoncus at.
        Morbi justo lorem, tincidunt a pellentesque et, scelerisque sit amet ex. Aliquam justo leo,
        pretium sed nunc sit amet, feugiat sagittis diam.
      </Section>
      <Section id="service" title="Service">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nunc sit amet turpis
        facilisis ultrices nec vel diam. Nam sed lacinia nisi. Mauris dapibus elit at risus
        efficitur, in gravida nisi consequat. Suspendisse varius congue dignissim. Curabitur ac
        libero commodo, tristique nisl ac, posuere turpis. Phasellus mattis dignissim eros sit amet
        elementum. In non leo in nisi convallis finibus nec vel dolor. Donec tempus justo vel libero
        mollis tincidunt. In mattis neque eget erat vulputate tempus quis at nibh. In ultrices dui
        in nulla bibendum, vel tincidunt justo accumsan. Pellentesque pellentesque ac nulla sit amet
        porttitor. Ut scelerisque sagittis tortor, eget sagittis neque rhoncus at. Morbi justo
        lorem, tincidunt a pellentesque et, scelerisque sit amet ex. Aliquam justo leo, pretium sed
        nunc sit amet, feugiat sagittis diam. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Duis quis nunc sit amet turpis facilisis ultrices nec vel diam. Nam sed lacinia nisi.
        Mauris dapibus elit at risus efficitur, in gravida nisi consequat. Suspendisse varius congue
        dignissim. Curabitur ac libero commodo, tristique nisl ac, posuere turpis. Phasellus mattis
        dignissim eros sit amet elementum. In non leo in nisi convallis finibus nec vel dolor. Donec
        tempus justo vel libero mollis tincidunt. In mattis neque eget erat vulputate tempus quis at
        nibh. In ultrices dui in nulla bibendum, vel tincidunt justo accumsan. Pellentesque
        pellentesque ac nulla sit amet porttitor. Ut scelerisque sagittis tortor, eget sagittis
        neque rhoncus at. Morbi justo lorem, tincidunt a pellentesque et, scelerisque sit amet ex.
        Aliquam justo leo, pretium sed nunc sit amet, feugiat sagittis diam. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Duis quis nunc sit amet turpis facilisis ultrices nec vel
        diam. Nam sed lacinia nisi. Mauris dapibus elit at risus efficitur, in gravida nisi
        consequat. Suspendisse varius congue dignissim. Curabitur ac libero commodo, tristique nisl
        ac, posuere turpis. Phasellus mattis dignissim eros sit amet elementum. In non leo in nisi
        convallis finibus nec vel dolor. Donec tempus justo vel libero mollis tincidunt. In mattis
        neque eget erat vulputate tempus quis at nibh. In ultrices dui in nulla bibendum, vel
        tincidunt justo accumsan. Pellentesque pellentesque ac nulla sit amet porttitor. Ut
        scelerisque sagittis tortor, eget sagittis neque rhoncus at. Morbi justo lorem, tincidunt a
        pellentesque et, scelerisque sit amet ex. Aliquam justo leo, pretium sed nunc sit amet,
        feugiat sagittis diam.
        <ScrollAnimation animateIn="pulse" animateOnce initiallyVisible>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nunc sit amet turpis
          facilisis ultrices nec vel diam. Nam sed lacinia nisi. Mauris dapibus elit at risus
          efficitur, in gravida nisi consequat. Suspendisse varius congue dignissim. Curabitur ac
          libero commodo, tristique nisl ac, posuere turpis. Phasellus mattis dignissim eros sit
          amet elementum. In non leo in nisi convallis finibus nec vel dolor. Donec tempus justo vel
          libero mollis tincidunt. In mattis neque eget erat vulputate tempus quis at nibh. In
          ultrices dui in nulla bibendum, vel tincidunt justo accumsan. Pellentesque pellentesque ac
          nulla sit amet porttitor. Ut scelerisque sagittis tortor, eget sagittis neque rhoncus at.
          Morbi justo lorem, tincidunt a pellentesque et, scelerisque sit amet ex. Aliquam justo
          leo, pretium sed nunc sit amet, feugiat sagittis diam.
        </ScrollAnimation>
      </Section>
      <Section id="contacts" title="Contacts">
        <ScrollAnimation animateIn="fadeInLeftBig" animateOnce>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nunc sit amet turpis
          facilisis ultrices nec vel diam. Nam sed lacinia nisi. Mauris dapibus elit at risus
          efficitur, in gravida nisi consequat. Suspendisse varius congue dignissim. Curabitur ac
          libero commodo, tristique nisl ac, posuere turpis. Phasellus mattis dignissim eros sit
          amet elementum. In non leo in nisi convallis finibus nec vel dolor. Donec tempus justo vel
          libero mollis tincidunt. In mattis neque eget erat vulputate tempus quis at nibh. In
          ultrices dui in nulla bibendum, vel tincidunt justo accumsan. Pellentesque pellentesque ac
          nulla sit amet porttitor. Ut scelerisque sagittis tortor, eget sagittis neque rhoncus at.
          Morbi justo lorem, tincidunt a pellentesque et, scelerisque sit amet ex. Aliquam justo
          leo, pretium sed nunc sit amet, feugiat sagittis diam. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Duis quis nunc sit amet turpis facilisis ultrices nec vel
          diam. Nam sed lacinia nisi. Mauris dapibus elit at risus efficitur, in gravida nisi
          consequat. Suspendisse varius congue dignissim. Curabitur ac libero commodo, tristique
          nisl ac, posuere turpis. Phasellus mattis dignissim eros sit amet elementum. In non leo in
          nisi convallis finibus nec vel dolor. Donec tempus justo vel libero mollis tincidunt. In
          mattis neque eget erat vulputate tempus quis at nibh. In ultrices dui in nulla bibendum,
          vel tincidunt justo accumsan. Pellentesque pellentesque ac nulla sit amet porttitor. Ut
          scelerisque sagittis tortor, eget sagittis neque rhoncus at. Morbi justo lorem, tincidunt
          a pellentesque et, scelerisque sit amet ex. Aliquam justo leo, pretium sed nunc sit amet,
          feugiat sagittis diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
          nunc sit amet turpis facilisis ultrices nec vel diam. Nam sed lacinia nisi. Mauris dapibus
          elit at risus efficitur, in gravida nisi consequat. Suspendisse varius congue dignissim.
          Curabitur ac libero commodo, tristique nisl ac, posuere turpis. Phasellus mattis dignissim
          eros sit amet elementum. In non leo in nisi convallis finibus nec vel dolor. Donec tempus
          justo vel libero mollis tincidunt. In mattis neque eget erat vulputate tempus quis at
          nibh. In ultrices dui
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRightBig" animateOnce>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nunc sit amet turpis
          facilisis ultrices nec vel diam. Nam sed lacinia nisi. Mauris dapibus elit at risus
          efficitur, in gravida nisi consequat. Suspendisse varius congue dignissim. Curabitur ac
          libero commodo, tristique nisl ac, posuere turpis. Phasellus mattis dignissim eros sit
          amet elementum. In non leo in nisi convallis finibus nec vel dolor. Donec tempus justo vel
          libero mollis tincidunt. In mattis neque eget erat vulputate tempus quis at nibh. In
          ultrices dui in nulla bibendum, vel tincidunt justo accumsan. Pellentesque pellentesque ac
          nulla sit amet porttitor. Ut scelerisque sagittis tortor, eget sagittis neque rhoncus at.
          Morbi justo lorem, tincidunt a pellentesque et, scelerisque sit amet ex. Aliquam justo
          leo, pretium sed nunc sit amet, feugiat sagittis diam. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Duis quis nunc sit amet turpis facilisis ultrices nec vel
          diam. Nam sed lacinia nisi. Mauris dapibus elit at risus efficitur, in gravida nisi
          consequat. Suspendisse varius congue dignissim. Curabitur ac libero commodo, tristique
          nisl ac, posuere turpis. Phasellus mattis dignissim eros sit amet elementum. In non leo in
          nisi convallis finibus nec vel dolor. Donec tempus justo vel libero mollis tincidunt. In
          mattis neque eget erat vulputate tempus quis at nibh. In ultrices dui in nulla bibendum,
          vel tincidunt justo accumsan. Pellentesque pellentesque ac nulla sit amet porttitor. Ut
          scelerisque sagittis tortor, eget sagittis neque rhoncus at. Morbi justo lorem, tincidunt
          a pellentesque et, scelerisque sit amet ex. Aliquam justo leo, pretium sed nunc sit amet,
          feugiat sagittis diam. in nulla bibendum, vel tincidunt justo accumsan. Pellentesque
          pellentesque ac nulla sit amet porttitor. Ut scelerisque sagittis tortor, eget sagittis
          neque rhoncus at. Morbi justo lorem, tincidunt a pellentesque et, scelerisque sit amet ex.
          Aliquam justo leo, pretium sed
        </ScrollAnimation>
        nunc sit amet, feugiat sagittis diam. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Duis quis nunc sit amet turpis facilisis ultrices nec vel diam. Nam sed lacinia nisi.
        Mauris dapibus elit at risus efficitur, in gravida nisi consequat. Suspendisse varius congue
        dignissim. Curabitur ac libero commodo, tristique nisl ac, posuere turpis. Phasellus mattis
        dignissim eros sit amet elementum. In non leo in nisi convallis finibus nec vel dolor. Donec
        tempus justo vel libero mollis tincidunt. In mattis neque eget erat vulputate tempus quis at
        nibh. In ultrices dui in nulla bibendum, vel tincidunt justo accumsan. Pellentesque
        pellentesque ac nulla sit amet porttitor. Ut scelerisque sagittis tortor, eget sagittis
        neque rhoncus at. Morbi justo lorem, tincidunt a pellentesque et, scelerisque sit amet ex.
        Aliquam justo leo, pretium sed nunc sit amet, feugiat sagittis diam.
      </Section>
    </Layout>
  );
};

export default HomePage;
