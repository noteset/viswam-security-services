import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://unsplash.com/photos/x8ZStukS2PM")',
      }}
      
    >
      {/* Background Overlay with Subtle Animation */}
      <div
        className="absolute inset-0 bg-black opacity-30 animate-pulse"
        style={{ zIndex: 1 }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Title Animation */}
        <h1
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Your Trusted <span className="text-blue-400">Security</span> Partner
        </h1>

        {/* Subtitle Animation */}
        <p
          className="text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          Protecting what matters most with advanced security solutions and professional expertise
        </p>

        {/* Call-to-Actions with Animations */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="600"
        >
          <a
            href="#contact"
            className="relative inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:scale-105 transform transition-transform duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#services"
            className="relative inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 hover:scale-105 transform transition-transform duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* SVG Divider with Animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="animate-wiggle w-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#fff"
            d="M0 160C160 160 640 0 1440 0V320H0V160Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
