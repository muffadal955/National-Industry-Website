import React from 'react';
import { ChevronRight, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, icon: Icon, description }) => (
  <div className="bg-white border border-gray-100 p-8 hover:border-navy transition-all duration-300 group">
    <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-sm text-gray-500 mb-6 leading-relaxed">
      {description}
    </p>
    <Link to={`/product/${id}`} className="flex items-center text-sm font-bold text-navy hover:translate-x-1 transition-transform">
      View more <ChevronRight size={16} className="ml-1" />
    </Link>
  </div>
);

export default ProductCard;
