import { About } from './components/About';
import { Introduction } from './components/Introduction';
import { Gallery } from './components/Gallery';
import { Advantages } from './components/Advantages';

import './home.page.scss';

export const HomePage = () => {
  return (
    <main className='home-page'>
      <Introduction />
      <About />
      <Gallery />
      <Advantages />
      <div></div>
    </main>
  );
};
