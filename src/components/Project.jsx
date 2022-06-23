import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div``;

function Project({ projectData }) {
  return (
    <ProjectContainer hasComponentRendered>
      <div key={projectData.title}>
        <h1>{projectData.title}</h1>
        <h2>{projectData.description}</h2>
      </div>
    </ProjectContainer>
  );
}

export default Project;
