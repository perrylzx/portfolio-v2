import React from 'react';
import styled from 'styled-components';

const ProjectsSectionContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 46px;
  height: 100vh;
  width: 100%;
`;

const LeftButton = styled(Button).attrs({
  type: 'primary',
  shape: 'circle',
  icon: <LeftOutlined />,
})``;

const RightButton = styled(Button).attrs({
  type: 'primary',
  shape: 'circle',
  icon: <RightOutlined />,
})``;

const ProjectsSection = (props) => {
  const [currentlySelectedProjectNumber, setCurrentlySelectedProjectNumber] =
    useState(0);
  const [currentlySelectedProject, setCurrentlySelectedProject] = useState(
    projectData[Object.keys(projectData)[currentlySelectedProjectNumber]],
  );

  useEffect(
    function updateProjectOnButtonClick() {
      setCurrentlySelectedProject(
        projectData[Object.keys(projectData)[currentlySelectedProjectNumber]],
      );
    },
    [currentlySelectedProjectNumber],
  );

  const projectsLeftOutOfBounds = currentlySelectedProjectNumber !== 0;

  const projectsRightOutOfBounds =
    currentlySelectedProjectNumber < Object.keys(projectData).length - 1;

  return (
    <ProjectsSectionContainer {...props}>
      <LeftButton
        onClick={() => {
          projectsLeftOutOfBounds &&
            setCurrentlySelectedProjectNumber(
              currentlySelectedProjectNumber - 1,
            );
        }}
      />
      <Project projectData={currentlySelectedProject} />
      <RightButton
        onClick={() => {
          projectsRightOutOfBounds &&
            setCurrentlySelectedProjectNumber(
              currentlySelectedProjectNumber + 1,
            );
        }}
      />
    </ProjectsSectionContainer>
  );
};

export default ProjectsSection;
