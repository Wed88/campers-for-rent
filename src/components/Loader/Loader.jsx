import { Grid } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.container}>
      <Grid
        height="40"
        width="40"
        radius="10"
        color="#475467"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
