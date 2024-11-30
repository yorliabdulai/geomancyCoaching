import React from 'react';
import { Navigation } from './components/Navigation';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Hero } from './components/Hero';
import { Platforms } from './components/Platforms';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />
      <AboutUs />
      <Services />
      <Platforms />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;