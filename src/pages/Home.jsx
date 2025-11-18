import React from "react";
import Navbar from "../components/Navbar";
import Img1 from "../assets/images/img1.jpg";
import Img2 from "../assets/images/img2.jpg";
import Img3 from "../assets/images/img3.jpg";
import HeroAndPackages from "../components/HeroAndPackages";
import ExplorePackagesSection from "../components/ExplorePackagesSection";
import HowPrevenzaWorks from "../components/HowPrevenzaWorks";
import WhyChooseUs from "../components/WhyChooseUs";
import PersonalizedConsultationCTA from "../components/PersonalizedConsultation";
import ClientsLogoSlider from "../components/ClientsLogoSlider";
import HealthTopicsPreview from "../components/HealthTopicsPreview";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactCTA from "../components/ContactCTA";

// ✅ Main Home Page Component
export default function Home() {
  const handleGetInTouch = () => {
    console.log("Get in touch clicked! Implement navigation or modal here.");
    // Example: navigate('/contact');
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="min-h-[80vh] flex flex-col md:flex-row bg-[#EFF4F8] relative overflow-hidden bg-tartan-pattern">
        {/* LEFT: Text Content */}
        <div className="w-full md:w-1/2 p-10 md:p-16 lg:pl-[10%] flex flex-col justify-center text-black order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Preventive Care That Meets You Where You Are
          </h1>
          <p className="text-lg sm:text-lg max-w-lg mb-8 opacity-90">
            No hospital queues. No delay. Just trusted doctors, quick screenings, and compassionate home care just when you need it.
            Preventive health made simple and convenient.
          </p>
          <div className="flex flex-row gap-2">
            <button
              className="bg-white text-[#c9003c] font-semibold py-3 px-8 rounded-lg shadow-lg w-fit transition duration-300 hover:bg-gray-100 hover:shadow-xl"
              onClick={handleGetInTouch}
            >
              Speak to a Doctor
            </button>
            <button
              className="bg-white text-[#c9003c] font-semibold py-3 px-8 rounded-lg shadow-lg w-fit transition duration-300 hover:bg-gray-100 hover:shadow-xl"
              onClick={handleGetInTouch}
            >
              Request Homecare
            </button>
          </div>
        </div>

        {/* RIGHT: Image Collage */}
        <div className="w-full md:w-1/2 relative h-[350px] md:h-[600px] shrink-0 order-1 md:order-2">
          {/* Image 1 */}
          <div
            style={{
              backgroundImage: `url(${Img1.src ?? Img1})`,
            }}
            className="absolute w-40 h-32 md:w-80 md:h-72 top-4 md:top-14 left-1/2 md:left-1/3 -translate-x-1/2 z-30 rounded-md shadow-2xl bg-cover bg-center custom-clip-path"
          />

          {/* Image 2 */}
          <div
            style={{
              backgroundImage: `url(${Img2.src ?? Img2})`,
            }}
            className="absolute w-32 h-40 md:w-72 md:h-96 top-10 md:top-24 right-4 md:right-12 z-20 rounded-md shadow-2xl bg-cover bg-center"
          />

          {/* Image 3 */}
          <div
            style={{
              backgroundImage: `url(${Img3.src ?? Img3})`,
            }}
            className="absolute w-52 h-24 md:w-[400px] md:h-52 bottom-4 md:bottom-12 left-1/4 z-10 rounded-md shadow-xl bg-cover bg-center"
          />
        </div>
      </section>

      {/* Additional Sections */}
      <HeroAndPackages />
      <ExplorePackagesSection />
      <HowPrevenzaWorks />
      <WhyChooseUs />
      <PersonalizedConsultationCTA />
      <ClientsLogoSlider />
      <HealthTopicsPreview />
      <TestimonialsSection />
      <ContactCTA />
    </div>
  );
}
