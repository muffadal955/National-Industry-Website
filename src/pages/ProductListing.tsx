import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

const ProductListing = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  const initialCat = queryParams.get('cat') || null;

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCat);
  const [isFilterOpen, setIsFilterOpen] = useState(!!initialCat);

  // Update search query and category when URL changes
  useEffect(() => {
    setSearchQuery(initialQuery);
    setSelectedCategory(initialCat);
    if (initialCat) setIsFilterOpen(true);
  }, [initialQuery, initialCat]);

  // Extract unique categories from product titles for filtering
  // In a real app, products would have a 'category' field. 
  // For now, we'll derive them or just use a static list based on our data.
  const categories = ['Pressure', 'Drainage', 'Electrical', 'Agricultural'];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        !selectedCategory || product.title.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="section-container py-12 md:py-16">
          <span className="text-xs font-bold uppercase tracking-widest text-navy mb-4 block">Our Catalog</span>
          <h1 className="text-4xl md:text-6xl font-black text-navy tracking-tighter mb-8">
            All Products
          </h1>
          
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 focus:border-navy focus:bg-white outline-none transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-navy"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center justify-center gap-2 px-8 py-4 border transition-all ${isFilterOpen ? 'bg-navy text-white border-navy' : 'bg-white text-navy border-gray-100 hover:border-navy'}`}
            >
              <SlidersHorizontal size={20} />
              <span className="font-bold uppercase text-sm tracking-tight">Filters</span>
            </button>
          </div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-8 flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-6 py-2 text-sm font-bold uppercase tracking-tight border transition-all ${!selectedCategory ? 'bg-navy text-white border-navy' : 'bg-white text-navy border-gray-100 hover:border-navy'}`}
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-6 py-2 text-sm font-bold uppercase tracking-tight border transition-all ${selectedCategory === cat ? 'bg-navy text-white border-navy' : 'bg-white text-navy border-gray-100 hover:border-navy'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Results Section */}
      <section className="section-container py-12 md:py-20">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
              >
                <ProductCard 
                  id={product.id} 
                  title={product.title} 
                  icon={product.icon} 
                  description={product.description} 
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6 text-gray-400">
              <Search size={32} />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-2">No products found</h3>
            <p className="text-grey mb-8">Try adjusting your search or filters to find what you're looking for.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
              }}
              className="btn-primary"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductListing;
