import React from 'react';
import { Shield, UserCheck, Truck, Building, Camera, Clock } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Physical Security',
    description: 'Professional security personnel trained to protect your assets and people.',
  },
  {
    icon: Camera,
    title: 'Surveillance Systems',
    description: 'State-of-the-art monitoring and surveillance solutions.',
  },
  {
    icon: Truck,
    title: 'Cash Logistics',
    description: 'Secure transportation and management of valuable assets.',
  },
  {
    icon: Building,
    title: 'Facility Management',
    description: 'Comprehensive security solutions for commercial properties.',
  },
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: 'Round-the-clock security monitoring and rapid response.',
  },
  {
    icon: UserCheck,
    title: 'Access Control',
    description: 'Advanced access management systems for enhanced security.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive security solutions tailored to your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gray-50"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;