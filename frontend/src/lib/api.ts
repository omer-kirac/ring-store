import { Product } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export async function fetchProducts(
  filters?: {
    priceRange?: string; // "300-500", "500-700", "700+"
    popularityValue?: number; // 1, 2, 3, 4, 5
    minPrice?: number;
    maxPrice?: number;
    minPopularity?: number;
    maxPopularity?: number;
  }
): Promise<Product[]> {
  try {
    let url = `${API_URL}/products`;
    
    // Add query parameters if filters exist
    if (filters) {
      const params = new URLSearchParams();
      
      if (filters.priceRange) {
        params.append('priceRange', filters.priceRange);
      }
      
      if (filters.popularityValue) {
        params.append('popularityValue', filters.popularityValue.toString());
      }
      
      if (filters.minPrice) {
        params.append('minPrice', filters.minPrice.toString());
      }
      
      if (filters.maxPrice) {
        params.append('maxPrice', filters.maxPrice.toString());
      }
      
      if (filters.minPopularity) {
        params.append('minPopularity', filters.minPopularity.toString());
      }
      
      if (filters.maxPopularity) {
        params.append('maxPopularity', filters.maxPopularity.toString());
      }
      
      // Add query string to URL if there are parameters
      if (params.toString()) {
        url += `?${params.toString()}`;
      }
    }
    
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export function calculateRating(popularity: number): number {
  // We now use normalizedPopularityScore from backend which is already on a 1-5 scale
  // If it's not available, fall back to the old calculation method
  if (popularity >= 1 && popularity <= 5) {
    return popularity;
  } else {
    // Old calculation method (legacy support)
    // Convert popularity score to a rating out of 5 (with 1 decimal place)
    const rating = (popularity / 100) * 5;
    return parseFloat(rating.toFixed(1));
  }
}

export const PRICE_RANGES = [
  { label: "$300 - $500", value: "300-500" },
  { label: "$500 - $700", value: "500-700" },
  { label: "$700+", value: "700+" }
];

export const POPULARITY_VALUES = [
  { label: "⭐", value: 1 },
  { label: "⭐⭐", value: 2 },
  { label: "⭐⭐⭐", value: 3 },
  { label: "⭐⭐⭐⭐", value: 4 },
  { label: "⭐⭐⭐⭐⭐", value: 5 }
]; 