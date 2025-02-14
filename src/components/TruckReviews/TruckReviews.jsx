import { useSelector } from "react-redux";
import { selectIsLoading, selectTruckItem } from "../../redux/trucks/slice.js";
import { increaseFirstLetter } from "../../helpers/helpers.js";
import StarsRating from "../StarsRating/StarsRating.jsx";
import s from "./TruckReviews.module.css";

const TruckReviews = () => {
  const truck = useSelector(selectTruckItem);
  const isLoading = useSelector(selectIsLoading);

  if (!truck || !truck.reviews || truck.reviews.length === 0)
    return <p>No reviews yet...</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={s.reviewsBox}>
      <ul className={s.reviewsList}>
        {truck.reviews.map((review, index) => (
          <li key={index} className={s.reviewsItem}>
            <div className={s.letter}>
              {review.reviewer_name.trim()[0].toUpperCase()}
            </div>
            <div className={s.nameRating}>
              <h3 className={s.name}>
                {increaseFirstLetter(review.reviewer_name)}
              </h3>
              <StarsRating rating={review.reviewer_rating} />
            </div>
            <p className={s.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TruckReviews;
