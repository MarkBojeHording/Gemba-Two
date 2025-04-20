import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleConsultationClick = () => {
    window.location.href = "mailto:gembaindonesia@gmail.com?subject=Consultation%20Request%20from%20GEMBA%20Website&body=Hello,%0D%0A%0D%0AI’d%20like%20to%20schedule%20a%20consultation%20to%20discuss%20how%20GEMBA%20can%20help%20improve%20our%20operations.%20Please%20let%20me%20know%20your%20availability.%0D%0A%0D%0AThanks,%0D%0A[Your%20Name]";
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gemba-blue/10 via-white to-gemba-orange/5 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1500"
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
              <span className="h-2 w-2 rounded-full bg-gemba-teal animate-pulse-light"></span>
              <p className="font-medium text-gemba-dark text-sm">
                Transforming Businesses through Lean Principles
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gemba-dark">
              Transforming Businesses<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gemba-blue to-gemba-teal">
                Through Expert Consulting
              </span>
            </h1>

            <p className="text-lg text-gemba-gray max-w-lg">
              Gemba Indonesia Karya provides top-tier consulting services to help your business achieve operational excellence and sustainable growth
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-gemba-blue text-gemba-blue hover:bg-gemba-blue/10">
                Learn More
              </Button>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gemba-gray">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-gemba-blue/20 flex items-center justify-center text-gemba-blue text-xs border-2 border-white">
                    {i}
                  </div>
                ))}
              </div>
              <p>Trusted by 500+ organizations</p>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-gemba-blue/20 to-gemba-teal/20 rounded-lg blur-xl animate-pulse-light"></div>
              <div className="relative bg-white rounded-lg shadow-xl p-6 animate-scale-in">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gemba-dark">Start your transformation today</h3>

                  <div className="space-y-3">
                    {['Identify waste in your processes', 'Implement continuous improvement', 'Train your team on Lean principles'].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="h-6 w-6 rounded-full bg-gemba-teal/20 flex items-center justify-center text-gemba-teal">
                          <ChevronRight size={16} />
                        </div>
                        <p className="text-gemba-dark">{item}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full btn-primary"
                    onClick={handleConsultationClick}
                  >
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
