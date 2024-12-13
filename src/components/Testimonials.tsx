import React from 'react';

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

/**
 * A React component that displays a list of testimonials from the GeomancyCoaching community.
 *
 * The component renders a heading with the text "What Our Community Says", followed by a grid of
 * testimonial cards. Each card displays a community member's photo, name, role, and testimonial.
 *
 * The component is designed to be used in a full-width section with a background color.
 *
 * @returns A JSX element representing the Testimonials section.
 */
export function Testimonials() {
  return (
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
  );
}