import { Review } from '../../type/review';
import './review.css';

type ReviewItemProps = {
  review: Review;
}

function ReviewItem({review}: ReviewItemProps) {
  return (
    <div className="review">
        <p className="review__author">{review.name}</p>
        <p className="review__text">{review.text}</p>
    </div>
  )
}

export default ReviewItem;