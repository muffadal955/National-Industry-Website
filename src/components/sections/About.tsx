import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-navy text-white py-20 md:py-32">
      <div id="sustainability" className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/factory/800/600" 
              alt="Factory" 
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 hidden md:block">
              <div className="text-navy text-4xl font-black">25+</div>
              <div className="text-grey text-xs font-bold uppercase tracking-widest">Years of expertise</div>
            </div>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4 block">Our History</span>
            <h2 className="text-3xl md:text-5xl text-white mb-8">About Us</h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              National Industries is the leader in PVC pipe manufacturing in Madagascar. From our local factory, we provide high-quality infrastructure solutions to support the country's development.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Local Production', desc: 'Supporting the Malagasy economy and reducing lead times.' },
                { title: 'Controlled Quality', desc: 'Each batch is tested according to the strictest resistance standards.' },
                { title: 'Reliable Delivery', desc: 'Optimized logistics to serve the entire national territory.' }
              ].map((point) => (
                <div key={point.title} className="flex items-start">
                  <div className="mt-1 mr-4 text-white">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{point.title}</h4>
                    <p className="text-sm text-white/60">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
