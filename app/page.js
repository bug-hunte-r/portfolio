import style from './global.css'
import Orb from '../anim/Orb';
import Header from '@/components/templates/Header';
import About from '@/components/templates/About';
import Skills from '@/components/templates/Skills';

export default function Home() {
  return (
    <div className='container'>
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
    </div>
  );
}
