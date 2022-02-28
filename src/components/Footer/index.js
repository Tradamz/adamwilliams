import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/adamwilliams' onClick={toggleHome}>
              Home
            </SocialLogo>
            <WebsiteRights>Adam © 2022 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.youtube.com/'
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                target='_blank'
                aria-label='Twitter'
                href='https://twitter.com/?lang=en'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/adammwilliamss/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
