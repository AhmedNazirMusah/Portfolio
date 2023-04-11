import './App.css';
import WelcomePage from './components/welcome page/welcome';
import ProjectsPage from './components/projects page/projects';
import About from './components/about page/about';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/welcome page/navbar';
import Contact from './components/contact page/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
