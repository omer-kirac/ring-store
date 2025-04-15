import React from 'react';
import { PRICE_RANGES, POPULARITY_VALUES } from '@/lib/api';

interface FiltersProps {
  selectedPriceRange: string | null;
  selectedPopularity: number | null;
  onPriceRangeChange: (priceRange: string | null) => void;
  onPopularityChange: (popularity: number | null) => void;
}

const ProductFilters: React.FC<FiltersProps> = ({
  selectedPriceRange,
  selectedPopularity,
  onPriceRangeChange,
  onPopularityChange
}) => {
  const clearFilters = () => {
    onPriceRangeChange(null);
    onPopularityChange(null);
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-sm mb-6">
      <div className="mb-4">
        <h3 className="font-medium text-gray-700 mb-2">Price Range</h3>
        <div className="space-y-2">
          {PRICE_RANGES.map((range) => (
            <div key={range.value} className="flex items-center">
              <input
                type="radio"
                id={`price-${range.value}`}
                name="price-range"
                className="mr-2"
                checked={selectedPriceRange === range.value}
                onChange={() => onPriceRangeChange(range.value)}
              />
              <label htmlFor={`price-${range.value}`} className="text-sm text-gray-600">
                {range.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-medium text-gray-700 mb-2">Popularity</h3>
        <div className="space-y-2">
          {POPULARITY_VALUES.map((pop) => (
            <div key={pop.value} className="flex items-center">
              <input
                type="radio"
                id={`popularity-${pop.value}`}
                name="popularity"
                className="mr-2"
                checked={selectedPopularity === pop.value}
                onChange={() => onPopularityChange(pop.value)}
              />
              <label htmlFor={`popularity-${pop.value}`} className="text-sm text-gray-600">
                {pop.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={clearFilters}
        className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700 transition duration-150"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default ProductFilters; 