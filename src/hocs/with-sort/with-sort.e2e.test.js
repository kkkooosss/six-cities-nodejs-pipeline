import React from 'react';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {withSort} from './with-sort.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`withSort hoc e2e test`, () => {

  const MockComponent = () => <div />;
  const MockComponentWrapped = withSort(MockComponent);
  const wrapper = Enzyme.shallow(<MockComponentWrapped selectedFilter={`Popular`} />);

  it(`intial state set correctly`, () => {
    expect(wrapper.state(`isOpen`)).toBe(false);
  });

  it(`isActive changes correctly to true`, () => {
    wrapper.instance()._handleListClick();
    expect(wrapper.state(`isOpen`)).toBe(true);
  });

  it(`isActive changes correctly to false`, () => {
    wrapper.instance()._handleListClick();
    expect(wrapper.state(`isOpen`)).toBe(false);
  });

});
