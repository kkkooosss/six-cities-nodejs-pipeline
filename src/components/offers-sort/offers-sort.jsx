import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/reducer.js';
import {FILTERS} from '../../helpers/constants.js';

class OffersSort extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  handleListClick() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  _getFilterOptions(selectedFilter, handleClick) {
    return (FILTERS.map((filter, i) => (
      <li
        className={`places__option ${filter === selectedFilter ? `places__option--active` : null}`}
        tabIndex={i}
        key={filter}
        onClick={() => handleClick(filter)}
      >
        {filter}
      </li>
    )));
  }

  render() {
    const {isOpen} = this.state;
    const {selectedFilter, onFilterSelect} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0} onClick={() => this.handleListClick()}>
          {selectedFilter}
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>

        {isOpen ? <ul className="places__options places__options--custom places__options--opened">
          {this._getFilterOptions(selectedFilter, onFilterSelect)}
        </ul> : null}

        {/* <select className="places__sorting-type" id="places-sorting">
        <option className="places__option" value="popular" selected="">Popular</option>
        <option className="places__option" value="to-high">Price: low to high</option>
        <option className="places__option" value="to-low">Price: high to low</option>
        <option className="places__option" value="top-rated">Top rated first</option>
      </select> */}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedFilter: state.selectedFilter
});

const mapDispatchToProps = (dispatch) => ({
  onFilterSelect: (offers, filter) => {
    dispatch(ActionCreator.selectFilter(offers, filter));
  }
});

export {OffersSort};
export default connect(mapStateToProps, mapDispatchToProps)(OffersSort);

OffersSort.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  onFilterSelect: PropTypes.func
};
