import dayjs from 'dayjs';

export const formatReviewPostDate = (date: string): string => dayjs(date).format('MMMM YYYY');
