import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ProjectsSection from './components/ProjectsSection';
import './App.less';

function App() {
  return (
    <div>
      <Navbar />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
