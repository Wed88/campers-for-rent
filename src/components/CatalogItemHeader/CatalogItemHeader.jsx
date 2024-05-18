import { SvgIcon } from '../SvgIcon/SvgIcon';

export const CatalogItemHeader = ({ camper }) => {
  return (
    <div>
      <div>
        <h3>{camper.name}</h3>
        <div>
          <div>
            <div>
              <SvgIcon icon={'star'} />
            </div>
            <p>
              {camper.rating}({camper.reviews.length} Reviews)
            </p>
          </div>
          <div>
            <div>
              <SvgIcon icon={'location'} />
            </div>
            <p>{camper.location}</p>
          </div>
        </div>
      </div>
      <div>€{camper.price}.00</div>
      <div>
        <span>
          <SvgIcon icon={'heart'} />
        </span>
      </div>
    </div>
  );
};
