import React from 'react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Clock, Users } from 'lucide-react';

const TrainingsPage = () => {
  const trainingCategories = [
    {
      value: "lean-basics",
      label: "Lean Basics",
      courses: [
        {
          title: "Introduction to Lean Principles",
          duration: "1 day",
          audience: "All employees",
          description: "Learn the fundamental concepts of lean methodology and how they apply to your workplace."
        },
        {
          title: "The 5S System",
          duration: "1 day",
          audience: "Team leaders, supervisors",
          description: "Master the 5S methodology: Sort, Set in order, Shine, Standardize, and Sustain."
        }
      ]
    },
    {
      value: "advanced",
      label: "Advanced Techniques",
      courses: [
        {
          title: "Value Stream Mapping",
          duration: "2 days",
          audience: "Process engineers, managers",
          description: "Learn to create and analyze value stream maps to identify and eliminate waste in processes."
        },
        {
          title: "Kanban System Implementation",
          duration: "2 days",
          audience: "Production managers, team leaders",
          description: "Master the implementation of pull systems using Kanban to improve flow and reduce inventory."
        }
      ]
    },
    {
      value: "leadership",
      label: "Lean Leadership",
      courses: [
        {
          title: "Leading Lean Transformation",
          duration: "3 days",
          audience: "Senior management, directors",
          description: "Develop the leadership skills needed to drive lean transformation across your organization."
        },
        {
          title: "Coaching for Continuous Improvement",
          duration: "2 days",
          audience: "Managers, team leaders",
          description: "Learn effective coaching techniques to foster a culture of continuous improvement."
        }
      ]
    }
  ];

  const handleInquireClick = () => {
    window.location.href = "mailto:gembaindonesia@gmail.com?subject=Consultation%20Request%20from%20GEMBA%20Website&body=Hello,%0D%0A%0D%0AI'd%20like%20to%20schedule%20a%20consultation%20to%20discuss%20how%20GEMBA%20can%20help%20improve%20our%20operations.%20Please%20let%20me%20know%20your%20availability.%0D%0A%0D%0AThanks,%0D%0A[Your%20Name]";
  };

  return (
    <ServicePageLayout
      title="Lean Training Programs"
      description="Empower your team with the knowledge and skills to implement and sustain lean processes."
      imagePath="/gemba-images/optimized/working-together.jpg"
    >
      <div className="space-y-16">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Training: Empowering Teams with Knowledge and Practical Skills</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Gemba Indonesia Karya, we understand that knowledge is key to driving transformation. That's why we offer customized training programs designed to equip your team with the skills and tools needed to implement successful change across your organization. Whether you're looking for online or offline training, we tailor each session to meet your specific needs and objectives.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our training covers a wide range of areas, including:
          </p>
          <ul className="text-lg text-gray-700 list-disc list-inside mb-4 text-left">
            <li><strong>Lean and Six Sigma:</strong> Optimizing processes and eliminating inefficiencies.</li>
            <li><strong>Change Management:</strong> Successfully leading your team through transitions.</li>
            <li><strong>Stakeholder Management:</strong> Building strong, productive relationships with key partners.</li>
            <li><strong>Data Analysis & Statistics:</strong> Using data to make informed, strategic decisions.</li>
          </ul>
          <p className="text-lg text-gray-700">
            We go beyond theory by incorporating relevant, real-life examples and data from participants' daily work. This ensures that the training is not only practical but also directly applicable to the challenges you face. By making the learning experience personal and relevant, we ensure that your team walks away with actionable insights and the confidence to apply what they've learned immediately.
          </p>
        </div>

        {/* Training Tabs */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Training Programs</h3>
          <Tabs defaultValue="lean-basics" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
              {trainingCategories.map((category) => (
                <TabsTrigger key={category.value} value={category.value}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {trainingCategories.map((category) => (
              <TabsContent key={category.value} value={category.value} className="space-y-6">
                {category.courses.map((course, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-4 text-gemba-blue">{course.title}</h4>
                      <p className="text-gray-600 mb-6">{course.description}</p>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex items-center">
                          <Clock size={18} className="text-gemba-teal mr-2" />
                          <span className="text-sm">{course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users size={18} className="text-gemba-teal mr-2" />
                          <span className="text-sm">{course.audience}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={18} className="text-gemba-teal mr-2" />
                          <span className="text-sm">Flexible dates</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Training Benefits */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6">Why Choose Our Training</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle size={20} className="text-gemba-teal mr-2 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Experienced Trainers</h4>
                <p className="text-gray-600">Learn from professionals with years of hands-on implementation experience.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle size={20} className="text-gemba-teal mr-2 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Customized Content</h4>
                <p className="text-gray-600">Training materials tailored to your industry and specific challenges.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle size={20} className="text-gemba-teal mr-2 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Practical Application</h4>
                <p className="text-gray-600">Hands-on exercises and real-world case studies for immediate application.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle size={20} className="text-gemba-teal mr-2 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Ongoing Support</h4>
                <p className="text-gray-600">Post-training coaching and resources to ensure successful implementation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to build your team's capabilities?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Contact us to discuss customized training programs for your organization.
          </p>
          <button
            onClick={handleInquireClick}
            className="btn-primary inline-block"
          >
            Inquire About Training
          </button>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default TrainingsPage;
