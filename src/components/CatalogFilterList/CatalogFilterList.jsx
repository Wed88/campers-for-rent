import { CatalogFilterItem } from '../CatalogFilterItem/CatalogFilterItem';
import css from './CatalogFilterList.module.css';

export const CatalogFilterList = ({ filterGroup, filters }) => {
  return (
    <div className={css.container}>
      <p className={css.name}>{filterGroup}</p>
      <ul className={css.group}>
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
