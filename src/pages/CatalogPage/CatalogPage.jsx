import { CatalogSearchBar } from '../../components/CatalogSearchBar/CatalogSearchBar';
import { CatalogList } from '../../components/CatalogList/CatalogList';
import css from './CatalogPage.module.css';

export const CatalogPage = () => {
  return (
    <>
      <div className={css.container}>
        <CatalogSearchBar />
        <div className={css.campers}>
          <CatalogList />
        </div>
      </div>
    </>
  );
};
