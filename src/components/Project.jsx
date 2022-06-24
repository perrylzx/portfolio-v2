import React from 'react';
import styled from 'styled-components';
import * as images from '../images';

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  @media only screen and (min-width: 1200px) {
    padding: 0px 300px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    line-height: 1.2;
  }
`;

const Image = styled.img`
  width: 70%;
  max-height: 360px;
  @media only screen and (min-height: 800px) {
    max-height: unset;
  }
`;

const Title = styled.a`
  background: linear-gradient(-70deg, #49ab7b 0%, #64acff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
  margin-bottom: 15px;
`;

const Description = styled.div`
  font-size: 15px;
  margin-bottom: 20px;
  max-width: 70%;
`;

function Project({ projectData, projectKey }) {
  const date = new Date(projectData.date);
  return (
    <ProjectContainer id={projectKey} hasComponentRendered>
      <Content>
        <Title target="_blank" href={projectData.url ?? ''}>{`${
          projectData.title
        } - ${date.toLocaleDateString()}`}</Title>
        <Description>{projectData.description}</Description>
        {projectData.bannerUrl && <Image alt="plant" src={images[projectData.bannerUrl]} />}
      </Content>
    </ProjectContainer>
  );
}

export default Project;
