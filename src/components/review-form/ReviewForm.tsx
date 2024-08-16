import { ChangeEvent, FormEvent, useState } from 'react';
import './review-form.css';
import { Review } from '../../type/review';

type ReviewFormProps = {
  reviews: Review[];
  onSubmitData: (review: Review) => void;
}

function ReviewwForm({reviews, onSubmitData}: ReviewFormProps) {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');

    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = {
        id: (reviews.length - 1) + 1,
        name: name,
        text: review
      }
      onSubmitData([...reviews, data]);
      setName('');
      setReview('');

      //запрос на добаиление отзыва через api
      fetch("https://example.org/post", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        }
      });

    }

    const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    };

    const handlereviewInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setReview(e.target.value);
    };

    return (
        <form className='review-form' onSubmit={handleSubmitForm}>
          <h2 className='review-form__title'>Оставте ваш отзыв</h2>
          <div className='review-form__field-group'>
            <label className='review-form__label' htmlFor='name'>Имя:</label>
            <input 
              className='review-form__input'
              id='name'
              value={name}
              onChange={handleNameInputChange}
              required 
            />
          </div>
          <div className='review-form__field-group'>
            <label className='review-form__label' htmlFor='review'>Отзыв:</label>
            <textarea 
              className='review-form__textarea'
              id='review'
              value={review}
              onChange={handlereviewInputChange}
              required 
            />
          </div>
          <button className='review-form__button' type='submit'>Оставить отзыв</button>
        </form>
    )
}

export default ReviewwForm;