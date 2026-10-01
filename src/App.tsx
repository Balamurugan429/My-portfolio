import { Navbar } from './components/ui/Navbar';
import { CustomCursor } from './components/ui/CustomCursor';
import { SceneCanvas } from './components/3d/SceneCanvas';
import { Hero } from './components/sections/Hero';
import { AboutBento } from './components/sections/AboutBento';
import { FlagshipResearch } from './components/sections/FlagshipResearch';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { SkillMatrix } from './components/sections/SkillMatrix';
import { Timeline } from './components/sections/Timeline';
import { ContactFooter } from './components/sections/ContactFooter';
import { useLenis } from './hooks/useLenis';

function App() {
  useLenis();

  return (
    <>
      {/* 3D Background Layer */}
      <SceneCanvas />

      {/* Interactive UI Layer */}
      <div className="relative z-10">
        <CustomCursor />
        <Navbar />
        
        <main className="space-y-24 md:space-y-32">
          <Hero />
          <AboutBento />
          <FlagshipResearch />
          <FeaturedProjects />
          <SkillMatrix />
          <Timeline />
          <ContactFooter />
        </main>
      </div>
    </>
  );
}

export default App;
