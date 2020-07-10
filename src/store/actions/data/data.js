export const Actions = {
  getOffers: `GET_OFFERS`,
};

const ActionCreator = {

  getOffers: (offers) => ({
    type: Actions.getOffers,
    payload: offers
  }),

};

export default ActionCreator;
