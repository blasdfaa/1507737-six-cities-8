type ReviewHost = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type OfferReview = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: ReviewHost;
};
