import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {compose} from 'recompose';
import {getSendingFlag, getErrorFlag} from '../../store/reducers/review/selectors.js';
import ReviewOperation from '../../store/operations/review/review.js';
import ActionCreator from '../../store/actions/review/review.js';

const withReviewForm = (Component) => {
  class WithReviewForm extends React.PureComponent {
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

    componentDidUpdate() {
      this._setSubmitAccess();
      this._setTextAreaAccess();
    }

    _handleSubmit(evt) {
      const {onSubmitReview, setSendingFlag} = this.props;
      const {rating, isRatingValid, text, isTextValid} = this.props;
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
          error={error}
          errorStyle={errorStyle}
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
    setSendingFlag: PropTypes.func.isRequired,
    rating: PropTypes.number.isRequired,
    isRatingValid: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    isTextValid: PropTypes.bool.isRequired
  };

  return WithReviewForm;
};

const mapStateToProps = (state) => ({
  sending: getSendingFlag(state),
  error: getErrorFlag(state),
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

export default withReviewFormConnected;
