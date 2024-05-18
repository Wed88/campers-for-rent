import { CatalogItemHeader } from '../CatalogItemHeader/CatalogItemHeader';
import { CamperFeatureList } from '../CamperFeatureList/CamperFeatureList';

export const CatalogItem = ({ camper }) => {
  return (
    <li>
      <img src={camper.gallery[0]} alt={camper.name} />
      <div>
        <CatalogItemHeader camper={camper} modal={false} />
        <p>{camper.description}</p>
        <CamperFeatureList features={camper.details} />
        <button type="button">Show more</button>
      </div>
    </li>
  );
};
