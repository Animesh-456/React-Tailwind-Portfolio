import './App.css';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>

  );
}

export default App;
