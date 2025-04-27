import React from 'react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, TrendingUp, AlertCircle } from 'lucide-react';

const KPIPage = () => {
  // Sample data for charts
  const performanceData = [
    { name: 'Jan', before: 40, after: 65 },
    { name: 'Feb', before: 45, after: 70 },
    { name: 'Mar', before: 38, after: 72 },
    { name: 'Apr', before: 42, after: 78 },
    { name: 'May', before: 35, after: 85 },
    { name: 'Jun', before: 48, after: 88 }
  ];

  const trendData = [
    { name: 'Week 1', value: 40 },
    { name: 'Week 2', value: 45 },
    { name: 'Week 3', value: 60 },
    { name: 'Week 4', value: 55 },
    { name: 'Week 5', value: 70 },
    { name: 'Week 6', value: 65 },
    { name: 'Week 7', value: 75 },
    { name: 'Week 8', value: 85 }
  ];

  const kpiCategories = [
    {
      title: "Operational KPIs",
      metrics: [
        "Overall Equipment Effectiveness (OEE)",
        "Cycle Time",
        "Lead Time",
        "Throughput",
        "First Pass Yield",
        "Defect Rate"
      ]
    },
    {
      title: "Financial KPIs",
      metrics: [
        "Cost per Unit",
        "Revenue per Employee",
        "Inventory Turns",
        "Return on Investment (ROI)",
        "Cash to Cash Cycle Time",
        "Value Added per Person"
      ]
    },
    {
      title: "Customer KPIs",
      metrics: [
        "On-Time Delivery",
        "Perfect Order Rate",
        "Customer Satisfaction Score",
        "Net Promoter Score (NPS)",
        "Customer Complaint Rate",
        "Customer Retention"
      ]
    }
  ];

  const handleKPIAssessmentClick = () => {
    window.location.href = "mailto:gembaindonesia@gmail.com?subject=Consultation%20Request%20from%20GEMBA%20Website&body=Hello,%0D%0A%0D%0AI'd%20like%20to%20schedule%20a%20consultation%20to%20discuss%20how%20GEMBA%20can%20help%20improve%20our%20operations.%20Please%20let%20me%20know%20your%20availability.%0D%0A%0D%0AThanks,%0D%0A[Your%20Name]";
  };

  return (
    <ServicePageLayout
      title="KPI Performance Management"
      description="Develop and track the right metrics to drive continuous improvement and ensure sustainable results."
      imagePath="/gemba-images/KPI-image.jpg"
    >
      <div className="space-y-16">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">KPI's: Monitoring Success and Driving Results</h2>
          <p className="text-lg text-gray-700 mb-4">
            Once your strategy is in place, the next step is to turn it into measurable actions. This is where Key Performance Indicators (KPIs) come into play. KPIs help you track progress and ensure that you're on the right path to achieving your goals.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            At Gemba Indonesia Karya, we work with you to define the most relevant KPIs, establish a robust measurement system, and implement effective governance to keep everything on track. This ensures that management is always informed, and any deviations from targets can be addressed proactively.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            To help align the entire organization, we often introduce a Balanced Scorecard approach. This ensures that every employee has clearly defined targets that contribute to the overarching company strategy, creating alignment and accountability across all levels.
          </p>

          <h3 className="text-xl font-semibold mb-3">Improvement Projects: Fostering a Culture of Continuous Improvement</h3>
          <p className="text-lg text-gray-700 mb-4">
            Achieving a successful strategy isn't just about setting goals—it's about creating a culture of continuous improvement that drives results at every level.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            At Gemba Indonesia Karya, we guide you through this process, setting up systems to identify and implement improvement initiatives. We ensure that the entire organization—from top management to frontline staff—is trained and equipped to embrace a culture of "never accepting failure".
          </p>
          <p className="text-lg text-gray-700 mb-6">
            By applying well-established tools from Lean and Six Sigma methodologies, we help you embed a mindset of continuous improvement throughout the organization, ensuring sustainable progress and long-term success.
          </p>

          <h3 className="text-xl font-semibold mb-3">Driving Change: Leading Transformation with a Structured Approach</h3>
          <p className="text-lg text-gray-700 mb-4">
            Many transformation initiatives fail due to a lack of focus on the softer issues—things like stakeholder management, communication, and change agents. At Gemba Indonesia Karya, we know that successful change requires more than just operational improvements. It requires a thoughtful, systematic approach to managing people and processes.
          </p>
          <p className="text-lg text-gray-700">
            We apply the Kotter 8-Step Change Model to ensure a structured, strategic approach to driving change. Our consultants, with vast experience across multiple industries, help guide you through this crucial part of the transformation journey, ensuring that the change is not only well-managed but also sustainable.
          </p>
        </div>

        {/* Performance Charts */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Visualizing Performance Improvement</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Before & After Implementation</h4>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={performanceData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="before" name="Before Gemba" fill="#94a3b8" />
                      <Bar dataKey="after" name="After Gemba" fill="#0ea5e9" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Continuous Improvement Trend</h4>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={trendData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#14b8a6"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* KPI Categories */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Key Performance Indicators We Track</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {kpiCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4 text-gemba-blue flex items-center">
                    <TrendingUp size={20} className="mr-2" />
                    {category.title}
                  </h4>
                  <ul className="space-y-2">
                    {category.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle size={16} className="text-gemba-teal mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Our KPI Management Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gemba-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">1</div>
              <h4 className="font-semibold mb-2">Identify</h4>
              <p className="text-gray-600">Determine the most relevant KPIs for your strategic objectives</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gemba-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">2</div>
              <h4 className="font-semibold mb-2">Measure</h4>
              <p className="text-gray-600">Implement systems to accurately capture and report data</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gemba-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">3</div>
              <h4 className="font-semibold mb-2">Analyze</h4>
              <p className="text-gray-600">Interpret data to identify trends and improvement opportunities</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gemba-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">4</div>
              <h4 className="font-semibold mb-2">Improve</h4>
              <p className="text-gray-600">Implement actions and track results in a continuous cycle</p>
            </div>
          </div>
        </div>

        {/* Common Challenges */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Common KPI Challenges We Solve</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <AlertCircle size={20} className="text-gemba-orange mr-2 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Too Many Metrics</h4>
                <p className="text-gray-600">We help you focus on the vital few metrics that truly drive performance.</p>
              </div>
            </div>
            <div className="flex items-start">
              <AlertCircle size={20} className="text-gemba-orange mr-2 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Poor Data Quality</h4>
                <p className="text-gray-600">We implement systems to ensure accurate, consistent data collection.</p>
              </div>
            </div>
            <div className="flex items-start">
              <AlertCircle size={20} className="text-gemba-orange mr-2 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Misaligned Metrics</h4>
                <p className="text-gray-600">We align KPIs with strategic objectives to drive the right behaviors.</p>
              </div>
            </div>
            <div className="flex items-start">
              <AlertCircle size={20} className="text-gemba-orange mr-2 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Limited Visibility</h4>
                <p className="text-gray-600">We design visual management systems to make performance transparent.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to measure what matters?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Let's develop a KPI system that drives meaningful improvement for your organization.
          </p>
          <button
            onClick={handleKPIAssessmentClick}
            className="btn-primary inline-block"
          >
            Get Started with KPI Assessment
          </button>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default KPIPage;
