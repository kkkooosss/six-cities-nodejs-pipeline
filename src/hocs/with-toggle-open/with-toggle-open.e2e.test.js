import * as React from 'react';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withToggleOpen from './with-toggle-open';

Enzyme.configure({adapter: new Adapter()});

describe(`withToggleOpen hoc e2e test`, () => {

  const MockComponent = () => <div />;
  const MockComponentWrapped = withToggleOpen(MockComponent);
  const wrapper = Enzyme.shallow(<MockComponentWrapped />);

  it(`intial state set correctly`, () => {
    expect(wrapper.state(`isOpen`)).toBe(false);
  });

  it(`isActive changes correctly to true`, () => {
    wrapper.instance()._toggleOpen();
    expect(wrapper.state(`isOpen`)).toBe(true);
  });

  it(`isActive changes correctly to false`, () => {
    wrapper.instance()._toggleOpen();
    expect(wrapper.state(`isOpen`)).toBe(false);
  });

});
