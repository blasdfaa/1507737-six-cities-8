import { OfferInfo } from '../../types/offer';

export const adaptOffersToClient = (offer: OfferInfo): OfferInfo => {
  const adaptedOffer = {
    bedrooms: offer.bedrooms,
    city: {
      ...offer.city,
      location: { ...offer.city.location },
    },
    description: offer.description,
    goods: [...offer.goods],
    host: {
      ...offer.host,
      avatarUrl: offer.host['avatar_url'],
      id: offer.host.id,
      isPro: offer.host['is_pro'],
      name: offer.host.name,
    },
    id: offer.id,
    images: [...offer.images],
    isFavorite: offer['is_favorite'],
    isPremium: offer['is_premium'],
    location: {
      ...offer.location,
    },
    maxAdults: offer['max_adults'],
    previewImage: offer['preview_image'],
    price: offer.price,
    rating: offer.rating,
    title: offer.title,
    type: offer.title,
  };

  return adaptedOffer;
};

export const adaptOffersToServer = (offer: OfferInfo): OfferInfo => {
  const adaptedOffer = {
    bedrooms: offer.bedrooms,
    city: {
      ...offer.city,
      location: { ...offer.city.location },
    },
    description: offer.description,
    goods: [...offer.goods],
    host: {
      ...offer.host,
      'avatar_url': offer.host.avatarUrl,
      id: offer.host.id,
      'is_pro': offer.host.isPro,
      name: offer.host.name,
    },
    id: offer.id,
    images: [...offer.images],
    'is_favorite': offer.isFavorite,
    'is_premium': offer.isPremium,
    location: {
      ...offer.location,
    },
    'max_adults': offer.maxAdults,
    'preview_image': offer.previewImage,
    price: offer.price,
    rating: offer.rating,
    title: offer.title,
    type: offer.title,
  };

  return adaptedOffer;
};
