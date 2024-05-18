import { CatalogList } from '../../components/CatalogList/CatalogList';
import css from './CatalogPage.module.css';

export const CatalogPage = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.campers}>
          <CatalogList />
        </div>
      </div>
    </>
  );
};
