import React, { useState } from "react"; 

// The component function should be defined directly and then exported.
// Remove the outer 'export default function HeroAndPackages() { ... }' wrapper.
const HeroAndPackages = () => {
    // Data for the main package cards (Top Selling)
    const packages = [
      { name: "Domestic Staff Test (Basic)", price: "GH₵35,00" },
      { name: "Pre-Wedding Test (Eros) Male", price: "GH₵50,00" },
      { name: "Lemonade", price: "GH₵90,00" },
      { name: "Full Body Checkup Bronze", price: "GH₵40,00" },
    ];
  
    // You aren't using 'useState' in this version, but it's fine to keep the import if you plan to add state later.
    
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 font-[display]">
        {/* Breadcrumb: Home > Book Test > Self */}
        {/* <div className="text-lg text-gray-500 mb-8 font-[outfit]">
          <span>Home &gt; Book Test &gt; Self</span>
        </div> */}
  
        {/* Main Content: Two-Column Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column: Hero Text and Button */}
          <section className="pr-8">
            <h1 className="text-5xl font-extrabold font-[outfit] text-gray-900 leading-tight mb-6">
              Your Trusted Preventive Health Partner
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Get reliable medical screenings through our convenient on-site community outreaches, private walk-in points, or discreet in-home service. From basic checks to full wellness assessments, every screening is backed by a team of certified healthcare professionals — with a free doctor consultation to help you understand your results and take the right next step.
            </p>
            {/* Book Now Button (using teal-600 for the green brand color) */}
            <button
              className="bg-white text-[#c9003c] font-semibold py-3 px-8 rounded-lg shadow-lg w-fit transition duration-300 hover:bg-gray-100 hover:shadow-xl"
              // onClick={handleGetInTouch}
            >
              Book a Screening
            </button>
          </section>
  
          {/* Right Column: Package Selection - Gray background block */}
          <section className="bg-[#ECF0F6] p-6 rounded-lg">
            <h2 className="text-base font-semibold text-gray-800 mb-4">
              Choose a Package from one of our top selling
            </h2>
  
            <div className="space-y-3">
              {/* Package Cards */}
              {packages.map((pkg, index) => (
                <div
                  key={index} // Note: Using index as a key is discouraged if list items can be reordered or removed. A unique ID from the data would be better.
                  className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 hover:border-teal-400 transition duration-200"
                >
                  <span className="text-base font-medium text-gray-700">{pkg.name}</span>
                  <span className="text-base font-bold text-teal-600">{pkg.price}</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    );
};

// Export the component.
export default HeroAndPackages;