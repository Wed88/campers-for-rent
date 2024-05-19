import { CatalogItem } from '../../components/CatalogItem/CatalogItem';
import { CamperModal } from '../../components/CamperModal/CamperModal';
import { useSelector } from 'react-redux';
import { selectCurrentCamper, selectFavorites } from '../../redux/selectors';
import css from './FavoritesPage.module.css';

export const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const camper = useSelector(selectCurrentCamper);

  return (
    <>
      <div className={css.container}>
        {favorites.length !== 0 ? (
          <ul className={css.list}>
            {favorites.map(camper => {
              return <CatalogItem key={camper._id} camper={camper} />;
            })}
          </ul>
        ) : (
          'You have no favorites yet'
        )}
      </div>
      {camper && <CamperModal />}
    </>
  );
};
