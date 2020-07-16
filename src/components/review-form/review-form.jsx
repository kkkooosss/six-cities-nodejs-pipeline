import React from 'react';
import {RATING_TITLES as ratingTitles} from '../../helpers/constants.js';

class ReviewForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      isRatingValid: false,
      text: ``,
      isTextValid: false,
      sendingReview: false
    };

    this.textRef = React.createRef();
    this.submitRef = React.createRef();

    this._handleRatingChange = this._handleRatingChange.bind(this);
    this._handleTextChange = this._handleTextChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._checkRatingValidity = this._checkRatingValidity.bind(this);
    this._checkTextValidity = this._checkTextValidity.bind(this);
  }

  _handleRatingChange(evt) {
    const rating = parseInt(evt.target.value, 10);

    this.setState({
      rating
    });
  }

  _handleTextChange(evt) {
    const text = evt.target.value;

    this.setState({
      text
    });
  }

  _checkRatingValidity() {
    const {rating} = this.state;
    const isRatingValid = rating >= 1 && rating <= 5;

    this.setState({
      isRatingValid
    });
  }

  _checkTextValidity() {
    const {text} = this.state;
    const isTextValid = text.length >= 50 && text.length <= 300;

    this.setState({
      isTextValid
    });
  }

  componentDidUpdate() {
    this._checkRatingValidity();
    this._checkTextValidity();
  }

  _handleSubmit(evt) {
    const {onSendReview} = this.props;
    const {rating, isRatingValid, text, isTextValid} = this.state;

    evt.preventDefault();

    if (isRatingValid && isTextValid) {
      onSendReview({rating, text});
    }

    this.textRef.value = ``;
  }

  render() {

    const {isTextValid, isRatingValid} = this.state;
    const isValid = isRatingValid && isTextValid;

    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this._handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">

          {ratingTitles.map((title, i) =>
            <>
              <input className="form__rating-input visually-hidden" name="rating" defaultValue={5 - i} id={`${5 - i}-stars`} type="radio" onChange={this._handleRatingChange} />
              <label htmlFor={`${5 - i}-stars`} className="reviews__rating-label form__rating-label" title={title}>
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </>
          )}

        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          defaultValue={``}
          ref={this.textRef}
          maxLength={300}
          onChange={this._handleTextChange}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>. Maximum review length can be <b className="reviews__text-amount">300 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>Submit</button>
        </div>
      </form>
    );
  }
}

export default ReviewForm;
