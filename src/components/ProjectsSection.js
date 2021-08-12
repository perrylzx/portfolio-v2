import React from 'react';
import styled from 'styled-components';

const ProjectsSectionContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 46px;
  height: 100vh;
  background-color: #e2e8dd;
  width: 100%;
`;

const ProjectsSection = () => {
  return (
    <ProjectsSectionContainer id='projects-section'></ProjectsSectionContainer>
  );
};

export default ProjectsSection;
