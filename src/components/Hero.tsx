import React from 'react';
import { ShoppingBag, BookOpen, GraduationCap } from 'lucide-react';

const platforms = [
  {
    title: 'GeomancyCommerce',
    icon: <ShoppingBag className="w-8 h-8" />,
    color: 'from-amber-500 to-amber-600',
    link: 'https://www.geomancycommerce.com'
  },
  {
    title: 'GeomancyBlog',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'from-blue-500 to-blue-600',
    link: 'https://www.geomancyblog.com'
  },
  {
    title: 'GeomancyEdu',
    icon: <GraduationCap className="w-8 h-8" />,
    color: 'from-emerald-500 to-emerald-600',
    link: '#edu'
  }
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://digitalambler.com/wp-content/uploads/2019/04/raml_lines.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Your Gateway to Ancient Wisdom and Modern Learning in Geomancy
        </h1>
        <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto">
          Explore our comprehensive platforms to shop, learn, and engage with the art of geomancy
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {platforms.map((platform) => (
            <a
              key={platform.title}
              href={platform.link}
              className={`inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r ${platform.color} text-white hover:opacity-90 transition-opacity`}
            >
              {platform.icon}
              <span className="ml-2">Explore {platform.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}