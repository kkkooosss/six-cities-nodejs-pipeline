import ActionCreator, {ActionTypes} from './filter';

describe(`Filter action creator work correctly`, () => {

  it(`Action creator for selectCity returns correct action`, () => {
    expect(ActionCreator.selectCity(`Amsterdam`)).toEqual({
      type: ActionTypes.SELECT_CITY,
      payload: `Amsterdam`
    });
  });

  it(`Action creator for selectFilter returns correct action`, () => {
    expect(ActionCreator.selectFilter(`Popular`)).toEqual({
      type: ActionTypes.SELECT_FILTER,
      payload: `Popular`
    });
  });

});
