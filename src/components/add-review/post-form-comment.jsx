import React, {useState, useEffect, useCallback} from 'react';
import {useParams} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import {ReviewPostStatus, ReviewParameter} from "../../consts";
import {getReviewPostStatus} from "../../store/data/selectors";
import {sendReview} from "../../store/data/operations";
import PropTypes from 'prop-types';
import RatingPostForm from "./rating-post-form";
import ReviewTextarea from "./review-textarea";

const PostCommentForm = ({onReviewSubmit}) => {

  const {id} = useParams();
  const [review, setReview] = useState(``);
  const [rating, setRating] = useState(ReviewParameter.DEFAULT_RATING);
  const reviewPostStatus = useSelector(getReviewPostStatus);

  useEffect(() => {
    if (reviewPostStatus === ReviewPostStatus.LOADED) {
      setRating(ReviewParameter.DEFAULT_RATING);
      setReview(``);
    }
  }, [reviewPostStatus]);

  const handleRatingChange = useCallback(
      ({target}) => setRating(target.value),
      [rating]
  );

  const handleCommentChange = useCallback(
      ({target}) => setReview(target.value),
      [review]
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onReviewSubmit(id, rating, review);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <RatingPostForm
          onRatingChange={handleRatingChange}
          disabled={reviewPostStatus === ReviewPostStatus.LOADING}/>

        <div className="add-review__text">
          <ReviewTextarea
            onCommentChange={handleCommentChange}
            disabled={reviewPostStatus === ReviewPostStatus.LOADING}/>

          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={review.length < ReviewParameter.COMMENT_MIN_LENGTH ||
                review.length > ReviewParameter.COMMENT_MAX_LENGTH ||
                reviewPostStatus === ReviewPostStatus.LOADING}>
              Post
            </button>
          </div>

          {reviewPostStatus === ReviewPostStatus.ERROR &&
            <p>There was an error posting your review, please try again.</p>
          }

        </div>
      </form>
    </div>
  );
};

PostCommentForm.propTypes = {
  onReviewSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onReviewSubmit: sendReview
};

export {PostCommentForm};
export default connect(null, mapDispatchToProps)(PostCommentForm);
