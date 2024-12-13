import React from 'react';
import { Star, Mail, Facebook, Twitter, Instagram, Youtube,  } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';


const platforms = [
  { title: 'GeomancyCommerce', link: 'https://www.geomancycommerce.com' },
  { title: 'GeomancyBlog', link: 'https://www.geomancyblog.com' },
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
                    target='_blank'
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
                  href="mailto:support@geomancycoaching.org"
                  className="text-slate-400 hover:text-white transition-colors flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  support@geomancycoaching.org
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@geomancycoaching.org"
                  className="text-slate-400 hover:text-white transition-colors flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  contact@geomancycoaching.org
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://m.facebook.com/profile.php?id=61564145274142&name=xhp_nt_" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://whatsapp.com/channel/0029VayEyK8LSmbduarBog16" target='_blank' className="text-slate-400 hover:text-white transition-colors">
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a href="http://www.youtube.com/@GeomancyCoaching-i3q" target='_blank' className="text-slate-400 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@geomancycoaching?_t=8rlACbATg1v&_r=1" target='_blank' className="text-slate-400 hover:text-white transition-colors">
                <SiTiktok className="w-6 h-6" />
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