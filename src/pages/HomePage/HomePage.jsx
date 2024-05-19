import css from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.title}>
        <h1 className={css.text}>Campers Rent</h1>
        <p className={css.text}>choose your camper and travel in comfort</p>
      </div>
    </div>
  );
};
