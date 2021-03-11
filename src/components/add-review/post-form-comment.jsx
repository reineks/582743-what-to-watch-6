import React, {useState} from 'react';
import {STARS_COUNT} from "../../consts";

const PostCommentForm = () => {
  const [reviewForm, setReviewForm] = useState({
    rating: `8`,
    reviewText: ``
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleRatingChange = (evt) => {
    const {name, value} = evt.target;
    setReviewForm({...reviewForm, [name]: value});
  };

  const handleReviewTextChange = (evt) => {
    setReviewForm({...reviewForm, reviewText: evt.target.value});
  };

  const createRadioButtonStars = (count = STARS_COUNT) => {
    const radioButtonStars = new Array(count).fill(null);

    return radioButtonStars.map((_, index) => {
      const serialId = (index + 1).toString();
      return <React.Fragment key={serialId}>
        <input className="rating__input" id={`star-${serialId}`} type="radio" name="rating" value={serialId} checked={rating === serialId} onChange={handleRatingChange} />
        <label className="rating__label" htmlFor={`star-${serialId}`}>Rating {serialId}</label>
      </React.Fragment>;
    }
    );
  };

  const {rating, reviewText} = reviewForm;

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {createRadioButtonStars()}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleReviewTextChange} value={reviewText}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
};

export default PostCommentForm;
