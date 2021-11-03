export type ApiHotelData = {
  bedrooms: number;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
  description: string;
  goods: string[];
  host: {
    avatar_url: string;
    id: number;
    is_pro: boolean;
    name: string;
  };
  id: number;
  images: string[];
  is_favorite: boolean;
  is_premium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  max_adults: number;
  preview_image: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type ApiUserInfoData = {
  avatar_url: string;
  email: string;
  id: number;
  is_pro: boolean;
  name: string;
  token: string;
};

export type ApiHotelReviewData = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatar_url: string;
    id: number;
    is_pro: boolean;
    name: string;
  };
};

export type ApiHotelReviewPostData = {
  comment: string;
  rating: number;
};
