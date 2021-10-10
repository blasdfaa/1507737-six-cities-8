interface IApartmentHost {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

interface ICityInfo {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
}

interface ILocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface IOfferCard {
  id: number;
  title: string;
  previewImage: string;
  price: number;
  isPremium: boolean;
  type: string;
  isFavorite: boolean;
  rating: number;
}

export interface IOfferFull extends IOfferCard {
  bedrooms: number;
  city: ICityInfo;
  description: string;
  goods: string[];
  host: IApartmentHost;
  id: number;
  images: string[];
  location: ILocation;
  maxAdults: number;
}
