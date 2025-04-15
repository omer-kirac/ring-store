export interface Product {
  name: string;
  popularityScore: number;
  normalizedPopularityScore: number;
  weight: number;
  price: number;
  images: {
    yellow: string;
    rose: string;
    white: string;
  };
}

export type ColorOption = 'yellow' | 'white' | 'rose';

export interface ProductWithRating extends Product {
  rating: number;
  selectedColor: ColorOption;
} 