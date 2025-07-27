import style from './global.css'
import Orb from '../anim/Orb';

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
    </div>
  );
}
