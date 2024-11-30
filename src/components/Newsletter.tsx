import React, { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
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
  );
}