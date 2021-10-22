type ReviewHostType = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type OfferReviewType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: ReviewHostType;
};
