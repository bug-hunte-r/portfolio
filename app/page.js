import style from './global.css'
import Orb from '../anim/Orb';
import Header from '@/components/templates/Header';
import About from '@/components/templates/About';

export default function Home() {
  return (
    <div className='container'>
      <div style={{ width: '80vw', height: '600px', position: 'relative' }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <Header />
      <About />
    </div>
  );
}
