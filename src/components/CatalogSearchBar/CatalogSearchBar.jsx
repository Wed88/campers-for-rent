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
    form: 'Form',
    length: 'Length',
    width: 'Width',
    height: 'Height',
    tank: 'Tank',
    consumption: 'Consumption',
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <div>
          <p>Location</p>
          <div>
            <input
              id="location"
              name="location"
              type="input"
              autoComplete="off"
              placeholder="City"
              value={locationFilter}
              onChange={evt => updateValue(evt.target.value)}
            />
            <div>
              <SvgIcon icon={'location'} />
            </div>
          </div>
        </div>
        <p>Filters</p>
        <CatalogFilterList
          filterGroup="Vehicle equipment"
          filters={vehicleEquipment}
        />
        <CatalogFilterList filterGroup="Vehicle type" filters={vehicleType} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};