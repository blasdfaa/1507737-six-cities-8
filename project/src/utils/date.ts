import dayjs from 'dayjs';

import { HotelReview } from '../types/review';

export const formatReviewPostDate = (date: string): string => dayjs(date).format('MMMM YYYY');
export const sortDateFromNewToOld = (reviewA: HotelReview, reviewB: HotelReview): number =>
  Number(dayjs(reviewB.date)) - Number(dayjs(reviewA.date));
