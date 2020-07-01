export const excludeCurrentOffer = (offers, currentOfferId) => offers.filter((item) => item.id !== currentOfferId);

export const reduceOffers = (offers) => offers.length <= 3 ? offers : offers.slice(0, 9);

export const getNearOffers = (offers, currentOfferId) => reduceOffers(excludeCurrentOffer(offers, currentOfferId));

const sortReveiwsByDate = (reviews) => (reviews.sort((a, b) => (new Date(b.date) - new Date(a.date))));

const reduceReviews = (reviews) => reviews.length <= 10 ? reviews : reviews.slice(0, 9);

export const getReviews = (reviews) => reduceReviews(sortReveiwsByDate(reviews));

export const filterOffers = (offers, city) => offers.filter((offer) => offer.city === city);
