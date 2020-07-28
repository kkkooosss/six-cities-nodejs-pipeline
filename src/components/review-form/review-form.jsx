import React from 'react';
import PropTypes from 'prop-types';

import {RATING_TITLES as ratingTitles} from '../../helpers/constants.js';
import withReviewForm from '../../hocs/with-review-form/with-review-form.jsx';

const ReviewForm = ({
  errorStyle,
  error,
  onRatingChange,
  onTextChange,
  onSubmit,
  formRef,
  textRef,
  submitRef,
}) => {
  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onSubmit}
      ref={formRef}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      {error ? <div style={errorStyle}>Sorry, can not send your review, please try again later</div> : null}
      <div className="reviews__rating-form form__rating">

        {ratingTitles.map((title, i) =>
          <React.Fragment key={title}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={5 - i}
              id={`${5 - i}-stars`}
              type="radio"
              onChange={onRatingChange}
            />
            <label htmlFor={`${5 - i}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        )}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={``}
        maxLength={300}
        onChange={onTextChange}
        ref={textRef}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>. Maximum review length is <b className="reviews__text-amount">300 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
          ref={submitRef}
        >
            Submit
        </button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  errorStyle: PropTypes.object.isRequired,
  error: PropTypes.bool,
  onRatingChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  formRef: PropTypes.object.isRequired,
  textRef: PropTypes.object.isRequired,
  submitRef: PropTypes.object.isRequired,
};

export {ReviewForm};

export default withReviewForm(ReviewForm);
