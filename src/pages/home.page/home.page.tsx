import { About } from './components/About';
import { DecorIntroduction } from './components/DecorIntroduction';

import './home.page.scss';

export const HomePage = () => {
  return (
    <main className='home-page'>
      <DecorIntroduction />
      <About />
      <About />
    </main>
  );
};
