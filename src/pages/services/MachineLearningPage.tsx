import React from 'react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart4,
  Cpu,
  Workflow,
  Layers,
  Database
} from 'lucide-react';

const MachineLearningPage = () => {
  const applications = [
    {
      title: "Predictive Maintenance",
      description: "Forecast equipment failures before they happen to reduce downtime and maintenance costs.",
      icon: <Cpu className="h-10 w-10 text-gemba-blue" />
    },
    {
      title: "Quality Control",
      description: "Detect defects and anomalies in real-time with computer vision and sensor data analytics.",
      icon: <Layers className="h-10 w-10 text-gemba-blue" />
    },
    {
      title: "Demand Forecasting",
      description: "Improve inventory management and production planning with accurate demand predictions.",
      icon: <BarChart4 className="h-10 w-10 text-gemba-blue" />
    },
    {
      title: "Process Optimization",
      description: "Identify the optimal parameters for complex processes to maximize efficiency and output.",
      icon: <Workflow className="h-10 w-10 text-gemba-blue" />
    }
  ];

  const handleAIAssessmentClick = () => {
    window.location.href = "mailto:gembaindonesia@gmail.com?subject=Consultation%20Request%20from%20GEMBA%20Website&body=Hello,%0D%0A%0D%0AI’d%20like%20to%20schedule%20a%20consultation%20to%20discuss%20how%20GEMBA%20can%20help%20improve%20our%20operations.%20Please%20let%20me%20know%20your%20availability.%0D%0A%0D%0AThanks,%0D%0A[Your%20Name]";
  };

  return (
    <ServicePageLayout
      title="Machine Learning Solutions"
      description="Harness the power of artificial intelligence to unlock new levels of process optimization and predictive capabilities."
      imagePath="https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    >
      <div className="space-y-16">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Machine Learning: A Catalyst for Continuous Improvement</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Gemba Indonesia Karya, we help businesses unlock their full potential. Machine learning (ML) is a powerful tool for driving continuous improvement by enabling smarter, data-driven decisions that enhance operational efficiency and elevate customer satisfaction.
          </p>
          <h3 className="text-xl font-semibold mb-3">What is Machine Learning?</h3>
          <p className="text-gray-700 mb-4">
            Machine learning is a branch of artificial intelligence that allows systems to learn from data and make predictions without explicit programming. By analyzing vast amounts of data, ML uncovers patterns and trends that would otherwise be challenging to detect, empowering businesses to optimize processes and anticipate future needs.
          </p>
          <h3 className="text-xl font-semibold mb-3">Machine Learning and Continuous Improvement</h3>
          <p className="text-gray-700 mb-4">
            At the core of every successful transformation is a culture of continuous improvement. Machine learning supports this culture by:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li><strong>Automation of Routine Tasks:</strong> ML streamlines processes, reducing manual work and freeing up resources for more strategic activities.</li>
            <li><strong>Identifying Inefficiencies:</strong> ML analyzes data in real-time, highlighting areas of inefficiency or underperformance, and suggesting actionable improvements.</li>
            <li><strong>Forecasting:</strong> ML excels at predicting future trends based on historical data. Whether it’s demand forecasting, stock levels, or customer behavior, ML gives businesses the foresight to make adjustments before challenges arise.</li>
            <li><strong>Performance Monitoring:</strong> Machine learning enables businesses to track performance over time, allowing for quick course corrections when targets are missed. This feedback loop ensures improvement initiatives stay on track and deliver meaningful results.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-3">Improving Customer Satisfaction with Forecasting</h3>
          <p className="text-gray-700 mb-4">
            Machine learning’s forecasting capabilities play a pivotal role in improving customer satisfaction. By predicting future trends, businesses can:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li><strong>Predict Customer Behavior:</strong> ML analyzes past interactions to forecast customer actions, helping businesses personalize offers, optimize inventory, and improve customer service.</li>
            <li><strong>Anticipate Market Trends:</strong> ML forecasts market shifts, giving businesses the flexibility to adjust their strategies or operations ahead of time, ensuring they stay competitive and responsive to changing needs.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-3">Driving Results through Data-Driven Insights</h3>
          <p className="text-gray-700 mb-4">
            Machine learning doesn’t just automate tasks—it empowers businesses to continually refine their operations. By delivering accurate forecasts and identifying areas for improvement, ML helps businesses stay ahead of the curve, delivering better results and improving the path toward achieving their goals.
          </p>
          <h3 className="text-xl font-semibold mb-3">Conclusion: Machine Learning as a Continuous Improvement Tool</h3>
          <p className="text-gray-700">
            Machine learning is an invaluable asset for businesses committed to continuous improvement. With its ability to forecast trends, automate tasks, and optimize processes, ML helps companies stay agile, improve performance, and meet customer needs with precision. At Gemba Indonesia Karya, we integrate ML into your transformation journey, ensuring that your organization’s full potential is unlocked.
          </p>
        </div>

        {/* Applications */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Machine Learning Applications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">
                    {app.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gemba-blue">{app.title}</h4>
                  <p className="text-gray-600">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Machine Learning Implementation Process</h3>
          <div className="relative">
            {/* Process line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gemba-blue transform -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-5 gap-4 relative z-10">
              <div className="text-center">
                <div className="w-14 h-14 bg-gemba-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">1</div>
                <h4 className="font-semibold mb-1">Data Assessment</h4>
                <p className="text-sm text-gray-600">Evaluate available data sources and quality</p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-gemba-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">2</div>
                <h4 className="font-semibold mb-1">Problem Definition</h4>
                <p className="text-sm text-gray-600">Define specific business objectives</p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-gemba-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">3</div>
                <h4 className="font-semibold mb-1">Model Development</h4>
                <p className="text-sm text-gray-600">Build and train ML algorithms</p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-gemba-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">4</div>
                <h4 className="font-semibold mb-1">Integration</h4>
                <p className="text-sm text-gray-600">Deploy models into workflows</p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-gemba-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">5</div>
                <h4 className="font-semibold mb-1">Continuous Learning</h4>
                <p className="text-sm text-gray-600">Monitor and refine models</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Requirements */}
        <div className="bg-white border rounded-lg p-8">
          <div className="flex items-start mb-6">
            <Database size={32} className="text-gemba-blue mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-3">Data Requirements</h3>
              <p className="text-gray-700">
                Successful machine learning implementations depend on quality data. Our team can
                help you assess your data readiness and develop strategies for data collection
                and preparation.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="border rounded-md p-4">
              <h4 className="font-semibold mb-2">Data Volume</h4>
              <p className="text-gray-600 text-sm">
                We assess whether you have sufficient historical data to train effective models.
              </p>
            </div>

            <div className="border rounded-md p-4">
              <h4 className="font-semibold mb-2">Data Quality</h4>
              <p className="text-gray-600 text-sm">
                We evaluate data accuracy, completeness, and consistency to ensure reliable results.
              </p>
            </div>

            <div className="border rounded-md p-4">
              <h4 className="font-semibold mb-2">Data Infrastructure</h4>
              <p className="text-gray-600 text-sm">
                We help implement the right systems for collecting, storing, and processing data.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to leverage AI for process improvement?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Contact us for a free data readiness assessment to explore how machine learning can transform your operations.
          </p>
          <button
            onClick={handleAIAssessmentClick}
            className="btn-primary inline-block"
          >
            Request AI Assessment
          </button>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default MachineLearningPage;
