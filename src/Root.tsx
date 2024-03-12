import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
// import { HomePage } from './pages/home.page';
import { NotFoundPage } from './pages/not-found-page';
import { Cooperation } from './pages/cooperation-page';
import { ProductPage } from './pages/product-page/product-page';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<ProductPage />} />
        {/* <Route index element={<HomePage />} /> */}
        <Route path="cooperation" element={<Cooperation />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);
