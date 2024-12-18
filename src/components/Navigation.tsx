import React, { useState } from 'react';
import { Star, Menu, X } from 'lucide-react';

interface Platform {
  title: string;
  link: string;
}

const platforms: Platform[] = [
  { title: 'GeomancyCommerce', link: 'https://www.geomancycommerce.com' },
  { title: 'GeomancyBlog', link: 'https://www.geomancyblog.com' },
  { title: 'GeomancyEdu', link: '#' },
];

/**
 * A React component that displays the navigation bar of the GeomancyCoaching website.
 *
 * The component renders a fixed navigation bar with the GeomancyCoaching logo on the left and
 * a list of links to the GeomancyCommerce, GeomancyBlog, and GeomancyEdu platforms on the right.
 *
 * When the screen size is below the medium breakpoint, the links are hidden and a mobile menu
 * button is displayed. When the button is clicked, the links are displayed in a dropdown menu.
 *
 * @returns A JSX element representing the navigation bar.
 */
export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
                target='_blank'
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
                target='_blank'
                className="block px-3 py-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                {platform.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}