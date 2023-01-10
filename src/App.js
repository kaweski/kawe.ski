import './App.scss';
import { Link } from './Components';

export default function App() {
  return (
    <div className='content'>
      <div className="auto-cols-max flex flex-row content-start">
        <div>01</div>
        <div className='grow'>
          <div className='top'>
            {/* <Link url="https://kawe.ski" /> */}
            <a href='https://kawe.ski' className="title">https://kawe.ski</a>
            <hr/>
          </div>
          <div className='box flex items-stretch'>
          <div className='max-w-0 photo'></div>
            <div>
              <span className='tag'>about me</span>
              <h1 className='title white'>Ex front-end developer, actual Design System Ops Senior, The Sims 4 and Minecraft player</h1>
              <span className='text gray'>Today I am working on Cosmos Design System</span>
              <div className='box-footer flex flex-row items-center'>
                <div className='mr-5'><span className='avatar'></span></div>
                <div className='text'>
                  <span className='title black'>Instagram</span>
                  <span className='text black'>@naweskil</span>
                </div>
                <div className='text'>
                  <a href='http://' target='_blank' className='button button-icon go-link'></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>03</div>
      </div>
    </div>
  );
}