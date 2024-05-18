import { CatalogFilterItem } from '../CatalogFilterItem/CatalogFilterItem';

export const CatalogFilterList = ({ filterGroup, filters }) => {
  return (
    <div>
      <p>{filterGroup}</p>
      <ul>
        {Object.keys(filters).map(filter => {
          return (
            <CatalogFilterItem
              key={filter}
              name={filter}
              icon={filter}
              nameValue={filters[filter]}
            />
          );
        })}
      </ul>
    </div>
  );
};
