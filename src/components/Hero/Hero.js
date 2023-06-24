import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
<LeftSection>
<SectionTitle main center>
  Hello <br/>
  I'm Santhana Lakshmi.

  </SectionTitle>
  <SectionText>
    I am Software Developer. I am an enthusiatic person always keen to learn new things and try out interesting stuffs.Love Reading Books and Listening podcasts.
  </SectionText>
  <Button onClick={()=>window.location="https://www.linkedin.com/in/santhana-lakshmi-s-177782168/"}>Learn More</Button>
</LeftSection>
  </Section>
);

export default Hero;