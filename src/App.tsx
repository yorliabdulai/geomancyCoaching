import React, { useState } from 'react';
import {
  BookOpen,
  ShoppingBag,
  GraduationCap,
  ChevronRight,
  Star,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Menu,
  X,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const platforms = [
    {
      title: 'GeomancyCommerce',
      description: 'Shop our collection of divination tools and spiritual merchandise',
      icon: <ShoppingBag className="w-8 h-8" />,
      color: 'from-amber-500 to-amber-600',
      link: 'https://geomancycommerce.com/'
    },
    {
      title: 'GeomancyBlog',
      description: 'Dive into insightful articles and explore the world of geomantic traditions',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      link: 'https://www.geomancyblog.com/'
    },
    {
      title: 'GeomancyEdu',
      description: 'Enroll in expert-led courses to deepen your understanding of geomancy',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-emerald-500 to-emerald-600',
      link: '#edu'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Spiritual Practitioner',
      content: 'GeomancyCoaching has transformed my understanding of ancient divination practices.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      name: 'David Chen',
      role: 'Student',
      content: 'The structured courses on GeomancyEdu made complex concepts accessible and engaging.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      name: 'Emma Thompson',
      role: 'Professional Reader',
      content: 'The quality of products from GeomancyCommerce exceeds all expectations.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150'
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Star className="h-8 w-8 text-amber-600" />
              <span className="ml-2 text-xl font-bold text-slate-800">GeomancyCoaching</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {platforms.map((platform) => (
                <a
                  key={platform.title}
                  href={platform.link}
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {platform.title}
                </a>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-slate-600" />
              ) : (
                <Menu className="h-6 w-6 text-slate-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {platforms.map((platform) => (
                <a
                  key={platform.title}
                  href={platform.link}
                  className="block px-3 py-2 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {platform.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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

      {/* Platforms Section */}
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
                    href={platform.link} target="_blank" rel="noopener noreferrer"
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

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">
            What Our Community Says
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-slate-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Connected with Ancient Wisdom
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Subscribe to receive updates, exclusive offers, and insights into the world of geomancy
          </p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:border-amber-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center text-white mb-4">
                <Star className="h-6 w-6" />
                <span className="ml-2 font-bold">GeomancyCoaching</span>
              </div>
              <p className="text-slate-400 text-sm">
                Bridging ancient wisdom with modern learning through comprehensive platforms for spiritual growth and understanding.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {platforms.map((platform) => (
                  <li key={platform.title}>
                    <a
                      href={platform.link}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {platform.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:contact@geomancycoaching.com"
                    className="text-slate-400 hover:text-white transition-colors flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    contact@geomancycoaching.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} GeomancyCoaching. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;