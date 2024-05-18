import icons from '../../icons/sprite.svg';
import css from './SvgIcon.module.css';

export const SvgIcon = ({ icon }) => {
  return (
    <svg className={css.container}>
      <use href={`${icons}#${icon}`} />
    </svg>
  );
};
