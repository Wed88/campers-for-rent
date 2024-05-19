import { CatalogSearchBar } from '../../components/CatalogSearchBar/CatalogSearchBar';
import { CatalogList } from '../../components/CatalogList/CatalogList';
import { CamperModal } from '../../components/CamperModal/CamperModal';
import { useSelector } from 'react-redux';
import { selectCurrentCamper } from '../../redux/selectors';
import css from './CatalogPage.module.css';

export const CatalogPage = () => {
  const camper = useSelector(selectCurrentCamper);

  return (
    <>
      <div className={css.container}>
        <CatalogSearchBar />
        <div className={css.campers}>
          <CatalogList />
        </div>
      </div>
      {camper && <CamperModal />}
    </>
  );
};
