import { CatalogFilterList } from '../CatalogFilterList/CatalogFilterList';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocationFilter } from '../../redux/selectors';
import { fetchCampers } from '../../redux/thunk';
import {
  updateCurrentPage,
  updateSearchLocation,
  updateLocationFilter,
} from '../../redux/slice';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import css from './CatalogSearchBar.module.css';

export const CatalogSearchBar = () => {
  const dispatch = useDispatch();
  const locationFilter = useSelector(selectLocationFilter);

  const handleSearchSubmit = evt => {
    evt.preventDefault();
    const currentPage = 1;
    dispatch(updateCurrentPage(currentPage));
    dispatch(updateSearchLocation(locationFilter));
    dispatch(
      fetchCampers({
        page: currentPage,
        limit: 4,
        locationFilter,
      })
    );
  };

  const updateValue = value => {
    dispatch(updateLocationFilter(value));
  };

  const vehicleEquipment = {
    TV: 'AC',
    CD: 'CD',
    radio: 'Radio',
    shower: 'Shower',
    toilet: 'Toilet',
    bathroom: 'bathroom',
    freezer: 'Freezer',
    hob: 'hob',
    microwave: 'Microwave',
  };

  const vehicleType = {
    panelTruck: 'Van',
    fullyIntegrated: 'Fully Integrated',
    alcove: 'Alcove',
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSearchSubmit}>
        <div className={css.box}>
          <p className={css.label}>Location</p>
          <div className={css.inputBox}>
            <input
              className={css.input}
              id="location"
              name="location"
              type="input"
              autoComplete="off"
              placeholder="City"
              value={locationFilter}
              onChange={evt => updateValue(evt.target.value)}
            />
            <div className={css.svgBox}>
              <SvgIcon icon={'location'} />
            </div>
          </div>
        </div>
        <p className={css.group}>Filters</p>
        <CatalogFilterList
          filterGroup="Vehicle equipment"
          filters={vehicleEquipment}
        />
        <CatalogFilterList filterGroup="Vehicle type" filters={vehicleType} />
        <span className={css.gap}></span>
        <button className={css.button}>Search</button>
      </form>
    </div>
  );
};
