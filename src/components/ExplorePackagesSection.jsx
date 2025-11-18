import React, { useState } from "react"; 

// Define the functional component directly.
const ExplorePackagesSection = () => {
  // State to manage the active filter
  const [activeFilter, setActiveFilter] = useState('Sexual Health');

  // Data for the filter buttons
  const filters = [
    'Sexual Health',
    "Women's Health",
    "Men's Health",
    'General Health',
    'COVID Test',
    "Children's Health",
  ];

  // Data for the package cards
  const allPackages = [ // Renamed to 'allPackages' for clarity
    {
      title: 'STI Test',
      description: "Looking for peace of mind without the trip to the clinic? Book this at-home STI testing for fast and discreet results, with complimentary doctors' consultation and treatment options available.",
      category: 'Sexual Health',
    },
    {
      title: 'Urinary Tract Infection (UTI)',
      description: "Book this at-home UTI testing for fast and discreet results, with complimentary doctors' consultation and treatment options available.",
      category: "Women's Health",
    },
    {
      title: 'Erectile Dysfunction',
      description: "Erectile Dysfunction can affect men of all ages, but needn't impact your quality of life. Let's help you find the right erectile dysfunction treatment and strength to help support a fulfilling sex life and improve your erectile performance in a way that suits you.",
      category: "Men's Health",
    },
    {
        title: 'Complete Body Checkup',
        description: "A comprehensive health assessment for early detection of potential issues. Includes blood, liver, and kidney function tests.",
        category: 'General Health',
    },
    {
        title: 'COVID-19 PCR Test',
        description: "Accurate and reliable PCR testing for travel or peace of mind. Get your certified results quickly via email.",
        category: 'COVID Test',
    },
    // Added a few more packages for testing the filter logic
  ];

  // Logic to filter packages based on the active filter state
  const filteredPackages = allPackages.filter(pkg => pkg.category === activeFilter);

  // Tailwind classes for the active and inactive buttons
  const activeBtnClass = 'bg-black text-white';
  const inactiveBtnClass = 'bg-gray-100 text-gray-700 hover:bg-gray-200';

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 font-[outfit]">
      {/* Section Header */}
      <h2 className="text-3xl font-light text-gray-900 mb-10 text-center">
        Explore Packages
      </h2>

      {/* Filter/Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            // The onClick correctly sets the activeFilter state
            onClick={() => setActiveFilter(filter)}
            className={`
              px-6 py-2 rounded-full font-medium transition duration-300 ease-in-out
              ${activeFilter === filter ? activeBtnClass : inactiveBtnClass}
            `}
            // The style property here is redundant because of rounded-full tailwind class, but harmless.
            style={{
                borderRadius: '9999px',
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Package Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Use the filteredPackages array here */}
        {filteredPackages.map((pkg, index) => (
          <div
            key={pkg.title || index} // Using pkg.title is a better key than index if titles are unique
            className="p-6 rounded-lg w-[80%] h-full shadow-md border"
            style={{
              // Using style for the specific salmon/peach color
              backgroundColor: 'rgb(255, 230, 220)',
              borderColor: 'rgb(255, 200, 180)',
            }}
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {pkg.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {pkg.description}
            </p>
          </div>
        ))}

        {/* Display a message if no packages match the filter */}
        {filteredPackages.length === 0 && (
            <p className="md:col-span-3 text-center text-gray-500 py-10">
                No packages found for the '{activeFilter}' category.
            </p>
        )}
      </div>
    </div>
  );
};

// Export the component.
export default ExplorePackagesSection;