import { SvgIcon } from '../SvgIcon/SvgIcon';

export const CamperModalReview = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => {
        return (
          <li key={review.reviewer_name}>
            <div>
              <div>
                <span>{review.reviewer_name[0]}</span>
                <div>
                  <div>{review.reviewer_name}</div>
                  <ul>
                    {[...Array(review.reviewer_rating).keys()].map(i => {
                      return (
                        <li key={i}>
                          <SvgIcon icon={'star'} />
                        </li>
                      );
                    })}
                  </ul>
                  {/* <RatingBar rating={review.reviewer_rating} /> */}
                </div>
              </div>
              <p>{review.comment}</p>
            </div>
            {/* <ModalReviewItem review={review} /> */}
          </li>
        );
      })}
    </ul>
  );
};
