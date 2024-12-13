import React from 'react';
import { ScrollText, BookOpen, Users, Calendar } from 'lucide-react';

const services = [
  {
    title: 'Blog Posts',
    description: 'Delve into a wealth of articles that cover a variety of geomancy topics. Our blog posts are designed to expand your understanding and keep you updated with the latest insights and practices in the field.',
    icon: <ScrollText className="w-8 h-8" />,
  },
  {
    title: 'Subscription-Based Courses',
    description: 'Coming soon! Our courses will offer a progressive learning experience with comprehensive lessons, interactive modules, and continuous support to deepen your geomancy expertise.',
    icon: <BookOpen className="w-8 h-8" />,
  },
  {
    title: 'Geomancy Booklets',
    description: 'Explore our selection of geomancy books available for purchase. These booklets provide valuable knowledge and practical tips to enhance your geomancy practice.',
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: 'Private Coaching and Consultation',
    description: 'Receive personalized guidance through our comprehensive consultation services, covering life readings, relationships, career, and more.',
    icon: <Calendar className="w-8 h-8" />,
  },
];

const consultationTypes = [
  'Life Reading', 'Luck', 'Relatives', 'Parents', 'Children',
  'Relationship/Marriage', 'Dreams', 'Journey', 'Workplace',
  'Friendships', 'Obstacles', 'Past Life', 'Present',
  'Future Life', 'Daily Reading', 'Weekly Reading',
  'Monthly Reading', 'Yearly Reading'
];
const coachingTypes = [
  'Life Reading', 'Luck', 'Relatives', 'Parents', 'Children',
  'Marriage', 'Dreams', 'Journey', 'Workplace',
  'Friendships', 'Obstacles', 'Past Life', 'Present',
  'Future Life', 'Daily Reading', 'Weekly Reading',
  'Monthly Reading', 'Yearly Reading'
];

export function Services() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            At Geomancy Coaching, we offer a range of resources to cater to your learning and consulting needs
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                  {service.icon}
                </div>
                <h3 className="ml-4 text-xl font-bold text-slate-900">{service.title}</h3>
              </div>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Consultation Types */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Available Coaching and Consultation Types
          </h3>
          <h4 className="text-lg font-bold text-slate-900 mb-4">Types of Coaching</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {coachingTypes.map((type) => (
              <div
                key={type}
                className="p-4 bg-slate-50 rounded-lg text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200"
              >
                {type}
              </div>
            ))}
          </div>
          <h4 className="text-lg font-bold text-slate-900 mt-8 mb-4">Types of Consultation</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {consultationTypes.map((type) => (
              <div
                key={type}
                className="p-4 bg-slate-50 rounded-lg text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}