/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Project from './Project';

import { projectData } from '../constants';

const ProjectsSectionContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 46px;
  height: 100vh;
  width: 100%;
  justify-content: space-between;
`;

const LeftButton = styled(Button).attrs({
  type: 'primary',
  shape: 'circle',
  icon: <LeftOutlined />
})``;

const RightButton = styled(Button).attrs({
  type: 'primary',
  shape: 'circle',
  icon: <RightOutlined />
})``;

function ProjectsSection(props) {
  const [currentlySelectedProjectNumber, setCurrentlySelectedProjectNumber] = useState(0);
  const [currentlySelectedProject, setCurrentlySelectedProject] = useState(
    projectData[Object.keys(projectData)[currentlySelectedProjectNumber]]
  );

  useEffect(() => {
    setCurrentlySelectedProject(
      projectData[Object.keys(projectData)[currentlySelectedProjectNumber]]
    );
  }, [currentlySelectedProjectNumber]);

  const projectsLeftOutOfBounds = currentlySelectedProjectNumber !== 0;

  const projectsRightOutOfBounds =
    currentlySelectedProjectNumber < Object.keys(projectData).length - 1;

  return (
    <ProjectsSectionContainer {...props}>
      <LeftButton
        onClick={() => {
          if (projectsLeftOutOfBounds) {
            setCurrentlySelectedProjectNumber(currentlySelectedProjectNumber - 1);
          }
        }}
      />
      <Project projectData={currentlySelectedProject} />
      <RightButton
        onClick={() => {
          if (projectsRightOutOfBounds) {
            setCurrentlySelectedProjectNumber(currentlySelectedProjectNumber + 1);
          }
        }}
      />
    </ProjectsSectionContainer>
  );
}

export default ProjectsSection;
