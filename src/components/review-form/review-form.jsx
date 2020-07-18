import React from 'react';
import PropTypes from 'prop-types';

import {RATING_TITLES as ratingTitles} from '../../helpers/constants.js';
import {connect} from 'react-redux';
import ReviewOperation from '../../store/operations/review/review.js';
import OfferTypes from '../../types/offer.js';
import {getSendingFlag, getErrorFlag} from '../../store/reducers/review/selectors.js';
import ActionCreator from '../../store/actions/review/review.js';

class ReviewForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      text: ``,
      isRatingValid: false,
      isTextValid: false
    };

    this._formRef = React.createRef();
    this._submitRef = React.createRef();
    this._textRef = React.createRef();

    this._handleRatingChange = this._handleRatingChange.bind(this);
    this._handleTextChange = this._handleTextChange.bind(this);
    this._checkRatingValidity = this._checkRatingValidity.bind(this);
    this._checkTextValidity = this._checkTextValidity.bind(this);

    this._setSubmitAccess = this._setSubmitAccess.bind(this);
    this._setTextAreaAccess = this._setTextAreaAccess.bind(this);

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleFormReset = this._handleFormReset.bind(this);
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

  _setSubmitAccess() {
    const {isTextValid, isRatingValid} = this.state;
    const isValid = isRatingValid && isTextValid;
    const submitButton = this._submitRef.current;
    const {sending} = this.props;

    if (!isValid || sending) {
      submitButton.setAttribute(`disabled`, `disabled`);
    } else {
      submitButton.removeAttribute(`disabled`);
    }
  }

  _setTextAreaAccess() {
    const {sending} = this.props;
    const textArea = this._textRef.current;

    if (sending) {
      textArea.setAttribute(`disabled`, `disabled`);
    } else {
      textArea.removeAttribute(`disabled`);
    }
  }

  _handleFormReset() {
    const form = this._formRef.current;
    const {error, sending} = this.props;

    if (sending && !error) {
      form.reset();
    }
  }

  componentDidUpdate() {
    this._checkRatingValidity();
    this._checkTextValidity();
    this._setSubmitAccess();
    this._setTextAreaAccess();

  }

  _handleSubmit(evt) {
    const {onSubmitReview, setSendingFlag} = this.props;
    const {rating, isRatingValid, text, isTextValid} = this.state;
    const {offerId} = this.props;

    evt.preventDefault();

    if (isRatingValid && isTextValid) {
      setSendingFlag(true);
      onSubmitReview(offerId, {rating, text});
      this._handleFormReset();
    }

  }

  render() {
    const {error} = this.props;
    const errorStyle = {color: `#BF616A`, paddingBottom: `5px`};

    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={this._handleSubmit}
        ref={this._formRef}
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
                onChange={this._handleRatingChange}
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
          onChange={this._handleTextChange}
          ref={this._textRef}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>. Maximum review length is <b className="reviews__text-amount">300 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled
            ref={this._submitRef}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  sending: getSendingFlag(state),
  error: getErrorFlag(state)
});

const mapDispatchToProps = (dispatch) => ({
  setSendingFlag(flag) {
    dispatch(ActionCreator.setSendingFlag(flag));
  },
  onSubmitReview(offerId, reviewData) {
    dispatch(ReviewOperation.submitReview(offerId, reviewData));
  },
});

ReviewForm.propTypes = {
  onSubmitReview: PropTypes.func.isRequired,
  offer: OfferTypes.isRequired,
  sending: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  setSendingFlag: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
