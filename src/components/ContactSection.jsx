import React from 'react';
import styled from 'styled-components';

import Logo from './logo.png';

const ContactSectionContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  padding-top: 46px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoContainer = styled.img`
  height: 50%;
  margin-bottom: 30px;
`;

const ContactContainer = styled.div`
  display: flex;
  a {
    background: linear-gradient(-70deg, #49ab7b 0%, #64acff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 15px;
  }
  span {
    margin: 0 5px;
    font-weight: 600;
  }
`;

function ContactSection(props) {
  return (
    <ContactSectionContainer {...props}>
      <LogoContainer alt="logo" src={Logo} />
      <ContactContainer>
        <a href="mailto:perry_lzx@outlook.com?Subject=">Email</a>
        <span>|</span>
        <a href="https://www.linkedin.com/in/perry-lim-192841232">Linkedin</a>
      </ContactContainer>
    </ContactSectionContainer>
  );
}

export default ContactSection;
