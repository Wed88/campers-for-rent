import { SvgIcon } from '../SvgIcon/SvgIcon';
import { useDispatch } from 'react-redux';
import { addToolsFilter, removeToolsFilter } from '../../redux/slice';

export const CatalogFilterItem = ({ name, icon, nameValue }) => {
  const dispatch = useDispatch();

  const updateStatus = filter => {
    if (filter.checked) {
      dispatch(addToolsFilter(filter.id));
    } else {
      dispatch(removeToolsFilter(filter.id));
    }
  };
  return (
    <li>
      <input
        id={name}
        type="checkbox"
        onChange={evt => updateStatus(evt.target)}
        hidden
      />
      <label htmlFor={name}>
        <div>
          <SvgIcon icon={icon} />
        </div>
        {nameValue}
      </label>
    </li>
  );
};
