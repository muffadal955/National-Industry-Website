import React, { useState, useEffect } from 'react';
import { ChevronRight, ShieldCheck, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  { image: "/images/hero-1.jpg" },
  { image: "/images/hero-2.jpg" },
  { image: "/images/hero-3.jpg" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-20 md:pt-24 overflow-hidden bg-navy">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slide.image} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#123a52] to-[#0a2230]" />
      </div>

      {/* CONTENT */}
      <div className="section-container relative z-10 py-16 md:py-32 px-4">
        <div className="max-w-3xl">

          <div className="mb-6 text-white text-xs uppercase tracking-widest">
            Leading Manufacturer in Madagascar
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
            ENGINEERING <br />
            <span className="text-white/40">THE FUTURE OF</span> <br />
            INFRASTRUCTURE
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8">
            High-performance PVC solutions for water, drainage, and power.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link className="bg-white text-navy px-6 py-3 rounded-full font-semibold text-sm sm:text-base flex justify-center items-center gap-2">
              Request Quote <ChevronRight size={18} />
            </Link>

            <Link className="border border-white/30 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base text-center">
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="relative z-10 bg-white/5 backdrop-blur-xl py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {[
            { icon: ShieldCheck, label: 'ISO Certified', value: '100%' },
            { icon: Globe, label: 'Local Production', value: 'Madagascar' },
            { icon: Zap, label: 'Projects', value: '500+' },
            { icon: ShieldCheck, label: 'Years', value: '25+' },
          ].map((item, i) => (
            <div key={i} className="text-center text-white">
              <item.icon className="mx-auto mb-2" />
              <div className="font-bold">{item.value}</div>
              <div className="text-xs opacity-60">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;