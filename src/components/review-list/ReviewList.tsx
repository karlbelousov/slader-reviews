import { useEffect, useState } from "react";
import { Review } from "../../type/review";
import ReviewItem from "../review-item/ReviewItem";
import './reviews-list.css';

type ReviewListProps = {
    reviews: Review[];
  }

function ReviewsList({reviews}: ReviewListProps) {
    const [activeReviewIndex, setActiveReviewIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (activeReviewIndex === reviews.length - 1) {
                setActiveReviewIndex(0);
            } else {
                setActiveReviewIndex(activeReviewIndex + 1);
            }
        }, 5000)

        return () => clearInterval(timer);
    }, [activeReviewIndex, reviews.length])

    const handlePrevButtonClick = () => {
      if (activeReviewIndex === 0) {
        setActiveReviewIndex(reviews.length - 1);
      }
      setActiveReviewIndex((prev) => prev - 1);
    }

    const handleNextButtonClick = () => {
        if (activeReviewIndex === reviews.length - 1) {
            setActiveReviewIndex(0);
        }
        setActiveReviewIndex((prev) => prev + 1);
    }

    return (
        <div className="reviews-list">
          <button className="button button-prev" onClick={handlePrevButtonClick}>Назад</button>
          {reviews && reviews.length > 0 && (
            <ReviewItem review={reviews[activeReviewIndex]} />
          )}
          {!reviews && (
            <div>Отзывов нет. Добавьте первый</div>
          )}
          <button className="button button-next" onClick={handleNextButtonClick} >Вперед</button>
        </div>
    )
}

export default ReviewsList;