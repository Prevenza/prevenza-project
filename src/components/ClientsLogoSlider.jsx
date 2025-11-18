// src/components/ClientsLogoSlider.js

import React from 'react';
import Slider from 'react-slick';

// --- Placeholder Logos (Replace these with your actual image imports) ---
const clientLogos = [
  { id: 1, name: 'Google', src: 'path/to/google-logo.png' },
  { id: 2, name: 'Sterling', src: 'path/to/sterling-logo.png' },
  { id: 3, name: 'Access', src: 'path/to/access-logo.png' },
  { id: 4, name: 'Interswitch', src: 'path/to/interswitch-logo.png' },
  { id: 5, name: 'Uber', src: 'path/to/uber-logo.png' },
  { id: 6, name: 'Kempay', src: 'path/to/kempay-logo.png' },
  { id: 7, name: 'Mono', src: 'path/to/mono-logo.png' },
  { id: 8, name: 'MoneyAfrica', src: 'path/to/moneyafrica-logo.png' },
  // Add more logos if you want a longer slide effect
];

const ClientsLogoSlider = () => {
  // Configuration for the Slider component
  const sliderSettings = {
    dots: false,        // Don't show the navigation dots
    infinite: true,     // Loop the logos indefinitely
    slidesToShow: 6,    // Show 6 logos at a time on desktop
    slidesToScroll: 1,  // Slide 1 logo at a time
    autoplay: true,     // Automatically start sliding
    speed: 3000,        // Speed of the transition (3 seconds)
    autoplaySpeed: 0,   // Wait time before the next slide (0 for continuous movement)
    cssEase: "linear",  // Smooth, linear movement for a continuous scroll
    arrows: false,      // Don't show navigation arrows
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } }, // 5 logos on laptops
      { breakpoint: 768, settings: { slidesToShow: 4 } },  // 4 logos on tablets
      { breakpoint: 640, settings: { slidesToShow: 3 } },  // 3 logos on large phones
    ],
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header - "Our Clients" */}
        <h2 className="text-2xl md:text-3xl font-light font-[outfit] text-gray-700 mb-10 text-center tracking-wide">
          Our Partners
        </h2>

        {/* Logo Slider Wrapper */}
        <div className="relative w-full overflow-hidden">
          <Slider {...sliderSettings}>
            {clientLogos.map((logo) => (
              // Each logo item
              <div key={logo.id} className="p-2 md:p-4 flex justify-center items-center h-20">
                {/* NOTE: You will need to replace the placeholder div with your actual image.
                  The logo image should be a PNG/SVG with a transparent background.
                  The opacity and grayscale effects make the logos look sleek and neutral.
                */}
                <img
                  src={logo.src}
                  alt={`${logo.name} Logo`}
                  className="max-h-12 w-auto object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientsLogoSlider;