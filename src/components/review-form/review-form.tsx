import * as React from 'react';

import {connect} from 'react-redux';
import {compose} from 'recompose';
import {getSendingFlag, getErrorFlag} from '../../store/reducers/review/selectors';
import {ratingTitles} from '../../helpers/constants';
import ReviewOperation from '../../store/operations/review/review';
import ActionCreator from '../../store/actions/review/review';
import withFormValidation from '../../hocs/with-form-validation/with-form-validation';

interface Props {
  offerId: number;
  rating: number;
  sending: boolean;
  error: boolean;
  text: string;
  isRatingValid: boolean;
  isTextValid: boolean;
  onRatingChange: () => void;
  onTextChange: () => void;
  onSetSendingFlag: (flag: boolean) => void;
  onSubmitReview: (offerId: number | string, review: {rating: number; text: string}) => void;
}

class ReviewForm extends React.PureComponent<Props, {}> {
  private _formRef;
  private _submitRef;
  private _textRef;

  constructor(props) {
    super(props);

    this._formRef = React.createRef();
    this._submitRef = React.createRef();
    this._textRef = React.createRef();

    this._setSubmitAccess = this._setSubmitAccess.bind(this);
    this._setTextAreaAccess = this._setTextAreaAccess.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleFormReset = this._handleFormReset.bind(this);

  }

  componentDidUpdate() {
    this._setSubmitAccess();
    this._setTextAreaAccess();
  }

  _setSubmitAccess() {
    const {isTextValid, isRatingValid} = this.props;
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

  _handleSubmit(evt) {
    const {onSubmitReview, onSetSendingFlag} = this.props;
    const {rating, isRatingValid, text, isTextValid} = this.props;
    const {offerId} = this.props;

    evt.preventDefault();

    if (isRatingValid && isTextValid) {
      onSetSendingFlag(true);
      onSubmitReview(offerId, {rating, text});
      this._handleFormReset();
    }
  }

  render() {
    const {error, onRatingChange, onTextChange} = this.props;
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

          {ratingTitles.map((title, i) => {
            const starsCount = ratingTitles.length - i;
            return (
              <React.Fragment key={title}>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  defaultValue={starsCount}
                  id={`${starsCount}-stars`}
                  type="radio"
                  onChange={onRatingChange}
                />
                <label htmlFor={`${starsCount}-stars`} className="reviews__rating-label form__rating-label" title={title}>
                  <svg className="form__star-image" width={37} height={33}>
                    <use xlinkHref="#icon-star" />
                  </svg>
                </label>
              </React.Fragment>
            );
          })}

        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          defaultValue={``}
          maxLength={300}
          onChange={onTextChange}
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
  error: getErrorFlag(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSetSendingFlag(flag) {
    dispatch(ActionCreator.setSendingFlag(flag));
  },
  onSubmitReview(offerId, reviewData) {
    dispatch(ReviewOperation.submitReview(offerId, reviewData));
  },
});

const withFormValidationAndConnect = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withFormValidation
);

export {ReviewForm};

export default withFormValidationAndConnect(ReviewForm);
