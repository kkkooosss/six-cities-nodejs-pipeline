import React from 'react';
import PropTypes from 'prop-types';

const CitiesList = ({cities, selectedCity, onCitySelect}) => {

  return (
    <section className="locations container">

      <ul className="locations__list tabs__list">

        {cities.map((city, i) => (
          <li className="locations__item" key={`city-${i}`}>
            <a href="#"
              className={`locations__item-link tabs__item ${city === selectedCity ? `tabs__item--active` : null}`}
              onClick={(evt) => {
                evt.preventDefault();
                onCitySelect(city);
              }}>
              <span>{city}</span>
            </a>
          </li>
        ))}

      </ul>

    </section>
  );
};

export default CitiesList;

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired,
  onCitySelect: PropTypes.func
};
