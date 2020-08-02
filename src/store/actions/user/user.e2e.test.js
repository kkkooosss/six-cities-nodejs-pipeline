import ActionCreator, {Actions} from './user';
import USER from '../../../test-data/user';

describe(`User action creator work correctly`, () => {

  it(`Action creator for setAuthStatus returns correct action`, () => {
    expect(ActionCreator.setAuthStatus(`AUTH`)).toEqual({
      type: Actions.setAuthStatus,
      payload: `AUTH`
    });
  });

  it(`Action creator for setSendingFlag returns correct action`, () => {
    expect(ActionCreator.setUser(USER)).toEqual({
      type: Actions.setUser,
      payload: USER
    });
  });

});
