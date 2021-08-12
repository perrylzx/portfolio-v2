import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ProjectsSection from './components/ProjectsSection';
import SearchBar from './components/SearchBar';
import './App.less';
import { SectionIds } from './constants';

import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <>
      <Navbar />
      <AppContainer>
        <SearchBar id='search-bar-section' />
        <AboutSection id={SectionIds.ABOUT} />
        <ProjectsSection id={SectionIds.PROJECT} />
        <ContactSection id={SectionIds.CONTACT} />
      </AppContainer>
    </>
  );
}

export default App;
