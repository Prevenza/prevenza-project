// src/components/HealthTopicsPreview.js

import React from 'react';

// Define the article data
const healthArticles = [
  {
    id: 1,
    title: 'Why Every Nigerian Woman Needs An HPV Self-test Kit',
    description: 'One of the most prevalent Sexually Transmitted Infections (STIs) and a major contributor to cervical cancer is the human papillomavirus (HPV).',
    imageUrl: 'path/to/hpv-test-image.jpg', // Placeholder image for the left card
    link: '/article/hpv-self-test',
  },
  {
    id: 2,
    title: '7 Answers To The Most Frequently Asked Questions About Fertility Test For Men',
    description: "The desire to father a child is one shared by many men. But when this is proving difficult after months of trying...",
    imageUrl: 'path/to/fertility-image.jpg', // Placeholder image for the right card
    link: '/article/male-fertility-test',
  },
  // You can add more articles here if you want a larger grid (e.g., 3 columns)
];

const HealthTopicsPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-12 text-center tracking-wide">
          Health & Wellness Topics
        </h2>

        {/* Articles Grid */}
        {/* Uses a 1-column grid on mobile, 2-column on large screens, or center the cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 justify-items-center">
          
          {healthArticles.map((article) => (
            <div 
              key={article.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 max-w-lg w-full"
            >
              <div className="flex flex-col md:flex-row p-4 md:p-6 items-stretch">
                
                {/* Article Image (Left) */}
                {/* The size and positioning here are key to matching the original layout */}
                <div className="w-full md:w-2/5 md:pr-4 mb-4 md:mb-0 shrink-0">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    // 'aspect-square' or 'h-full' with 'object-cover' helps contain the image
                    className="w-full h-40 md:h-full object-cover rounded-lg" 
                  />
                </div>
                
                {/* Article Content (Right) */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                  
                  {/* Read More Button */}
                  <a 
                    href={article.link} 
                    className="w-fit px-4 py-2 text-sm text-white font-medium rounded-full bg-teal-600 hover:bg-teal-700 transition duration-300 mt-2"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
        
        {/* Centralized CTA Button for more tips */}
        <div className="text-center mt-16">
          <button
            className="px-6 py-3 text-sm font-medium rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition duration-300"
            // Add your onClick handler here to navigate to the main blog page
          >
            Read more health tips
          </button>
        </div>
      </div>
    </section>
  );
};

export default HealthTopicsPreview;