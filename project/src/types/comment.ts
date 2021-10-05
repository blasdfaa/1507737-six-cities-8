interface ICommentedUser {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export interface IOfferComment {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: ICommentedUser;
}
