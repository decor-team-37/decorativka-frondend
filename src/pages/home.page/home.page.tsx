import { About } from './components/About';
import { Introduction } from './components/Introduction';
import { Gallery } from './components/Gallery';

import './home.page.scss';

export const HomePage = () => {
  return (
    <main className='home-page'>
      <Introduction />
      <About />
      <Gallery />
      <div></div>
    </main>
  );
};
