import React, { useState } from 'react';
import Image from 'next/image';
import { Product, ColorOption, ProductWithRating } from '@/lib/types';
import StarRating from './StarRating';
import ColorPicker from './ColorPicker';
import { calculateRating } from '@/lib/api';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState<ColorOption>('yellow');
  
  // Rating calculation - use normalizedPopularityScore if available
  const rating = product.normalizedPopularityScore 
    ? calculateRating(product.normalizedPopularityScore) 
    : calculateRating(product.popularityScore);
  
  // Get image for current color
  const currentImage = product.images[selectedColor];
  
  // Display color names in English
  const colorNames = {
    'yellow': 'Yellow Gold',
    'rose': 'Rose Gold',
    'white': 'White Gold'
  };
  
  const handleColorChange = (color: ColorOption) => {
    setSelectedColor(color);
  };
  
  return (
    <div className="flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-sm">
      <div className="relative w-full h-56 mb-4 bg-gray-50 rounded-lg overflow-hidden">
        {currentImage && (
          <Image 
            src={currentImage}
            alt={`${product.name} - ${selectedColor}`}
            fill
            className="object-cover rounded-lg"
            priority
          />
        )}
      </div>
      
      <h3 className="text-center font-medium text-lg text-gray-800">{product.name}</h3>
      <p className="text-center font-bold text-gray-900 mt-1">${product.price.toFixed(2)} USD</p>
      <p className="text-center text-sm text-gray-600 mt-1">Color: {colorNames[selectedColor]}</p>
      
      <div className="mt-2">
        <StarRating rating={rating} />
      </div>
      
      <ColorPicker 
        selectedColor={selectedColor}
        onColorChange={handleColorChange}
      />
    </div>
  );
};

export default ProductCard; 