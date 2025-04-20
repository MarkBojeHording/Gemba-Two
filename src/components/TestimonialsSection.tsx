import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Different tools we can use on daily work, the handout is very useful as well as the assignment task at the end of each session. The samples given were also very relatable to our industry.",
    },
    {
      quote: "Interaction among trainees! A lot of people are willing to volunteer and present their work! Trainer is very positive / respectful of people’s opinions.",
    },
    {
      quote: "I particularly like the assignments everyday and that pushes us to consolidate the knowledge and the sharing to have the opportunity to see what you did was correct and check other examples from colleagues.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gemba-gray text-lg">
            We've helped organizations across industries achieve significant improvements in efficiency and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="card-hover overflow-hidden border-0 shadow-md"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8 relative">
                <Quote className="absolute top-4 right-4 h-12 w-12 text-gemba-blue/10" />

                <blockquote className="mb-6 text-gemba-gray">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
