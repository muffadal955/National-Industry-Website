import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="text-2xl font-black text-navy tracking-tighter mb-6">
              NATIONAL <span className="text-grey font-light">INDUSTRIES</span>
            </div>
            <p className="text-sm text-grey leading-relaxed">
              Leader in PVC pipe manufacturing in Madagascar. Quality, durability, and innovation at the service of infrastructure.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-grey">
              <li><Link to="/" className="hover:text-navy transition-colors">Home</Link></li>
              <li><Link to="/#products" className="hover:text-navy transition-colors">Products</Link></li>
              <li><Link to="/#about" className="hover:text-navy transition-colors">About</Link></li>
              <li><Link to="/#contact" className="hover:text-navy transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-grey">
              <li><Link to="/products?cat=Pressure" className="hover:text-navy transition-colors">PVC Pressure</Link></li>
              <li><Link to="/products?cat=Drainage" className="hover:text-navy transition-colors">Drainage</Link></li>
              <li><Link to="/products?cat=Electrical" className="hover:text-navy transition-colors">Electrical Conduits</Link></li>
              <li><Link to="/products?cat=Agricultural" className="hover:text-navy transition-colors">Agricultural Pipes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-grey">
              <li className="flex items-center"><Phone size={14} className="mr-2" /> +261 20 22 000 00</li>
              <li className="flex items-center"><Mail size={14} className="mr-2" /> contact@nationalindustries.mg</li>
              <li className="flex items-start"><MapPin size={14} className="mr-2 mt-1" /> Industrial Zone, Antananarivo</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} National Industries Madagascar. All rights reserved.
          </div>
          <div className="flex space-x-6 text-xs text-gray-400">
            <a href="#" className="hover:text-navy">Legal Notice</a>
            <a href="#" className="hover:text-navy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
