import React from 'react';
import styled from 'styled-components';

const AboutSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 0 200px;
`;

const SearchBar = styled.div``;

const FullServices = styled.h1`
  text-align: center;
`;

const AboutSection = (props) => {
  return (
    <AboutSectionContainer {...props}>
      <FullServices>
        FULL SERVICES FROM A FULL-STACK DEVELOPER OF AN ESTABLISHED SERIES C
        START-UP
      </FullServices>
      <SearchBar />
    </AboutSectionContainer>
  );
};

export default AboutSection;
