export interface IOffer {
  title: string;
  imageUrl: string;
  isFavorite: boolean;
  price: number;
  type: string;
  rating: number;
  category: string;
  variant?: string;
}
