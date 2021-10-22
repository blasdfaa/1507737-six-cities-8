type ApartmentHostType = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

type CityInfoType = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
};

type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferCardType = {
  id: number;
  title: string;
  previewImage: string;
  price: number;
  isPremium: boolean;
  type: string;
  isFavorite: boolean;
  rating: number;
};

export type OfferFullType = OfferCardType & {
  bedrooms: number;
  city: CityInfoType;
  description: string;
  goods: string[];
  host: ApartmentHostType;
  images: string[];
  location: LocationType;
  maxAdults: number;
};
