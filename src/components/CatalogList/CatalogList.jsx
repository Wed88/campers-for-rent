import { CatalogItem } from '../CatalogItem/CatalogItem';
import Loader from '../Loader/Loader';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPage } from '../../redux/slice';
import {
  selectCampers,
  selectCurrentPage,
  selectError,
  selectLoadMore,
  selectLoading,
} from '../../redux/selectors';
import css from './CatalogList.module.css';

export const CatalogList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const loadMore = useSelector(selectLoadMore);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(
      fetchCampers({
        page: currentPage,
        limit: 4,
      })
    );
  }, [dispatch, currentPage]);

  const onClickLoadMore = () => {
    dispatch(updateCurrentPage(currentPage + 1));
  };

  return (
    <div className={css.container}>
      {error}
      {campers.length !== 0 && (
        <ul className={css.list}>
          {campers.map(camper => {
            return <CatalogItem key={camper._id} camper={camper} />;
          })}
        </ul>
      )}
      {loading && <Loader />}
      {campers.length !== 0 && loadMore && (
        <button
          className={css.button}
          type="button"
          onClick={() => onClickLoadMore()}
        >
          Load more
        </button>
      )}
    </div>
  );
};
