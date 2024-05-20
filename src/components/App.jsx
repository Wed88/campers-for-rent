import { lazy } from 'react';
import { Header } from './Header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import css from './App.module.css';

const HomePage = lazy(() =>
  import('pages/HomePage/HomePage').then(module => ({
    default: module.HomePage,
  }))
);
const CatalogPage = lazy(() =>
  import('pages/CatalogPage/CatalogPage').then(module => ({
    default: module.CatalogPage,
  }))
);
const FavoritesPage = lazy(() =>
  import('pages/FavoritesPage/FavoritesPage').then(module => ({
    default: module.FavoritesPage,
  }))
);

function App() {
  return (
    <>
      <div className={css.container}>
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
