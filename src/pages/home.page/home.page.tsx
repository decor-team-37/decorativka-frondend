import { About } from './components/About';
import { DecorIntroduction } from './components/DecorIntroduction';
import { Gallery } from './components/Gallery';

import './home.page.scss';

export const HomePage = () => {
  return (
    <main className='home-page'>
      <DecorIntroduction />
      <About />
      <Gallery />
      <div></div>
    </main>
  );
};
