interface IReviewHost {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export interface IOfferReview {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: IReviewHost;
}
