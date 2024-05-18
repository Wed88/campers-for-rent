import { SvgIcon } from '../SvgIcon/SvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { updateFavorites } from '../../redux/slice';
import css from './CatalogItemHeader.module.css';

export const CatalogItemHeader = ({ camper, modal }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const swapFavorites = () => {
    if (isFavorite(camper._id)) {
      dispatch(
        updateFavorites(
          favorites.filter(favorite => favorite._id !== camper._id)
        )
      );
    } else {
      dispatch(updateFavorites([...favorites, camper]));
    }
  };

  const isFavorite = id => favorites.some(favorite => favorite._id === id);

  return (
    <div className={css.container}>
      <div className={css.group}>
        <h3 className={css.header}>{camper.name}</h3>
        <div className={css.groupData}>
          <div className={css.containerRating}>
            <div className={css.svgBoxRating}>
              <SvgIcon icon={'star'} />
            </div>
            <p className={css.textRating}>
              {camper.rating}({camper.reviews.length} Reviews)
            </p>
          </div>
          <div className={css.containerLocation}>
            <div className={css.svgBoxLocation}>
              <SvgIcon icon={'location'} />
            </div>
            <p>{camper.location}</p>
          </div>
        </div>
      </div>
      <div className={css.priceText}>€{camper.price}.00</div>
      <div className={css.svgBox} onClick={() => swapFavorites()}>
        <span
          className={
            css[
              `${modal ? 'hidden' : isFavorite(camper._id) ? 'favorite' : ''}`
            ]
          }
        >
          <SvgIcon icon={'heart'} />
        </span>
      </div>
    </div>
  );
};
