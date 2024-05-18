import icons from '../../icons/sprite.svg';

export const SvgIcon = ({ icon }) => {
  return (
    <svg>
      <use href={`${icons}#${icon}`} />
    </svg>
  );
};
