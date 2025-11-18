// src/components/HowPrevenzaWorks.js

import React from 'react';

const HowPrevenzaWorks = () => {
    // Define your feature points
    const features = [
        {
            title: 'Speak to a Doctor',
            description: 'Book a consultation. Speak to a Doctor on Phone or Have a doctor come to your house.',
        },
        {
            title: 'Comfort & Privacy',
            description: 'Experience a quick, professional sample collection in our serene lounge.',
        },
        {
            title: 'Fast, Reliable Results',
            description: 'Get your certified results delivered securely to you within 24-48 hours.',
        },
        {
            title: 'Expert Guidance Included',
            description: 'Every test comes with a free doctor\'s consultation for your peace of mind.',
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-white font-[outfit]">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-12 text-center tracking-wide">
                    How Prevenza Works
                </h2>
                
                {/* Flex Container: Sets layout to Text (Left) and Image (Right) */}
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
                    
                    {/* 1. Text/Features Section (Left) - MOVED TO THE TOP */}
                    <div className="md:w-1/2 space-y-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-gray-700">
                                {/* Styling to match the bold title and light description */}
                                <p className="font-semibold text-gray-900 mb-1 leading-relaxed">
                                    {feature.title}: <span className="font-normal">{feature.description}</span>
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* 2. Image Section (Right) - MOVED TO THE BOTTOM */}
                    <div className="md:w-1/2">
                        {/* The image styling remains responsive and fills its container correctly. */}
                        <img
                            src="https://i.pinimg.com/1200x/fe/78/4b/fe784b99b37e1f12571695560bbe5472.jpg"
                            alt="Healthcare professional checking a patient's blood pressure"
                            className="w-full h-auto rounded-lg shadow-xl object-cover" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowPrevenzaWorks;