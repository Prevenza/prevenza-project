// src/components/PersonalizedConsultationCTA.js (or wherever you put this component)

import React from 'react';

const PersonalizedConsultationCTA = () => {
    return (
        // Main container with padding and a background to make it stand out
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Card-like container to hold the image and text */}
                <div className="bg-gray-100 rounded-xl overflow-hidden shadow-2xl">

                    <div className="flex flex-col md:flex-row items-stretch">

                        {/* Image Section (Left) - Takes about 60% of the width on desktop */}
                        <div className="md:w-3/5 relative min-h-[300px] md:min-h-full">
                            {/* Replace 'path/to/your/image.jpg' with your actual image path */}
                            <img
                                src="path/to/your/image.jpg"
                                alt="Woman holding a tablet with a doctor on screen"
                                className="w-full h-full object-cover"
                            />
                            {/* Optional: Add a dark overlay if your text is bright or to match the subtle shading */}
                            <div className="absolute inset-0 bg-black opacity-10"></div>
                        </div>

                        {/* Text & CTA Section (Right) - Takes about 40% of the width on desktop */}
                        {/* The 'flex-1' on the div below ensures it fills the remaining space */}
                        <div className="md:w-2/5 flex flex-col justify-center p-8 md:p-12 lg:p-16">

                            {/* Heading */}
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 tracking-tight">
                                Know the most appropriate lab tests for you
                            </h2>

                            {/* Body Text (Incorporating your specific request) */}
                            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                                Prevenza provides personalized screening and group screenings. Labs test made simple by Prevenza in the comfort of your home. Get personalized test recommendations based on your health profile and concerns. Our expert team will guide you to the right tests for your specific needs.
                            </p>

                            {/* Call-to-Action Button */}
                            <button
                                className="bg-white text-[#c9003c] font-semibold py-3 px-8 rounded-lg shadow-lg w-fit transition duration-300 hover:bg-gray-100 hover:shadow-xl"
                            // onClick={handleGetInTouch}
                            >
                                Book a Screening
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PersonalizedConsultationCTA;