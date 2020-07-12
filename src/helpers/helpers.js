export const extend = (a, b) => Object.assign({}, a, b);

export const getRatingInPercents = (rating) => `${(Math.round(rating)) * 20}%`;

const MONTH_MAP = {
  1: `January`,
  2: `February`,
  3: `March`,
  4: `April`,
  5: `May`,
  6: `June`,
  7: `July`,
  8: `August`,
  9: `September`,
  10: `October`,
  11: `November`,
  12: `December`
};

export const convertDate = (date) => {
  const dateObject = new Date(date);
  const day = dateObject.getDay();
  const month = MONTH_MAP[dateObject.getMonth()];
  const year = dateObject.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const FILTERS_MAP = {
  popular: `Popular`,
  priceLowToHight: `Price: low to high`,
  priceHightToLow: `Price: high to low`,
  topRatedFirst: `Top rated first`
};

export const formatOffer = (offer) => (
  {
    id: offer.id,
    city: offer.city,
    title: offer.title,
    type: offer.type,
    isPremium: offer.is_premium,
    isFavourite: offer.is_favourite,
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
