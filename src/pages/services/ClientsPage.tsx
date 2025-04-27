import React from 'react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const ClientsPage = () => {
  const industries = [
    {
      name: "Shipping & Logistics",
      clients: [
        "House of Shipping",
        "Kuehne+Nagel",
        "Lubeck Shipping LLC",
        "SeaLead",
        "forwarder.co",
        "DP World",
        "SPIL",
        "Meratus"
      ],
      description: "Streamlining supply chains and optimizing freight operations to enhance efficiency and reduce costs in global logistics."
    },
    {
      name: "Manufacturing",
      clients: ["INA", "Sango", "APB"],
      description: "Improving production processes and operational excellence to boost output and minimize waste in manufacturing environments."
    },
    {
      name: "Healthcare",
      clients: ["Rumah Sakit Samsoe Hidajat"],
      description: "Enhancing patient care workflows and administrative efficiency to improve service quality and operational performance."
    },
    {
      name: "Technology",
      clients: ["Endress+Hauser", "Vincent Sheppard"],
      description: "Implementing cutting-edge automation and design solutions to drive innovation and efficiency in technology-driven industries."
    }
  ];

  const testimonials = [
    {
      quote: "Different tools we can use on daily work, the handout is very useful as well as the assignment task at the end of each session. The samples given were also very relatable to our industry."
    },
    {
      quote: "Interaction among trainees! A lot of people are willing to volunteer and present their work! Trainer is very positive / respectful of people's opinions."
    },
    {
      quote: "I hierarchically like the assignments everyday and that pushes us to consolidate the knowledge and the sharing to have the opportunity to see what you did was correct and check other examples from colleagues."
    }
  ];

  const handleConsultationClick = () => {
    window.location.href = "mailto:gembaindonesia@gmail.com?subject=Consultation%20Request%20from%20GEMBA%20Website&body=Hello,%0D%0A%0D%0AI'd%20like%20to%20schedule%20a%20consultation%20to%20discuss%20how%20GEMBA%20can%20help%20improve%20our%20operations.%20Please%20let%20me%20know%20your%20availability.%0D%0A%0D%0AThanks,%0D%0A[Your%20Name]";
  };

  return (
    <ServicePageLayout
      title="Our Clients"
      description="Discover how organizations across industries have transformed their operations with Gemba's expertise."
      imagePath="/gemba-images/optimized/clients-image.jpg"
    >
      <div className="space-y-16">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Client Success Stories</h2>
          <p className="text-lg text-gray-700">
            We've partnered with organizations of all sizes across numerous industries.
            Our client relationships are built on trust, collaboration, and consistently delivering measurable results.
          </p>
        </div>

        {/* Our Partners */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Our Partners</h3>
          <div className="flex justify-center">
            <img
              src="/images/clients.png"
              alt="Our Partner Logos"
              className="max-w-full h-auto md:max-w-3xl rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Industries We Serve */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Industries We Serve</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-gemba-blue">{industry.name}</h4>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div>
                    <h5 className="font-medium mb-2">Featured Clients:</h5>
                    <ul className="list-disc list-inside text-gray-700">
                      {industry.clients.map((client, idx) => (
                        <li key={idx}>{client}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-8 text-center">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md relative">
                <Quote size={36} className="text-gemba-orange opacity-20 absolute top-4 left-4" />
                <blockquote className="text-gray-700 relative z-10">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Measurable Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-gemba-blue mb-2">40%</div>
              <p className="text-gray-600">Average reduction in process lead time</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-gemba-blue mb-2">25%</div>
              <p className="text-gray-600">Average increase in productivity</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-gemba-blue mb-2">30%</div>
              <p className="text-gray-600">Average reduction in operational costs</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-gemba-blue mb-2">95%</div>
              <p className="text-gray-600">Client retention rate</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Join our growing list of successful clients</h3>
          <p className="text-lg text-gray-600 mb-6">
            Discover how Gemba can help your organization achieve similar results.
          </p>
          <button
            onClick={handleConsultationClick}
            className="btn-primary inline-block"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default ClientsPage;
