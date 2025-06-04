
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-lg border-b border-yellow-400/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => scrollToSection('home')}
          >
            MariViliaShow
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('show')}
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium relative group"
            >
              Show
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium relative group"
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium relative group"
            >
              Booking
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-yellow-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 space-y-4 bg-black/90 rounded-lg">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-white hover:text-yellow-400 transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('show')}
              className="block w-full text-left px-4 py-2 text-white hover:text-yellow-400 transition-colors duration-300"
            >
              Show
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left px-4 py-2 text-white hover:text-yellow-400 transition-colors duration-300"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="block w-full text-left px-4 py-2 text-white hover:text-yellow-400 transition-colors duration-300"
            >
              Booking
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
