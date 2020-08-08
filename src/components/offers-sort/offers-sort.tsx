import * as React from 'react';

import withToggleOpen from '../../hocs/with-toggle-open/with-toggle-open';

import {connect} from 'react-redux';
import {compose} from 'recompose';

import FilterActionCreator from '../../store/actions/filter/filter';
import {filters} from '../../helpers/constants';
import {getSelectedFilter} from '../../store/reducers/filter/selectors';

interface Props {
  isOpen: boolean;
  selectedFilter: string;
  onToggleOpen: () => void;
  onFilterSelect: (filter: string) => void;
}

class OffersSort extends React.PureComponent<Props> {
  constructor(props) {
    super(props);

    this._getFilterOptions = this._getFilterOptions.bind(this);
  }

  _getFilterOptions(selectedFilter, handleClick) {
    const {onToggleOpen} = this.props;

    return (filters.map((filter, i) => (
      <li
        className={`places__option ${filter === selectedFilter ? `places__option--active` : null}`}
        tabIndex={i}
        key={filter}
        onClick={() => {
          handleClick(filter);
          onToggleOpen();
        }}
      >
        {filter}
      </li>
    )));
  }

  render() {
    const {selectedFilter, onFilterSelect, isOpen, onToggleOpen} = this.props;

    return (

      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span
          className="places__sorting-type"
          tabIndex={0}
          style={{userSelect: `none`, outline: `none`}}
          onClick={() => onToggleOpen()}
        >
          {selectedFilter}
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>

        {isOpen ? <ul className="places__options places__options--custom places__options--opened">
          {this._getFilterOptions(selectedFilter, onFilterSelect)}
        </ul> : null}

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedFilter: getSelectedFilter(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFilterSelect: (offers, filter) => {
    dispatch(FilterActionCreator.selectFilter(offers, filter));
  }
});

const withToggleOpenAndConnect = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withToggleOpen
);

export default withToggleOpenAndConnect(OffersSort);
