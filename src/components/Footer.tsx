import React from 'react';
import { Star, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const platforms = [
  { title: 'GeomancyCommerce', link: '#commerce' },
  { title: 'GeomancyBlog', link: '#blog' },
  { title: 'GeomancyEdu', link: '#edu' }
];

export function Footer() {
  return (
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
  );
}