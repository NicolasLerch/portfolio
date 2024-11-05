import { useState } from 'react';
import './App.css';
import TopTitleSection from './components/TopTitleSection/TopTitleSection';
import NavBar from './components/NavBar/NavBar'
import IconsBar from './components/IconsBar/IconsBar'
import ProjectCardsContainer from './components/ProjectCardsContainer/ProjectCardsContainer';

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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
