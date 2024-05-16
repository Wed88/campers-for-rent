import { HomePage } from '../pages/HomePage/HomePage';
import { CatalogPage } from '../pages/CatalogPage/CatalogPage';
import { FavoritesPage } from '../pages/FavoritesPage/FavoritesPage';
import { Header } from './Header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
