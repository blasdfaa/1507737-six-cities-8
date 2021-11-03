import type { ApiHotelData } from '../../types/api';
import type { HotelInfo } from '../../types/hotel';

export const adaptHotelDataToClient = (hotel: ApiHotelData): HotelInfo => (
  {
    bedrooms: hotel.bedrooms,
    city: {
      ...hotel.city,
      location: { ...hotel.city.location },
    },
    description: hotel.description,
    goods: [...hotel.goods],
    host: {
      ...hotel.host,
      avatarUrl: hotel.host['avatar_url'],
      id: hotel.host.id,
      isPro: hotel.host['is_pro'],
      name: hotel.host.name,
    },
    id: hotel.id,
    images: [...hotel.images],
    isFavorite: hotel['is_favorite'],
    isPremium: hotel['is_premium'],
    location: {
      ...hotel.location,
    },
    maxAdults: hotel['max_adults'],
    previewImage: hotel['preview_image'],
    price: hotel.price,
    rating: hotel.rating,
    title: hotel.title,
    type: hotel.title,
  }
);

export const adaptHotelDataToServer = (hotel: HotelInfo): ApiHotelData => (
  {
    bedrooms: hotel.bedrooms,
    city: {
      ...hotel.city,
      location: { ...hotel.city.location },
    },
    description: hotel.description,
    goods: [...hotel.goods],
    host: {
      ...hotel.host,
      'avatar_url': hotel.host.avatarUrl,
      id: hotel.host.id,
      'is_pro': hotel.host.isPro,
      name: hotel.host.name,
    },
    id: hotel.id,
    images: [...hotel.images],
    'is_favorite': hotel.isFavorite,
    'is_premium': hotel.isPremium,
    location: {
      ...hotel.location,
    },
    'max_adults': hotel.maxAdults,
    'preview_image': hotel.previewImage,
    price: hotel.price,
    rating: hotel.rating,
    title: hotel.title,
    type: hotel.title,
  }
);
