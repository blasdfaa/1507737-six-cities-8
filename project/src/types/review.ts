type ReviewAuthor = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type HotelReview = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: ReviewAuthor;
};

export type HotelReviewPost = {
  comment: string;
  rating: number;
};
