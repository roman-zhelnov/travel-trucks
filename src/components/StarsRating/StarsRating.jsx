import { GoStarFill } from "react-icons/go";
import s from "./StarRating.module.css";

const StarsRating = ({ rating }) => {
  const starsRating = rating;
  const blankStars = 5 - starsRating;
  return (
    <div className={s.starsRatingBox}>
      {Array(starsRating)
        .fill()
        .map((_, index) => (
          <GoStarFill key={`full-${index}`} className={s.fullStars} />
        ))}
      {Array(blankStars)
        .fill()
        .map((_, index) => (
          <GoStarFill key={`blank-${index}`} className={s.blankStars} />
        ))}
    </div>
  );
};
export default StarsRating;
