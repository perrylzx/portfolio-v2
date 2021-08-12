import React from 'react';
import styled from 'styled-components';
import { Avatar, Image } from 'antd';

import Logo from './logo.png';

const ContactSectionContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  margin-bottom: 30px;
`;

const ContactContainer = styled.div`
  display: flex;
  a {
    color: #1d263b;
    font-size: 16px;
    font-weight: bold;
  }
  span {
    margin: 0 5px;
    font-weight: 600;
  }
`;

const ContactSection = (props) => {
  return (
    <ContactSectionContainer {...props}>
      <LogoContainer>
        <Avatar size={200} icon={<Image src={Logo} />} />
      </LogoContainer>
      <ContactContainer>
        <a href='mailto:perry_lzx@outlook.com?Subject='>Email</a>
        <span>|</span>
        <a href='https://www.linkedin.com/in/lim-zhi-xian-369840181'>
          Linkedin
        </a>
      </ContactContainer>
    </ContactSectionContainer>
  );
};

export default ContactSection;
