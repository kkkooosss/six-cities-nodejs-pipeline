import * as React from 'react';

interface State {
  isOpen: boolean;
}


const withToggleOpen = (Component) => {

  type P = React.ComponentProps<typeof Component>;

  class WithToggleOpen extends React.PureComponent<P, State> {
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
