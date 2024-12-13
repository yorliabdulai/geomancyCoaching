import React from 'react';
import { ShoppingBag, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';

const platforms = [
  {
    title: 'GeomancyCommerce',
    description: 'Shop our collection of divination tools and spiritual merchandise',
    icon: <ShoppingBag className="w-8 h-8" />,
    color: 'from-amber-500 to-amber-600',
    link: 'https://www.geomancycommerce.com'
  },
  {
    title: 'GeomancyBlog',
    description: 'Dive into insightful articles and explore the world of geomantic traditions',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'from-blue-500 to-blue-600',
    link: 'https://www.geomancyblog.com'
  },
  {
    title: 'GeomancyEdu',
    description: 'Enroll in expert-led courses to deepen your understanding of geomancy',
    icon: <GraduationCap className="w-8 h-8" />,
    color: 'from-emerald-500 to-emerald-600',
    link: '#e'
  }
];

export function Platforms() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Platforms</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover the perfect blend of ancient wisdom and modern learning through our three specialized platforms
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.title}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`p-6 bg-gradient-to-r ${platform.color}`}>
                <div className="text-white">{platform.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{platform.title}</h3>
                <p className="text-slate-600 mb-4">{platform.description}</p>
                <a
                  href={platform.link} target='_blank'
                  className="inline-flex items-center text-slate-900 hover:text-slate-700"
                >
                  Learn more <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}