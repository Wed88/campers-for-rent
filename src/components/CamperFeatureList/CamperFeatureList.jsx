import { SvgIcon } from '../SvgIcon/SvgIcon';

export const CamperFeatureList = ({ features }) => {
  return (
    <ul>
      {Object.keys(features)
        .filter(name => features[name])
        .map(name => {
          const detail = features[name];
          const detailValue =
            detail && typeof detail === 'number' && detail > 1 ? detail : '';
          return (
            <li key={name}>
              <div>
                <SvgIcon icon={name} />
              </div>
              <span>
                {detailValue}&nbsp;{detail}
              </span>
            </li>
          );
        })}
    </ul>
  );
};
