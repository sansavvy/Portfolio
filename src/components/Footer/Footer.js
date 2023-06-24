import React from 'react';
import { AiFillGithub,  AiFillLinkedin,AiOutlineTwitter } from 'react-icons/ai';

// import { BsMedium } from 'react-icons/bs';
import { SiMedium } from "react-icons/si";
import { Section,SectionTitle,SectionDivider } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <Section id="contact">
      <SectionDivider />
      <br/>
      <SectionTitle>Contact </SectionTitle>
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      {/* <LinkTitle>Contact</LinkTitle>
      <LinkItem href="Mob:7397168710">7397168710
      </LinkItem> */}
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:vishagasan3108@gmail.com">vishagasan3108@gmail.com
      </LinkItem>
      
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Be Passionate about everything in life, because each moment matters ! </Slogan>
        </CompanyContainer>
        <SocialContainer>
      <SocialIcons href="https://github.com/sansavvy">
        <AiFillGithub size="3rem"/>

      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/santhana-lakshmi-s-177782168/">
        <AiFillLinkedin size="3rem"/>

      </SocialIcons>
      <SocialIcons href="https://medium.com/@Sanlaksh04">
        <SiMedium size="3rem"/>
        </SocialIcons>
        
        <SocialIcons href="https://twitter.com/sanlaksh04">
        <AiOutlineTwitter size="3rem"/>
        </SocialIcons>
        
        </SocialContainer>
      </SocialIconsContainer>
      
    </FooterWrapper>
    </Section>
  );
};

export default Footer;
