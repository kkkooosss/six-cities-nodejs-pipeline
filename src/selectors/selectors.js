export const excludeCurrentOffer = (offers, currentOfferId) => offers.filter((item) => item.id !== currentOfferId);

export const reduceOffers = (offers) => offers.length <= 3 ? offers : offers.slice(0, 9);

export const getNearOffers = (offers, currentOfferId) => reduceOffers(excludeCurrentOffer(offers, currentOfferId));

const sortReveiwsByDate = (reviews) => (reviews.sort((a, b) => (new Date(b.date) - new Date(a.date))));

const reduceReviews = (reviews) => reviews.length <= 10 ? reviews : reviews.slice(0, 9);

export const getReviews = (reviews) => reduceReviews(sortReveiwsByDate(reviews));

export const filterOffers = (offers, city) => offers.filter((offer) => offer.city === city);

export const reduceCities = (cities) => cities.length >= 6 ? cities : cities.slice(0, 6);

export const sortByPrice = (offers) => (offers.sort((a, b) => b.price - a.price));

export const sortByPriceReverse = (offers) => (offers.sort((a, b) => b.price - a.price)).reverse();

export const sortByRating = (offers) => (offers.sort((a, b) => b.rating - a.rating));
