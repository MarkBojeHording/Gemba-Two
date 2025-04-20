
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface ServicePageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  imagePath?: string;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({ 
  children, 
  title, 
  description, 
  imagePath = '/placeholder.svg' 
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-gemba-blue to-gemba-teal text-white pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                <p className="text-lg md:text-xl opacity-90">{description}</p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={imagePath} 
                  alt={title} 
                  className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="container py-16">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
