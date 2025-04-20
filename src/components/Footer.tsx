import React from 'react';
import GembaLogo from './GembaLogo';
import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gemba-light pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 max-w-2xl mx-auto">
          {/* Column 1 - Logo and About */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <GembaLogo className="mb-4" />
            </div>
            <p className="text-gemba-gray mb-4">
              GEMBA helps organizations implement lean principles to eliminate waste and improve processes for sustainable growth.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {[
                { icon: <Linkedin size={20} />, href: '#' },
                { icon: <Twitter size={20} />, href: '#' },
                { icon: <Facebook size={20} />, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-gemba-gray hover:text-gemba-blue hover:bg-gemba-blue/10 transition-colors"
                  aria-label={`Social link ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Contact (previously Column 4) */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4 text-gemba-dark">Contact Us</h3>
            <ul className="space-y-4">
              {[
                { icon: <Phone size={18} />, text: '+62 811 1086 452' },
                { icon: <Phone size={18} />, text: '+62 813 3282 5062' },
                { icon: <Mail size={18} />, text: 'gembaindonesia@gmail.com' },
              ].map((contact, index) => (
                <li key={index} className="flex items-start justify-center md:justify-start">
                  <span className="text-gemba-blue mr-3 mt-1">{contact.icon}</span>
                  <span className="text-gemba-gray">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gemba-gray">
          <p>© {currentYear} GEMBA Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
