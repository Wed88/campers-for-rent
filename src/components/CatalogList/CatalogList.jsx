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
  selectLocationFilter,
  selectSearchLocation,
  selectToolsFilter,
} from '../../redux/selectors';
import css from './CatalogList.module.css';

export const CatalogList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const loadMore = useSelector(selectLoadMore);
  const currentPage = useSelector(selectCurrentPage);
  const searchLocation = useSelector(selectSearchLocation);
  const locationFilter = useSelector(selectLocationFilter);
  const toolsFilter = useSelector(selectToolsFilter);

  useEffect(() => {
    dispatch(
      fetchCampers({
        page: currentPage,
        limit: 4,
        location: searchLocation,
      })
    );
  }, [dispatch, currentPage, searchLocation]);

  const onClickLoadMore = () => {
    dispatch(updateCurrentPage(currentPage + 1));
  };

  const camperTypes = {
    panelTruck: 'Van',
    fullyIntegrated: 'Fully Integrated',
    alcove: 'Alcove',
  };

  const featurTypes = {
    airConditioner: 'Air conditioner',
    bathroom: 'bathroom',
    kitchen: 'kitchen',
    beds: 'beds',
    TV: 'AC',
    CD: 'CD',
    radio: 'Radio',
    shower: 'Shower',
    toilet: 'Toilet',
    freezer: 'Freezer',
    hob: 'hob',
    microwave: 'Microwave',
    gas: 'Gas',
    water: 'Water',
    adults: 'adults',
    children: 'children',
    engine: 'petrol',
    transmission: 'automatic',
  };

  const allMatches = camper => {
    const types = Object.keys(camperTypes);
    const checkedTypes = toolsFilter.filter(item => types.includes(item));
    if (checkedTypes.length > 0 && !checkedTypes.includes(camper.form)) {
      return false;
    }

    const features = Object.keys(featurTypes);
    const checkedFeatures = toolsFilter.filter(item => features.includes(item));

    return checkedFeatures.every(filter => camper.details[filter] > 0);
  };

  const fromLocation = camperLocation => {
    return camperLocation.toLowerCase().includes(locationFilter.toLowerCase());
  };

  const filteredCampers = campers => {
    return campers
      .filter(camper => fromLocation(camper.location))
      .filter(camper => allMatches(camper));
  };

  return (
    <div className={css.container}>
      {error}
      {campers.length !== 0 && (
        <ul className={css.list}>
          {filteredCampers(campers).map(camper => {
            return <CatalogItem key={camper._id} camper={camper} />;
          })}
        </ul>
      )}
      {filteredCampers(campers).length === 0 && !loading && (
        <p>There is no camper to match your requirements</p>
      )}
      {loading && <Loader />}
      {filteredCampers(campers).length !== 0 && loadMore && (
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
