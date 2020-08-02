import * as React from 'react';

interface State {
  rating: number;
  text: string;
  isRatingValid: boolean;
  isTextValid: boolean;
}

const withFormValidation = (Component) => {
  type P = React.ComponentProps<typeof Component>;

  class WithFormValidation extends React.PureComponent<P, State> {
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

  return WithFormValidation;
};

export default withFormValidation;
