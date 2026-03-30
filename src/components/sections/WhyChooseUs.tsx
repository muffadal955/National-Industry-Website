import React from 'react';
import { ShieldCheck, Zap, Truck, Globe } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    { icon: ShieldCheck, title: 'ISO Certification', desc: 'Products compliant with international standards.' },
    { icon: Zap, title: 'Efficiency', desc: 'Quick installation and reduced maintenance.' },
    { icon: Truck, title: 'Availability', desc: 'Permanent stock for your urgent projects.' },
    { icon: Globe, title: 'Eco-friendly', desc: '100% recyclable and durable materials.' }
  ];

  return (
    <section id="innovation" className="section-container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl mb-4">Why Choose Us?</h2>
        <p className="text-grey">Industrial excellence at the service of your construction and development projects.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {features.map((f, idx) => (
          <div key={idx} className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-navy">
              <f.icon size={32} />
            </div>
            <h4 className="text-lg font-bold mb-2">{f.title}</h4>
            <p className="text-sm text-grey leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
