import { useState } from 'react';
import './App.css';
import TopTitleSection from './components/TopTitleSection/TopTitleSection';
import NavBar from './components/NavBar/NavBar'
import IconsBar from './components/IconsBar/IconsBar'
import ProjectCardsContainer from './components/ProjectCardsContainer/ProjectCardsContainer';
import ContactCard from './components/ContactCard/ContactCard'
import BurgerMenu from './components/BurgerMenu/BurgerMenu';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="default-theme">
      <NavBar />
      <TopTitleSection />      
      <h1>My Projects</h1>
      <ProjectCardsContainer />
      <h1>My Skills</h1>
      <IconsBar />
      <h1>Let's get in touch</h1>
      <ContactCard />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
