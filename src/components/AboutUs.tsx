import React from 'react';

/**
 * A React component that displays the About Us section of the homepage.
 *
 * The section contains a heading and two paragraphs of text. The first paragraph
 * provides a brief overview of the Geomancy Coaching platform, including its
 * resources and goals. The second paragraph provides a more detailed description
 * of the platform's mission to become the leading source of geomancy knowledge and
 * application.
 *
 * @returns A JSX element representing the About Us section of the homepage.
 */
export function AboutUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">About Us</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-slate-600 mb-6">
              Geomancy Coaching is an innovative online platform dedicated to educating individuals about the ancient science 
              of geomancy. The platform offers a range of resources, including blog posts, subscription-based courses, private 
              consultations, and Geomancy Booklets.
            </p>
            <p className="text-slate-600">
              Geomancy Coaching aims to become the leading source of geomancy knowledge and application, blending historical 
              wisdom with modern technology to guide users in their personal and spiritual growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}