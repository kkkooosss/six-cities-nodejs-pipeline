import * as React from 'react';
import {reduceCities} from '../../helpers/utils';

interface Props {
  cities: string[];
  selectedCity: string;
  onCitySelect: (city: string) => void;
}

const CitiesList = (props: Props) => {
  const {cities, selectedCity, onCitySelect} = props;

  const reducedCities = reduceCities(cities);

  return (
    <section className="locations container">

      <ul className="locations__list tabs__list">

        {reducedCities.map((city, i) => (
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
