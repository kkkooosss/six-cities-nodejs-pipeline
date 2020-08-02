import ActionCreator, {Actions} from './review';
import mockReviews from '../../../test-data/reviews';

describe(`Reviews action creator work correctly`, () => {

  it(`Action creator for getReviews returns correct action`, () => {
    expect(ActionCreator.getReviews(mockReviews)).toEqual({
      type: Actions.getReviews,
      payload: mockReviews
    });
  });

  it(`Action creator for setSendingFlag returns correct action`, () => {
    expect(ActionCreator.setSendingFlag(false)).toEqual({
      type: Actions.setSendingFlag,
      payload: false
    });
  });

  it(`Action creator for setErrorFlag returns correct action`, () => {
    expect(ActionCreator.setErrorFlag(false)).toEqual({
      type: Actions.setErrorFlag,
      payload: false
    });
  });

});
