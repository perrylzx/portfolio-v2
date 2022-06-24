import React from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
import { Button } from 'antd';
import Project from './Project';

import { projectData } from '../constants';

const ProjectsSectionContainer = styled.div`
  position: relative;
  align-items: center;
  padding-top: 46px;
  height: 100vh;
  width: 100%;
`;

const ScrollableProjects = styled.div`
  display: -webkit-box;
  flex-direction: row;
  scroll-behavior: smooth;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  height: 100%;
  &::-webkit-scrollbar {
    height: 0;
  }
`;

const ScrollButtonContainer = styled.div`
  position: absolute;
  bottom: 52px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  & > :not(a:last-child) {
    margin-right: 2px;
  }
`;

function ProjectsSection(props) {
  const handleScrollToElement = (key) => {
    const scrollableProjects = document.querySelector('#scrollableProjectContainer');
    const project = document.querySelector(`#${key}`);
    const leftPosition = project.offsetLeft;
    scrollableProjects.scrollLeft = leftPosition;
  };

  return (
    <ProjectsSectionContainer {...props}>
      <ScrollableProjects id="scrollableProjectContainer">
        {map(projectData, (project, key) => (
          <Project projectKey={key} projectData={project} />
        ))}
      </ScrollableProjects>
      <ScrollButtonContainer>
        {map(Object.keys(projectData), (key, index) => (
          <Button
            type="circle"
            onClick={(event) => {
              event.preventDefault();
              handleScrollToElement(key);
            }}
            href={`#${key}`}>
            {index}
          </Button>
        ))}
      </ScrollButtonContainer>
    </ProjectsSectionContainer>
  );
}

export default ProjectsSection;
