import { SvgIcon } from '../SvgIcon/SvgIcon';
import css from './CamperModalReview.module.css';

export const CamperModalReview = ({ reviews }) => {
  return (
    <ul className={css.container}>
      {reviews.map(review => {
        return (
          <li className={css.box} key={review.reviewer_name}>
            <div className={css.header}>
              <span className={css.avatar}>{review.reviewer_name[0]}</span>
              <div className={css.infoBox}>
                <div className={css.name}>{review.reviewer_name}</div>
                <ul className={css.list}>
                  {[...Array(review.reviewer_rating).keys()].map(i => {
                    return (
                      <li className={css.svgBox} key={i}>
                        <SvgIcon icon={'star'} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <p>{review.comment}</p>
          </li>
        );
      })}
    </ul>
  );
};
