import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import FilterActionCreator from '../../store/actions/filter/filter.js';
import {FILTERS} from '../../helpers/constants.js';
import {getSelectedFilter} from '../../store/reducers/filter/selectors.js';

const withSort = (Component) => {
  class WithSort extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false
      };

      this.getFilterOptions = this.getFilterOptions.bind(this);
      this._handleListClick = this._handleListClick.bind(this);
    }

    _handleListClick() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    getFilterOptions(selectedFilter, handleClick) {

      return (FILTERS.map((filter, i) => (
        <li
          className={`places__option ${filter === selectedFilter ? `places__option--active` : null}`}
          tabIndex={i}
          key={filter}
          onClick={() => {
            handleClick(filter);
            this._handleListClick();
          }}
        >
          {filter}
        </li>
      )));
    }

    render() {
      const {isOpen} = this.state;
      const {selectedFilter, onFilterSelect} = this.props;

      return (
        <Component
          {...this.props}
          isOpen={isOpen}
          selectedFilter={selectedFilter}
          onFilterSelect={onFilterSelect}
          getFilterOptions={this.getFilterOptions}
          onListClick={this._handleListClick}
        />
      );
    }
  }

  WithSort.propTypes = {
    Component: PropTypes.element,
    selectedFilter: PropTypes.string.isRequired,
    onFilterSelect: PropTypes.func
  };

  return WithSort;
};

const mapStateToProps = (state) => ({
  selectedFilter: getSelectedFilter(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFilterSelect: (offers, filter) => {
    dispatch(FilterActionCreator.selectFilter(offers, filter));
  }
});

const withSortConnected = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withSort
);

export {withSort};

export default withSortConnected;
