export const getRatingValue = (rating: number): string => {
  const result = (rating / 5) * 100;

  return result.toString();
};
