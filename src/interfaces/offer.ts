export default interface Offer {
  id: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number
    }
  };
  title: string;
  type: string;
  isPremium: boolean;
  isFavorite: boolean;
  price: number;
  location: {
    latitude: number;
    longitude: number;
    zoom: number
  };
  previewImage: string;
  images: string[];
  host: {
    id: number;
    isPro: boolean;
    name: string;
    userPic: string
  };
  rating: number;
  bedrooms: number;
  capacity: number;
  amenities: string[];
  description: string
}
