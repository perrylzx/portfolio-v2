import useScrollSnap from 'react-use-scroll-snap';
import styled from 'styled-components';
import { useRef } from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ProjectsSection from './components/ProjectsSection';
import SearchBar from './components/SearchBar';
import './App.less';
import { SectionIds } from './constants';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 10 });

  return (
    <>
      <Navbar />
      <AppContainer ref={scrollRef}>
        <SearchBar id={SectionIds.MAIN} />
        <AboutSection id={SectionIds.ABOUT} />
        <ProjectsSection id={SectionIds.PROJECT} />
        <ContactSection id={SectionIds.CONTACT} />
      </AppContainer>
    </>
  );
}

export default App;
