// src/components/ContactCTA.js

import React from 'react';
// Assuming you are using an icon library like 'react-icons' for these components
// import { FiPhone, FiMail, FiMessageCircle } from 'react-icons/fi'; 

// Define the contact methods (Keep this data the same)
const contactMethods = [
  {
    icon: 'Call', 
    title: 'Call Us',
    details: '+234 800 123 4567',
    link: 'tel:+2348001234567',
  },
  {
    icon: 'Email', 
    title: 'Email Us',
    details: 'prevenza@gmail.com',
    link: 'mailto:prevenza@gmail.com',
  },
  {
    icon: 'Chat', 
    title: 'Live Chat',
    details: 'Available 24/7',
    link: '#chat-widget',
  },
];

const ContactCTA = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Updated for Centering: 
            1. Retain max-w-4xl. 
            2. Use mx-auto to center the block horizontally on ALL screen sizes. 
            3. Use text-center to center the title and paragraph.
        */}
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 tracking-tight">
            Got Questions?
          </h2>
          
          {/* Description - Use mx-auto to center the block-level paragraph with a max width */}
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Our team of healthcare professionals is here to help answer any questions you may have about our tests, procedures, or results.
          </p>

          {/* Contact List - Use flex-col and items-center to center the list elements */}
          <div className="space-y-6 flex flex-col items-center">
            {contactMethods.map((method, index) => (
              <div key={index} className="flex items-center space-x-4">
                
                {/* Icon Circle (Teal color) */}
                <a href={method.link} className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-teal-600/10 flex items-center justify-center">
                    {/* Placeholder for Icon */}
                    <span className="text-sm text-teal-600">{method.icon.charAt(0)}</span> 
                  </div>
                </a>
                
                {/* Contact Details */}
                <div className="text-gray-700 text-left"> {/* Force text-left here to keep details aligned */}
                  <p className="font-semibold">{method.title}</p>
                  <a 
                    href={method.link} 
                    className="text-gray-600 hover:text-teal-600 transition duration-150"
                  >
                    {method.details}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;