import React from 'react';
import { Check } from 'lucide-react';

interface UpgradeOptionProps {
  title: string;
  price: number;
  features: string[];
  onSelect: () => void;
  selected: boolean;
}

export function UpgradeOption({ title, price, features, onSelect, selected }: UpgradeOptionProps) {
  return (
    <div 
      className={`p-2 rounded-lg border cursor-pointer transition-all ${
        selected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
      }`}
      onClick={onSelect}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
            selected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
          }`}>
            {selected && <Check className="w-3 h-3 text-white" />}
          </div>
          <span className="font-medium text-sm text-gray-900">{title}</span>
        </div>
        <span className="text-sm font-medium text-blue-600">{price > 0 ? `+$${price}` : 'Included'}</span>
      </div>
      <div className="mt-1 ml-6 text-xs text-gray-600 grid grid-cols-2 gap-x-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-1">
            <span className="text-blue-500">•</span> {feature}
          </div>
        ))}
      </div>
    </div>
  );
}