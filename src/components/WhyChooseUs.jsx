import React from 'react';


// Define the feature data
const features = [
  {
    title: 'Most Affordable Prices',
    description: 'We provide you the all in one care, ensuring the most competitive prices in the market.',
    // In a real app, you'd use an image component here
    imagePlaceholder: 'Person in orange shirt (Placeholder)',
  },
  {
    title: 'Accredited and Certified Labs',
    description: 'All our test are processed and performed in our highly accredited laboratories.',
    imagePlaceholder: 'Lab equipment icon (Placeholder)',
  },
  {
    title: 'Painless Sample Collection',
    description: 'Our trained phlebotomist will collect your samples at the comfort of your home.',
    imagePlaceholder: 'Hand with glove icon (Placeholder)',
  },
  {
    title: "Free Doctor's Consultation",
    description: 'Get expert consultation available to guide you through your results.',
    imagePlaceholder: 'Doctor in white coat (Placeholder)',
  },
  {
    title: 'Tailored to you and only you',
    description: 'Personalized health recommendations based on your unique health profile and needs.',
    imagePlaceholder: 'Person in red shirt (Placeholder)',
  },
  {
    title: 'Fast, Reliable and Confidential results',
    description: 'Get your results quickly with complete privacy and security.',
    imagePlaceholder: 'Phone/App image (Placeholder)',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 font-[outfit]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Title and Subtitle Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 tracking-wide">
            Why Choose Prevenza?
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-600 mt-2">
            Inspiring Healthy Choices
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start space-y-3">
              {/* Image/Icon Area */}
              {/* NOTE: To perfectly match your design, you'd replace the div below
                 with an <img> tag for the images, styled with rounded and a border. */}
              <div className="flex items-center space-x-4">
                {/* Placeholder for the feature image/icon */}
                {/* Adjust size (w-16 h-16) and border (border-2 border-gray-200) as needed */}
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-700 overflow-hidden">
                    {/*  */}
                    {/* In a real app: <img src={feature.imageUrl} alt={feature.title} className="w-full h-full object-cover" /> */}
                    {feature.imagePlaceholder.split(' ')[0]} {/* Simple text display */}
                </div>
                
                {/* Feature Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;