import { SvgIcon } from '../SvgIcon/SvgIcon';
import css from './CamperFeatureList.module.css';

export const CamperFeatureList = ({ features }) => {
  return (
    <ul className={css.container}>
      {Object.keys(features)
        .filter(name => features[name])
        .map(name => {
          const detail = features[name];
          const detailValue =
            detail && typeof detail === 'number' && detail > 1 ? detail : '';
          return (
            <li key={name} className={css.box}>
              <div className={css.svgBox}>
                <SvgIcon icon={name} />
              </div>
              <span>
                {detailValue}&nbsp;{name}
              </span>
            </li>
          );
        })}
    </ul>
  );
};
