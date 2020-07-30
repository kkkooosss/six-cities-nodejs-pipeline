import React from 'react';
import PropTypes from 'prop-types';

import withSort from '../../hocs/with-sort/with-sort.jsx';

const OffersSort = ({
  isOpen,
  selectedFilter,
  onFilterSelect,
  getFilterOptions,
  handleListClick
}) => (

  <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by </span>
    <span className="places__sorting-type" tabIndex={0} onClick={() => handleListClick()} style={{userSelect: `none`, outline: `none`}}>
      {selectedFilter}
      <svg className="places__sorting-arrow" width={7} height={4}>
        <use xlinkHref="#icon-arrow-select" />
      </svg>
    </span>

    {isOpen ? <ul className="places__options places__options--custom places__options--opened">
      {getFilterOptions(selectedFilter, onFilterSelect)}
    </ul> : null}

    {/* <select className="places__sorting-type" id="places-sorting">
        <option className="places__option" value="popular" selected="">Popular</option>
        <option className="places__option" value="to-high">Price: low to high</option>
        <option className="places__option" value="to-low">Price: high to low</option>
        <option className="places__option" value="top-rated">Top rated first</option>
      </select> */}
  </form>
);

export default withSort(OffersSort);

OffersSort.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  onFilterSelect: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  getFilterOptions: PropTypes.func.isRequired,
  handleListClick: PropTypes.func.isRequired
};
