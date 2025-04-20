import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  Target,
  GraduationCap,
  Users,
  LineChart,
  Brain,
  ChevronDown
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import GembaLogo from './GembaLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle scrolling to the section after navigation
  useEffect(() => {
    if (location.hash === '#who-we-are') {
      const element = document.getElementById('who-we-are');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleGetStartedClick = () => {
    window.location.href = "mailto:gembaindonesia@gmail.com?subject=Consultation%20Request%20from%20GEMBA%20Website&body=Hello,%0D%0A%0D%0AI’d%20like%20to%20schedule%20a%20consultation%20to%20discuss%20how%20GEMBA%20can%20help%20improve%20our%20operations.%20Please%20let%20me%20know%20your%20availability.%0D%0A%0D%0AThanks,%0D%0A[Your%20Name]";
  };

  const serviceItems = [
    { title: 'Strategy', href: '/services/strategy', icon: <Target size={18} /> },
    { title: 'Trainings', href: '/services/trainings', icon: <GraduationCap size={18} /> },
    { title: 'Our Clients', href: '/services/clients', icon: <Users size={18} /> },
    { title: 'KPI Performance', href: '/services/kpi', icon: <LineChart size={18} /> },
    { title: 'Machine Learning', href: '/services/machine-learning', icon: <Brain size={18} /> }
  ];

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/#who-we-are' }, // Navigate to homepage and scroll to section
    { title: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Inject smooth scrolling CSS */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <GembaLogo className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gemba-dark font-medium hover:text-gemba-blue transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center text-gemba-dark font-medium hover:text-gemba-blue transition-colors"
              >
                Services <ChevronDown size={16} className={`ml-1 transform transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50 animate-fade-in">
                  {serviceItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="flex items-center px-4 py-2 text-sm text-gemba-dark hover:bg-gray-100 transition-colors"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <span className="mr-2 text-gemba-blue">{item.icon}</span>
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link, index) =>
              link.title === 'About' ? (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gemba-dark font-medium hover:text-gemba-blue transition-colors"
                >
                  {link.title}
                </Link>
              ) : (
                <a
                  key={index}
                  href={link.href}
                  className="text-gemba-dark font-medium hover:text-gemba-blue transition-colors"
                >
                  {link.title}
                </a>
              )
            )}
            <Button className="btn-primary" onClick={handleGetStartedClick}>Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gemba-dark p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 animate-fade-in">
            <div className="container flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gemba-dark font-medium hover:text-gemba-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="py-2">
                <div className="flex items-center justify-between text-gemba-dark font-medium">
                  <span>Services</span>
                  <ChevronDown
                    size={16}
                    className={`cursor-pointer transform transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  />
                </div>

                {servicesDropdownOpen && (
                  <div className="mt-2 pl-4 space-y-2 border-l-2 border-gemba-blue">
                    {serviceItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="flex items-center py-2 text-gemba-dark hover:text-gemba-blue transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setServicesDropdownOpen(false);
                        }}
                      >
                        <span className="mr-2 text-gemba-blue">{item.icon}</span>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link, index) =>
                link.title === 'About' ? (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-gemba-dark font-medium hover:text-gemba-blue transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gemba-dark font-medium hover:text-gemba-blue transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                )
              )}
              <Button
                className="btn-primary w-full mt-4"
                onClick={() => {
                  handleGetStartedClick();
                  setMobileMenuOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
