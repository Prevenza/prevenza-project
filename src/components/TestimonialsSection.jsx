// src/components/TestimonialsSection.js

import React from 'react';

// Define your testimonial data
const testimonials = [
  {
    id: 1,
    quote: "HealthTracka made it so easy to get my health tests done from home. The results were accurate and delivered on time.",
    author: 'Sarah Johnson',
    location: 'Lagos, Nigeria',
    avatar: 'path/to/sarah-avatar.jpg', // Replace with actual avatar image path
  },
  {
    id: 2,
    quote: "The convenience of home sample collection and the professional service made my experience excellent.",
    author: 'Michael Adebayo',
    location: 'Abuja, Nigeria',
    avatar: 'path/to/michael-avatar.jpg', // Replace with actual avatar image path
  },
  {
    id: 3,
    quote: "Fast, reliable, and affordable. HealthTracka has become my go-to for all health testing needs.",
    author: 'Fatima Ibrahim',
    location: 'Kano, Nigeria',
    avatar: 'path/to/fatima-avatar.jpg', // Replace with actual avatar image path
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-16 text-center tracking-wide">
          Testimonials
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center text-center px-4">
              
              {/* Avatar Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-gray-100 shadow-sm">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.author}'s avatar`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote */}
              <p className="text-lg text-gray-700 leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </p>

              {/* Author and Location */}
              <p className="font-semibold text-gray-900">
                {testimonial.author}
              </p>
              <p className="text-sm text-gray-500">
                {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;