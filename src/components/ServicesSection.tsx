import React from 'react';

const WhoWeAreSection = () => {
  return (
    <section id="who-we-are" className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-gemba-gray text-lg">
            Meet our expert consultants who bring decades of experience and innovative solutions to drive your business transformation.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-gemba-dark">Our Consultants</h3>
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gemba-blue">Niels Henrik Krogh</h4>
            <p className="text-gemba-gray">
              With over 35 years of experience, Niels Henrik Krogh is a certified Six Sigma Master Black Belt and a proven leader in Business Transformation. Throughout his career, Niels has successfully driven change across various industries, delivering impactful results for some of the world’s leading companies.
            </p>
            <div>
              <p className="text-gemba-gray font-medium mb-2">His experience spans industries such as:</p>
              <ul className="list-disc list-inside text-gemba-gray space-y-1">
                <li>Bang & Olufsen (Denmark) – Electronics</li>
                <li>Nokia (Finland) – Electronics</li>
                <li>Volvo Trucks (Sweden) – Automotive</li>
                <li>Maersk Line (Denmark) – Shipping & Logistics</li>
                <li>Salam Pacific Indonesia Lines (Indonesia) – Shipping & Logistics</li>
                <li>Sango Ceramics (Indonesia) – Ceramics & Furniture</li>
              </ul>
            </div>
            <p className="text-gemba-gray">
              As a co-founder of Gemba Indonesia Karya, Niels brings a wealth of expertise and a hands-on approach to driving transformation. His deep understanding of global organizations and general cross-industry experience allows him to provide tailored solutions that make a lasting impact.
            </p>
            <p className="text-gemba-gray">
              Recently, Niels has been driving several major projects focusing on incorporating AI and Machine Learning into business operations, achieving substantial improvements in areas such as forecasting, simulations, and decision-making tools. By leveraging cutting-edge technology, Niels continues to push the boundaries of innovation to help organizations unlock new potential and deliver results in an increasingly data-driven world.
            </p>
            <p className="text-gemba-gray">
              To support Niels, we collaborate with a network of highly skilled freelance consultants. These experts bring specialized knowledge to each project, allowing us to tailor our resources to the specific needs of our clients. Depending on the requirements of each individual project, we bring in the right experts to ensure optimal results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
