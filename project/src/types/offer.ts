import { offerCategories, offerSortOptions } from '../const';

type ApartmentHost = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

type CityInfo = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
};

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferCategory = typeof offerCategories[number];
export type OfferSortOption = typeof offerSortOptions[number];

export type OfferCardInfo = {
  id: number;
  title: string;
  previewImage: string;
  price: number;
  isPremium: boolean;
  type: string;
  isFavorite: boolean;
  rating: number;
};

export type OfferInfo = OfferCardInfo & {
  bedrooms: number;
  city: CityInfo;
  description: string;
  goods: string[];
  host: ApartmentHost;
  images: string[];
  location: Location;
  maxAdults: number;
};
