import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {compose} from 'recompose';
import ReviewOperation from '../../store/operations/review/review.js';
import {getSendingFlag, getErrorFlag} from '../../store/reducers/review/selectors.js';
import ActionCreator from '../../store/actions/review/review.js';

const withReviewForm = (Component) => {
  class WithReviewForm extends React.PureComponent {
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
        <Component
          {...this.props}
          errorStyle={errorStyle}
          error={error}
          onRatingChange={this._handleRatingChange}
          onTextChange={this._handleTextChange}
          onSubmit={this._handleSubmit}
          formRef={this._formRef}
          textRef={this._textRef}
          submitRef={this._submitRef}
        />
      );
    }
  }

  WithReviewForm.propTypes = {
    Component: PropTypes.element,
    onSubmitReview: PropTypes.func.isRequired,
    offerId: PropTypes.number.isRequired,
    sending: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    setSendingFlag: PropTypes.func.isRequired
  };

  return WithReviewForm;
};

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

const withReviewFormConnected = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withReviewForm
);

export {withReviewForm};

export default withReviewFormConnected;
