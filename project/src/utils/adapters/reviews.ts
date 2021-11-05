import type { ApiHotelReviewData } from '../../types/api';
import type { HotelReview } from '../../types/review';

export const adaptHotelReviewsToClient = (review: ApiHotelReviewData): HotelReview => ({
  comment: review.comment,
  date: review.date !== null ? new Date(review.date).toISOString() : review.date,
  id: review.id,
  rating: review.rating,
  user: {
    avatarUrl: review.user['avatar_url'],
    id: review.user.id,
    isPro: review.user['is_pro'],
    name: review.user.name,
  },
});
