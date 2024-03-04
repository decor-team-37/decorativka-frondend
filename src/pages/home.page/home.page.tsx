import { About } from './components/About';
import { Introduction } from './components/Introduction';
import { Gallery } from './components/Gallery';
import { Advantages } from './components/Advantages';

import './home.page.scss';
import { Services } from './components/Services';
import { Products } from './components/Products';

export const HomePage = () => {
  return (
    <main className='home-page'>
      <Introduction />
      <About />
      <Services />
      <Gallery />
      <Advantages />
      <Products />
      <div></div>
    </main>
  );
};
