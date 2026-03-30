import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

const Products = () => {
  // Show only first 4 products on the home page
  const featuredProducts = products.slice(0, 4);

  return (
    <section id="products" className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-navy mb-2 block">Catalog</span>
          <h2 className="text-3xl md:text-4xl">Featured Products</h2>
        </div>
        <div className="flex flex-col items-start md:items-end gap-4">
          <p className="max-w-md text-grey md:text-right">
            A complete range of PVC solutions meeting international standards for quality and durability.
          </p>
          <Link to="/products" className="inline-flex items-center text-sm font-bold text-navy hover:translate-x-1 transition-transform">
            View all products <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <ProductCard id={product.id} title={product.title} icon={product.icon} description={product.description} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
