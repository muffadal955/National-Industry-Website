import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden bg-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/industrial-pipes/1920/1080" 
          alt="Industrial PVC Pipes" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
      </div>
      
      <div className="section-container relative z-10 py-20 md:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
          >
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-widest">Leading Manufacturer in Madagascar</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 text-white tracking-tighter"
          >
            ENGINEERING <br />
            <span className="text-white/60">THE FUTURE OF</span> <br />
            INFRASTRUCTURE
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-2xl text-white/70 mb-12 max-w-2xl leading-relaxed font-medium"
          >
            High-performance PVC solutions for water, drainage, and power. 
            Locally manufactured in Madagascar to international standards.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link 
              to="/#contact" 
              className="bg-white text-navy px-10 py-5 rounded-full font-black text-lg hover:bg-navy hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group shadow-2xl shadow-white/10"
            >
              Request a Quote <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/products" 
              className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              Explore Solutions
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats / Trust Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 bg-white/5 backdrop-blur-xl border-t border-white/10 py-10"
      >
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: ShieldCheck, label: 'ISO Certified', value: '100%' },
              { icon: Globe, label: 'Local Production', value: 'Madagascar' },
              { icon: Zap, label: 'Projects Completed', value: '500+' },
              { icon: ShieldCheck, label: 'Years of Trust', value: '25+' },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                <div className="p-3 bg-white/10 rounded-2xl text-white">
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black text-white leading-none mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
