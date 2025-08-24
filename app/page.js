import style from './global.css'
import Orb from '../anim/Orb';
import Header from '@/components/templates/Header';
import About from '@/components/templates/About';
import Skills from '@/components/templates/Skills';
import Projects from '@/components/templates/Projects';
import Contact from '@/components/templates/Contact';
import Navbar from '@/components/templates/Navbar';

export default async function Home() {

  return (
    <div className='container'>
      <Navbar />
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
