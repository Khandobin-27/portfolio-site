import '../styles/App.css'
import WelcomePage from './WelcomePage';
import About from './About'
import ProjectsList from './ProjectsList';
import Contact from './Contact';
import SocialMedia from './SocialMedia';

function App() {
  return (
    <div>
      <WelcomePage />
      <About />
      <ProjectsList />
      <Contact />
      <SocialMedia />
    </div>
  );
}

export default App;
