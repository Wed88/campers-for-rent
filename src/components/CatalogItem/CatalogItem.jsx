import { CatalogItemHeader } from '../CatalogItemHeader/CatalogItemHeader';
import { CamperFeatureList } from '../CamperFeatureList/CamperFeatureList';
import css from './CatalogItem.module.css';

export const CatalogItem = ({ camper }) => {
  return (
    <li className={css.container}>
      <img className={css.image} src={camper.gallery[0]} alt={camper.name} />
      <div className={css.infoblock}>
        <CatalogItemHeader camper={camper} modal={false} />
        <p className={css.description}>{camper.description}</p>
        <CamperFeatureList features={camper.details} />
        <button className={css.button} type="button">
          Show more
        </button>
      </div>
    </li>
  );
};
