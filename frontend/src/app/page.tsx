'use client';

import React, { useEffect, useState } from 'react';
import { fetchProducts } from '@/lib/api';
import { Product } from '@/lib/types';
import ProductCarousel from '@/components/ProductCarousel';
import ProductFilters from '@/components/ProductFilters';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [selectedPopularity, setSelectedPopularity] = useState<number | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts({
          priceRange: selectedPriceRange || undefined,
          popularityValue: selectedPopularity || undefined
        });
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('There was a problem loading the products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [selectedPriceRange, selectedPopularity]);

  const handlePriceRangeChange = (priceRange: string | null) => {
    setSelectedPriceRange(priceRange);
  };

  const handlePopularityChange = (popularity: number | null) => {
    setSelectedPopularity(popularity);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10">Jewelry Collection</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <ProductFilters 
            selectedPriceRange={selectedPriceRange}
            selectedPopularity={selectedPopularity}
            onPriceRangeChange={handlePriceRangeChange}
            onPopularityChange={handlePopularityChange}
          />
        </div>
        
        <div className="md:col-span-3">
          {loading && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          )}
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error! </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          
          {!loading && !error && products.length === 0 && (
            <div className="text-center text-gray-500 my-10">
              No products found matching your filters.
            </div>
          )}
          
          {!loading && !error && products.length > 0 && (
            <ProductCarousel products={products} />
          )}
        </div>
      </div>
    </div>
  );
} 