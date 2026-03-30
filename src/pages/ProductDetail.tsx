import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => product.relatedProductIds.includes(p.id));

  return (
    <div className="pt-24">
      {/* Breadcrumbs / Back Button */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="section-container py-6 md:py-8">
          <Link to="/" className="inline-flex items-center text-sm font-bold text-navy hover:text-grey transition-colors mb-4">
            <ChevronLeft size={16} className="mr-1" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-black text-navy tracking-tighter">
            {product.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-auto object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6 bg-navy text-white p-4">
              <product.icon size={32} />
            </div>
          </motion.div>

          {/* Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-navy mb-4 block">Description</h2>
              <p className="text-lg text-grey leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-navy mb-6 block">Technical Specifications</h2>
              <div className="grid grid-cols-1 gap-4">
                {product.specifications.map((spec, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <span className="text-sm font-bold text-navy uppercase tracking-tight">{spec.label}</span>
                    <span className="text-sm text-grey">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <a href="#contact" className="btn-primary inline-flex items-center justify-center w-full md:w-auto">
                Request a Quote for this Product <ChevronRight size={18} className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="section-container">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-navy">Related Products</h2>
              <p className="text-grey mt-2">Explore other solutions for your infrastructure projects.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} id={p.id} title={p.title} icon={p.icon} description={p.description} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
