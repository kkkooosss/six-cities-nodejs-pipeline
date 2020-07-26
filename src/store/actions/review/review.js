export const Actions = {
  getReviews: `GET_REVIEWS`,
  setSendingFlag: `SET_SENDING_FLAG`,
  setErrorFlag: `SET_ERROR_FLAG`,
};

const ActionCreator = {
  getReviews: (reviews) => {
    return {
      type: Actions.getReviews,
      payload: reviews
    };
  },

  setSendingFlag: (flag) => {
    return {
      type: Actions.setSendingFlag,
      payload: flag
    };
  },

  setErrorFlag: (flag) => {
    return {
      type: Actions.setErrorFlag,
      payload: flag
    };
  }

};

export default ActionCreator;
