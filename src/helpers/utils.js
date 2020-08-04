import {Months, Filters} from './constants';

export const excludeCurrentOffer = (offers, currentOfferId) => offers.filter((item) => item.id !== currentOfferId);

export const reduceOffers = (offers) => offers.length <= 3 ? offers : offers.slice(0, 10);

const sortReveiwsByDate = (reviews) => (reviews.sort((a, b) => (new Date(b.date) - new Date(a.date))));

const reduceReviews = (reviews) => reviews.length <= 10 ? reviews : reviews.slice(0, 10);

export const getReviews = (reviews) => reduceReviews(sortReveiwsByDate(reviews));

export const reduceCities = (cities) => cities.length >= 6 ? cities : cities.slice(0, 6);

export const sortByPrice = (offers) => (offers.sort((a, b) => b.price - a.price));

export const sortByPriceReverse = (offers) => sortByPrice(offers).reverse();

export const sortByRating = (offers) => (offers.sort((a, b) => b.rating - a.rating));

export const filterOffersOrder = (offers, filter) => {
  const offersToFilter = offers.slice();
  switch (filter) {
    case Filters.popular:
      return offers;
    case Filters.priceLowToHight:
      return sortByPrice(offersToFilter);
    case Filters.priceHightToLow:
      return sortByPriceReverse(offersToFilter);
    case Filters.topRatedFirst:
      return sortByRating(offersToFilter);
    default:
      return offers;
  }
};

export const extend = (a, b) => Object.assign({}, a, b);

export const getRatingInPercents = (rating) => `${(Math.round(rating)) * 20}%`;

export const convertDate = (date) => {
  const dateObject = new Date(date);
  const day = dateObject.getDate();
  const month = Months[dateObject.getMonth()];
  const year = dateObject.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const formatOffer = (offer) => (
  {
    id: offer.id,
    city: offer.city,
    title: offer.title,
    type: offer.type,
    isPremium: offer.is_premium,
    isFavorite: offer.is_favorite,
    price: offer.price,
    location: offer.location,
    previewImage: offer.preview_image,
    images: offer.images,
    host: {
      id: offer.host.id,
      isPro: offer.host.is_pro,
      name: offer.host.name,
      userPic: offer.host.avatar_url
    },
    rating: offer.rating,
    bedrooms: offer.bedrooms,
    capacity: offer.max_adults,
    amenities: offer.goods,
    description: offer.description
  }
);

export const formatOffers = (offers) => offers.map((offer) => formatOffer(offer));

export const formatUser = (user) => ({
  id: user.id,
  email: user.email,
  name: user.name,
  avatarUrl: user.avatar_url,
  isPro: user.is_pro,
});

export const formatReview = (review) => ({
  id: review.id,
  name: review.user.name,
  isPro: review.user.is_pro,
  userPic: review.user.avatar_url,
  rating: review.rating,
  text: review.comment,
  date: review.date
});

export const formatReviews = (reviews) => reviews.map((review) => formatReview(review));
