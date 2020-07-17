export const Actions = {
  getReviews: `GET_REVIEWS`
};

const ActionCreator = {
  getReviews: (reviews) => {
    return {
      type: Actions.getReviews,
      payload: reviews
    };
  }
};

export default ActionCreator;
