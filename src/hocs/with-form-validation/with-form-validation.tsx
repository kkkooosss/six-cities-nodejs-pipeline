import React from 'react';
import PropTypes from 'prop-types';

const withFormValidation = (Component) => {
  class WithFormValidation extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 0,
        text: ``,
        isRatingValid: false,
        isTextValid: false
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleTextChange = this._handleTextChange.bind(this);
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

    _checkTextValidity() {
      const {text} = this.state;
      const isTextValid = text.length >= 50 && text.length <= 300;

      this.setState({
        isTextValid
      });
    }

    _checkRatingValidity() {
      const {rating} = this.state;
      const isRatingValid = rating >= 1 && rating <= 5;

      this.setState({
        isRatingValid
      });
    }

    componentDidUpdate() {
      this._checkRatingValidity();
      this._checkTextValidity();
    }

    render() {
      return (
        <Component
          {...this.props}
          rating={this.state.rating}
          text={this.state.text}
          isRatingValid={this.state.isRatingValid}
          isTextValid={this.state.isTextValid}
          onCheckRatingValidity={this._checkRatingValidity}
          onCheckTextValidity={this._checkTextValidity}
          onTextChange={this._handleTextChange}
          onRatingChange={this._handleRatingChange}
        />
      );
    }

  }

  WithFormValidation.propTypes = {
    Component: PropTypes.element,
  };

  return WithFormValidation;
};

export default withFormValidation;
