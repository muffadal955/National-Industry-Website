import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Building2, Leaf, Lightbulb, Droplets, Construction, Zap, Sprout } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About us', href: '/#about' },
    { name: 'Solutions', href: '/products' },
    { name: 'Cases', href: '/#cases' },
    { name: 'News', href: '/#news' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white border-b border-gray-100 shadow-sm' : 'bg-transparent'
    }`}>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className={`flex justify-between items-center ${
          isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-24'
        }`}>

          {/* LOGO */}
          <Link to="/">
            <img
              src={isScrolled ? "/logo-dark.png" : "/logo-light.png"}
              alt="Logo"
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden xl:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative font-semibold text-sm ${
                  isScrolled ? 'text-gray-700 hover:text-navy' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden xl:block">
            <Link 
              to="/#contact"
              className="bg-navy text-white px-6 py-2 rounded-full text-sm font-semibold"
            >
              Request Quote
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`xl:hidden ${isScrolled ? 'text-navy' : 'text-white'}`}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden bg-white border-t"
          >
            <div className="flex flex-col gap-6 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-semibold text-gray-800"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-navy text-white py-3 rounded-full text-center font-semibold"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Header;