import { About } from './components/About';
import { Introduction } from './components/Introduction';
import { Gallery } from './components/Gallery';
import { Advantages } from './components/Advantages';
<<<<<<< HEAD:src/pages/home.page/home.page.tsx

import { Services } from './components/Services';
import { Products } from './components/Products';
import { FormPage } from '../../components/FormPage';
import './home.page.scss';
=======
import { Services } from './components/Services';
import { Products } from './components/Products';
import { FormHome } from './components/FormHome';

import './home-page.scss';
>>>>>>> fe683aa0690e7b11491e3769cdc96f8a60235c5e:src/pages/home.page/home-page.tsx

export const HomePage = () => {
  return (
    <main className="home-page">
      <Introduction />
      <About />
      <Services />
      <Gallery />
      <Advantages />
      <Products />
      <FormHome />
    </main>
  );
};
