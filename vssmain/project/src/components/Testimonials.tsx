import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "SecureGuard has transformed our security operations. Their professional team and advanced solutions have given us complete peace of mind.",
    author: "Mohak",
    position: "Operations Director",
    company: "Tech Innovations Inc."
  },
  {
    content: "The level of service and expertise provided by SecureGuard is unmatched. They've become an invaluable partner in our security strategy.",
    author: "Dharshan",
    position: "Facility Manager",
    company: "Global Commerce Center"
  },
  {
    content: "We've seen a significant improvement in our security metrics since partnering with SecureGuard. Their team is responsive, professional, and thorough.",
    author: "Vineesh",
    position: "Security Director",
    company: "Metropolitan Bank"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by leading organizations worldwide</p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prev}
              className="absolute left-0 z-10 p-2 text-blue-600 hover:text-blue-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div className="max-w-3xl mx-auto px-12">
              <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
                <Quote className="w-12 h-12 text-blue-600 mb-6 mx-auto" />
                <p className="text-xl text-gray-700 mb-8 text-center">
                  {testimonials[currentIndex].content}
                </p>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
                  <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                  <p className="text-blue-600">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>

            <button
              onClick={next}
              className="absolute right-0 z-10 p-2 text-blue-600 hover:text-blue-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
