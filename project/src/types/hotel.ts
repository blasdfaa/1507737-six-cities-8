import { HotelCategories, HotelSortOptions } from '../const';

type ApartmentHost = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type LocationCity = {
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

export type HotelCategory = typeof HotelCategories[number];
export type HotelSortOption = typeof HotelSortOptions[number];

export type HotelInfo = {
  id: number;
  title: string;
  previewImage: string;
  price: number;
  isPremium: boolean;
  type: string;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  city: LocationCity;
  description: string;
  goods: string[];
  host: ApartmentHost;
  images: string[];
  location: Location;
  maxAdults: number;
};
