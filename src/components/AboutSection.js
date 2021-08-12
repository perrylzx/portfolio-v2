import React from 'react';
import styled from 'styled-components';
import { Avatar, Image } from 'antd';

import Logo from './logo.png';

const AboutSectionContainer = styled.div`
  display: flex;
  background-color: #e2e8dd;
  height: 100vh;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin-right: 30px;
`;

const AboutMeContainer = styled.div`
  margin-right: 30px;
  font-weight: 300;
  width: 33%;
  font-size: 20px;
  color: #1d263b;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: #1d263b;
    font-size: 16px;
    font-weight: bold;
  }
`;

const AboutSection = () => {
  return (
    <AboutSectionContainer id='about-section'>
      <LogoContainer>
        <Avatar size={200} icon={<Image src={Logo} />} />
      </LogoContainer>
      <AboutMeContainer>
        <p>
          Hello, my name is Perry Lim. <br />
          I am an award-winning full-stack developer and UI/UX javascript
          specialist. I’ve always sought out opportunities and challenges that
          are meaningful to me. <br />
          As a chef turned web developer, I seek to use my absessive attention
          to detail and my love for making things to solving problems people
          have.
        </p>
      </AboutMeContainer>
      <ContactContainer>
        <a href='mailto:perry_lzx@outlook.com?Subject='>Email</a>
        <a href='https://www.linkedin.com/in/lim-zhi-xian-369840181'>
          Linkedin
        </a>
      </ContactContainer>
    </AboutSectionContainer>
  );
};

export default AboutSection;
