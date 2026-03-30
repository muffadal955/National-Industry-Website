import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-20 md:py-32">
      <div id="cases" />
      <div id="news" />
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl mb-8">Contact Us</h2>
            <p className="text-lg text-grey mb-12">
              Have a technical question or need a personalized quote? Our experts are at your disposal.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white flex items-center justify-center mr-4 text-navy shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone</div>
                  <div className="text-lg font-bold text-navy">+261 20 22 000 00</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white flex items-center justify-center mr-4 text-navy shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</div>
                  <div className="text-lg font-bold text-navy">contact@nationalindustries.mg</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white flex items-center justify-center mr-4 text-navy shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Address</div>
                  <div className="text-lg font-bold text-navy">Industrial Zone, Antananarivo, Madagascar</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-xl shadow-gray-200/50">
            <h3 className="text-2xl font-bold mb-8">Request a Quote</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-grey">Full Name</label>
                  <input type="text" className="w-full border-b-2 border-gray-100 py-2 focus:border-navy outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-grey">Company</label>
                  <input type="text" className="w-full border-b-2 border-gray-100 py-2 focus:border-navy outline-none transition-colors" placeholder="Construction LLC" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-grey">Professional Email</label>
                <input type="email" className="w-full border-b-2 border-gray-100 py-2 focus:border-navy outline-none transition-colors" placeholder="john@company.mg" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-grey">Message / Project Details</label>
                <textarea rows={4} className="w-full border-b-2 border-gray-100 py-2 focus:border-navy outline-none transition-colors resize-none" placeholder="Describe your needs..." />
              </div>
              <button className="btn-primary w-full">Send Request</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
