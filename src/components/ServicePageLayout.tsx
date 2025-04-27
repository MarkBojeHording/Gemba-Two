import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

interface ServicePageLayoutProps {
  title: string;
  description: string;
  imagePath: string;
  children: React.ReactNode;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  title,
  description,
  imagePath,
  children,
}) => {
  const location = useLocation();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = imagePath;
    img.onload = () => setIsImageLoaded(true);
  }, [imagePath]);

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={imagePath} />
      </Helmet>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isImageLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={imagePath}
              alt={title}
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>
          {!isImageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                {description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-12"
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default ServicePageLayout;
