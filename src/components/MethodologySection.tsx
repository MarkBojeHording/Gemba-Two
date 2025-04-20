
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

const MethodologySection = () => {
  const steps = [
    {
      number: '01',
      title: 'Assessment',
      description: 'We conduct a comprehensive assessment of your current processes to identify waste and opportunities for improvement.',
      color: 'blue'
    },
    {
      number: '02',
      title: 'Analysis',
      description: 'Our team analyzes the collected data to identify root causes of inefficiencies and develop improvement strategies.',
      color: 'orange'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We work with your team to implement targeted improvements using proven Lean methodologies and tools.',
      color: 'teal'
    },
    {
      number: '04',
      title: 'Sustainability',
      description: 'We establish systems and train your team to sustain improvements and continue the journey of continuous improvement.',
      color: 'dark'
    },
  ];

  return (
    <section id="methodology" className="section-padding bg-gemba-light">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Methodology</h2>
          <p className="text-gemba-gray text-lg">
            Our proven approach helps organizations systematically eliminate waste and improve processes for sustainable results.
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-4 gap-6">
                {steps.map((step, index) => (
                  <div 
                    key={index} 
                    className="relative animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`h-1 absolute top-10 left-1/2 right-0 bg-gradient-to-r from-gemba-${step.color} to-transparent ${index === steps.length - 1 ? 'hidden' : ''}`}></div>
                    <div className="flex flex-col items-center text-center">
                      <div className={`h-16 w-16 rounded-full bg-gemba-${step.color}/10 flex items-center justify-center mb-4 relative z-10 border-4 border-white`}>
                        <span className={`text-2xl font-bold text-gemba-${step.color}`}>{step.number}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gemba-dark">{step.title}</h3>
                      <p className="text-gemba-gray">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile View */}
          <div className="md:hidden">
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex space-x-6 p-4">
                {steps.map((step, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl p-6 shadow-md min-w-[280px] animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`h-12 w-12 rounded-full bg-gemba-${step.color}/10 flex items-center justify-center mb-4`}>
                      <span className={`text-xl font-bold text-gemba-${step.color}`}>{step.number}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gemba-dark">{step.title}</h3>
                    <p className="text-gemba-gray">{step.description}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
