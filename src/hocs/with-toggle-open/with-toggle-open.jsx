import React from 'react';

const withToggleOpen = (Component) => {
  class WithToggleOpen extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false
      };

      this._toggleOpen = this._toggleOpen.bind(this);
    }

    _toggleOpen() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      const {isOpen} = this.state;

      return (
        <Component
          {...this.props}
          isOpen={isOpen}
          onToggleOpen={this._toggleOpen}
        />
      );
    }
  }

  return WithToggleOpen;
};


export default withToggleOpen;
