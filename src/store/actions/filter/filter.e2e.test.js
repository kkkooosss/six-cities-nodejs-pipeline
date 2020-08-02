import ActionCreator, {Actions} from './filter';

describe(`Filter action creator work correctly`, () => {

  it(`Action creator for selectCity returns correct action`, () => {
    expect(ActionCreator.selectCity(`Amsterdam`)).toEqual({
      type: Actions.selectCity,
      payload: `Amsterdam`
    });
  });

  it(`Action creator for selectFilter returns correct action`, () => {
    expect(ActionCreator.selectFilter(`Popular`)).toEqual({
      type: Actions.selectFilter,
      payload: `Popular`
    });
  });

});
