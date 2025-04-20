import React from 'react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const StrategyPage = () => {
  const strategies = [
    {
      title: "Process Mapping",
      description: "We create detailed visual representations of your workflows to identify inefficiencies and opportunities for improvement."
    },
    {
      title: "Value Stream Analysis",
      description: "Identify which activities add value and eliminate those that don't to streamline operations and reduce waste."
    },
    {
      title: "Lean Implementation Planning",
      description: "Develop comprehensive roadmaps for implementing lean methodologies customized to your organization's unique needs."
    },
    {
      title: "Kaizen Events",
      description: "Facilitate focused improvement workshops that deliver rapid, measurable results in targeted process areas."
    }
  ];

  const benefits = [
    "Reduced operational costs",
    "Improved process efficiency",
    "Enhanced quality control",
    "Increased employee engagement",
    "Better resource allocation",
    "Sustainable long-term growth"
  ];

  const handleGetStartedClick = () => {
    window.location.href = "mailto:gembaindonesia@gmail.com?subject=Consultation%20Request%20from%20GEMBA%20Website&body=Hello,%0D%0A%0D%0AI’d%20like%20to%20schedule%20a%20consultation%20to%20discuss%20how%20GEMBA%20can%20help%20improve%20our%20operations.%20Please%20let%20me%20know%20your%20availability.%0D%0A%0D%0AThanks,%0D%0A[Your%20Name]";
  };

  return (
    <ServicePageLayout
      title="Strategy: Building a Clear and Comprehensive Roadmap for Success"
      description="Develop a comprehensive lean strategy that aligns with your business goals and drives sustainable improvement."
      imagePath="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    >
      <div className="space-y-16">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-4">
            Many companies claim to have a “strategy,” but often these are just partial elements that lack a cohesive plan for success. You might hear:
          </p>
          <ul className="text-lg text-gray-700 list-disc list-inside mb-4 text-left">
            <li>“Our strategy is to be the low-cost provider.”</li>
            <li>“We’re pursuing a global strategy.”</li>
            <li>“Our strategy is to provide unrivaled customer service.”</li>
            <li>“Our strategy is to move from defense to industrial applications.”</li>
          </ul>
          <p className="text-lg text-gray-700 mb-4">
            While these are valid goals, they don’t represent a complete, actionable strategy. A true strategy integrates all the critical components needed to drive long-term success.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            At Gemba Indonesia Karya, we present a comprehensive framework for strategy design, answering five crucial questions that guide organizations towards meaningful transformation:
          </p>
          <ul className="text-lg text-gray-700 list-disc list-inside mb-4 text-left">
            <li><strong>Arenas:</strong> Where will we focus our efforts?</li>
            <li><strong>Vehicles:</strong> How will we get there—what methods or resources will we use?</li>
            <li><strong>Differentiators:</strong> What will set us apart in the marketplace?</li>
            <li><strong>Staging:</strong> What is the right speed and sequence of moves to ensure success?</li>
            <li><strong>Economic Logic:</strong> How will we generate sustainable returns and achieve profitability?</li>
          </ul>
          <p className="text-lg text-gray-700">
            This framework, combined with our strategic consulting services, helps you identify core challenges, set meaningful objectives, and chart a clear path toward operational excellence.
          </p>
        </div>

        {/* Strategy Services */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Strategic Services We Offer</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {strategies.map((strategy, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold mb-3 text-gemba-blue">{strategy.title}</h4>
                <p className="text-gray-600">{strategy.description}</p>
                <div className="mt-4">
                  <a href="#contact" className="inline-flex items-center text-gemba-blue hover:underline">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle size={20} className="text-gemba-teal mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to transform your processes?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Contact us today to schedule a strategic assessment of your operations.
          </p>
          <button
            onClick={handleGetStartedClick}
            className="btn-primary inline-block"
          >
            Get Started
          </button>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default StrategyPage;
