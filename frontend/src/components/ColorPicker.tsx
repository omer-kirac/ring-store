import React from 'react';
import { ColorOption } from '@/lib/types';

interface ColorPickerProps {
  selectedColor: ColorOption;
  onColorChange: (color: ColorOption) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ 
  selectedColor, 
  onColorChange 
}) => {
  const colors: { id: ColorOption; className: string; label: string }[] = [
    { id: 'yellow', className: 'bg-yellow-400', label: 'Sarı Altın' },
    { id: 'white', className: 'bg-gray-200', label: 'Beyaz Altın' },
    { id: 'rose', className: 'bg-pink-300', label: 'Rose Altın' },
  ];

  return (
    <div className="flex space-x-2 items-center mt-3">
      {colors.map((color) => (
        <button
          key={color.id}
          onClick={() => onColorChange(color.id)}
          className={`w-6 h-6 rounded-full ${color.className} transition-all duration-200 flex items-center justify-center ${
            selectedColor === color.id
              ? 'ring-2 ring-offset-2 ring-gray-400'
              : ''
          }`}
          aria-label={`Renk seç: ${color.label}`}
          title={color.label}
        >
          {selectedColor === color.id && (
            <span className="text-xs text-black">✓</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default ColorPicker; 