import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const handleConsultationClick = () => {
    window.location.href = "mailto:gembaindonesia@gmail.com?subject=Consultation%20Request%20from%20GEMBA%20Website&body=Hello,%0D%0A%0D%0AI’d%20like%20to%20schedule%20a%20consultation%20to%20discuss%20how%20GEMBA%20can%20help%20improve%20our%20operations.%20Please%20let%20me%20know%20your%20availability.%0D%0A%0D%0AThanks,%0D%0A[Your%20Name]";
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gemba-blue via-gemba-blue to-gemba-teal p-1">
          <div className="absolute inset-0 bg-grid-white/10 mask-linear-gradient"></div>
          <div className="bg-white dark:bg-gemba-dark rounded-xl p-8 md:p-12 lg:p-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gemba-dark">
                  Ready to transform your operations?
                </h2>
                <p className="text-lg text-gemba-gray max-w-lg">
                  Schedule a consultation with our team to discuss how GEMBA can help your organization eliminate waste and improve processes.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="btn-primary group flex-1"
                    onClick={handleConsultationClick}
                  >
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <p className="text-sm text-gemba-gray text-center">
                  No commitment required. Learn how we can help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
