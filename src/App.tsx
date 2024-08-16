import { useState } from "react";
import ReviewwForm from "./components/review-form/ReviewForm";
import ReviewsList from "./components/review-list/ReviewList";
import  reviews from "./data/data.json";

function App() {
  const [reviewsData, setReviewsData] = useState(reviews.reviews);

  return (
    <main>
      <ReviewsList reviews={reviewsData}/>
      <ReviewwForm reviews={reviewsData} onSubmitData={setReviewsData} />
    </main>
  )
}

export default App
