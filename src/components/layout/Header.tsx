import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, User, Globe, MapPin, LogIn, Mail, Lock, Building2, Leaf, Lightbulb, Droplets, Construction, Zap, Sprout, Settings, LogOut, UserCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<'region' | 'login' | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'About us', 
      href: '/#about',
      dropdown: [
        { name: 'Our Company', href: '/#about', icon: Building2, desc: 'Learn about our history and values' },
        { name: 'Sustainability', href: '/#sustainability', icon: Leaf, desc: 'Our commitment to the environment' },
        { name: 'Innovation', href: '/#innovation', icon: Lightbulb, desc: 'Leading the way in PVC technology' },
      ]
    },
    { 
      name: 'Solutions', 
      href: '/products',
      dropdown: [
        { name: 'Pressure Pipes', href: '/products?cat=Pressure', icon: Droplets, desc: 'High-pressure water distribution' },
        { name: 'Drainage Systems', href: '/products?cat=Drainage', icon: Construction, desc: 'Waste and rainwater management' },
        { name: 'Electrical Conduits', href: '/products?cat=Electrical', icon: Zap, desc: 'Wiring protection solutions' },
        { name: 'Agricultural Pipes', href: '/products?cat=Agricultural', icon: Sprout, desc: 'Irrigation and farming solutions' },
      ]
    },
    { name: 'Cases', href: '/#cases' },
    { name: 'News', href: '/#news' },
  ];

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const Modal = ({ type, onClose }: { type: 'region' | 'login'; onClose: () => void }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-black text-navy tracking-tight">
              {type === 'region' ? 'Select Region' : 'Sign In'}
            </h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X size={24} className="text-navy" />
            </button>
          </div>

          {type === 'region' ? (
            <div className="space-y-4">
              <p className="text-grey text-sm mb-6">Please select your preferred region and language.</p>
              {['Global (English)', 'Europe (English)', 'Asia Pacific (English)', 'Madagascar (French)'].map((region) => (
                <button
                  key={region}
                  onClick={onClose}
                  className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-navy hover:bg-navy/5 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Globe size={20} className="text-navy" />
                    <span className="font-bold text-navy">{region}</span>
                  </div>
                  <ChevronDown size={16} className="text-grey -rotate-90 group-hover:text-navy" />
                </button>
              ))}
            </div>
          ) : (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-grey" size={18} />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-navy outline-none transition-all"
                    required
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-grey" size={18} />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-navy outline-none transition-all"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="w-full bg-navy text-white py-4 rounded-xl font-bold hover:bg-navy/90 transition-all flex items-center justify-center gap-2">
                <LogIn size={20} /> Sign In
              </button>
              <p className="text-center text-sm text-grey">
                Don't have an account? <button className="text-navy font-bold">Register here</button>
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white border-b border-gray-100 shadow-sm py-0' : 'bg-transparent py-4'}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-20' : 'h-24'}`}>
          {/* Logo Section */}
          <div className="flex items-center gap-12">
            <Link to="/" className="flex flex-col items-center group">
              <div className={`border-[3px] px-4 py-1 rounded-[20px] transition-all duration-500 ${isScrolled ? 'border-navy' : 'border-white'}`}>
                <span className={`text-2xl font-black tracking-tight transition-colors duration-500 ${isScrolled ? 'text-navy' : 'text-white'}`}>
                  NATIONAL
                </span>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider mt-1 transition-colors duration-500 ${isScrolled ? 'text-grey' : 'text-white/60'}`}>
                An Orbia business.
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center space-x-2">
              {navLinks.map((link) => (
                <div 
                  key={link.name}
                  className="relative py-8"
                  onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link 
                    to={link.href} 
                    className={`flex items-center gap-1 px-4 text-[15px] font-semibold transition-colors ${activeDropdown === link.name ? 'text-navy' : (isScrolled ? 'text-[#3D4756] hover:text-navy' : 'text-white hover:text-white/80')}`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-2"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all">
                              <item.icon size={20} className="text-navy" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-navy mb-0.5">{item.name}</div>
                              <div className="text-xs text-grey leading-tight">{item.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </div>

          {/* Right Section */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Global Selector Dropdown */}
            <div 
              className="relative py-8"
              onMouseEnter={() => handleMouseEnter('global')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1.5 text-[15px] font-semibold transition-all duration-300 border rounded-full px-4 py-2 ${activeDropdown === 'global' ? 'border-navy text-navy bg-navy/5' : (isScrolled ? 'border-gray-300 text-[#3D4756] hover:border-navy hover:text-navy' : 'border-white/30 text-white hover:border-white')}`}>
                Global <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'global' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'global' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-2"
                  >
                    {['Global (English)', 'Europe (English)', 'Asia Pacific (English)', 'Madagascar (French)'].map((region) => (
                      <button
                        key={region}
                        className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <Globe size={18} className="text-navy" />
                        <span className="text-sm font-bold text-navy">{region}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Dropdown */}
            <div 
              className="relative py-8"
              onMouseEnter={() => handleMouseEnter('user')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`p-2 transition-all duration-300 rounded-full ${activeDropdown === 'user' ? 'bg-navy/5 text-navy' : (isScrolled ? 'text-[#3D4756] hover:text-navy hover:bg-gray-50' : 'text-white hover:bg-white/10')}`}>
                <User size={22} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'user' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-2"
                  >
                    <button 
                      onClick={() => { setActiveDropdown(null); setActiveModal('login'); }}
                      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
                    >
                      <LogIn size={18} className="text-navy" />
                      <span className="text-sm font-bold text-navy">Sign In</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left">
                      <UserCircle size={18} className="text-navy" />
                      <span className="text-sm font-bold text-navy">My Profile</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left">
                      <Settings size={18} className="text-navy" />
                      <span className="text-sm font-bold text-navy">Settings</span>
                    </button>
                    <div className="h-[1px] bg-gray-100 my-1 mx-2" />
                    <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 transition-colors text-left group">
                      <LogOut size={18} className="text-red-500" />
                      <span className="text-sm font-bold text-red-500">Sign Out</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link 
              to="/#contact"
              className="bg-navy text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-navy/90 transition-all shadow-lg shadow-navy/20 flex items-center gap-2"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors ${isScrolled ? 'text-navy' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-1">
                  <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50">
                    <Link 
                      to={link.href} 
                      onClick={() => !link.dropdown && setIsMenuOpen(false)}
                      className="text-base font-semibold text-[#3D4756]"
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <button 
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="p-2"
                      >
                        <ChevronDown size={20} className={`text-navy transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Submenu */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 space-y-1"
                      >
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 text-sm font-bold text-navy"
                          >
                            <sub.icon size={18} />
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-100 flex flex-col space-y-4">
                <Link 
                  to="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-navy text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg shadow-navy/20"
                >
                  Request a Quote
                </Link>
                <button 
                  onClick={() => { setIsMenuOpen(false); setActiveModal('login'); }}
                  className="border border-navy text-navy py-4 rounded-full font-bold flex items-center justify-center gap-2"
                >
                  <User size={18} /> Sign In
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modals */}
      <AnimatePresence>
        {activeModal && (
          <Modal type={activeModal} onClose={() => setActiveModal(null)} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
