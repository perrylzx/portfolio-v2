import React from 'react';
import styled from 'styled-components';

const AboutSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 46px 0;
  line-height: 1.3;
`;

const Name = styled.h1`
  margin-bottom: 40px;
`;

const Description = styled.h2`
  max-width: 70%;
  font-size: 15px;
  font-weight: 400;
`;

const AboutContainer = styled.div`
  margin: auto;
  max-width: 50%;
`;

function AboutSection(props) {
  return (
    <AboutSectionContainer {...props}>
      <AboutContainer>
        <Name>Hi, my name is Perry Lim</Name>
        <Description>
          I&apos;m a full-stack software engineer based in Singapore specializing in React and
          Express. On my free time I build things that automate the boring parts of everyday life.
          Check my projects out below.
        </Description>
      </AboutContainer>
    </AboutSectionContainer>
  );
}

export default AboutSection;
