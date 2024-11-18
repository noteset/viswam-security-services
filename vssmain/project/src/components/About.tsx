import React from 'react';
import { CheckCircle, Clock, ArrowRightCircle } from 'lucide-react';

// Sample founder data with images and descriptions
const founders = [
  {
    name: 'Hansika',
    role: 'Co-Founder & CEO',
    imageUrl: './1photo.png',
    bio: 'Hansika is the visionary leader behind SecureGuard, shaping the company\'s growth and technological innovation.'
  },
  {
    name: 'Rahul dev',
    role: 'Co-Founder & CTO',
    imageUrl: '/2photo.png',
    bio: 'Rahul dev drives SecureGuard\'s technological advancements, implementing cutting-edge security solutions.'
  },
  {
    name: 'Harshita',
    role: 'Co-Founder & COO',
    imageUrl: './3photo.jpg',
    bio: 'Harshitha oversees day-to-day operations, ensuring the company runs smoothly and delivers exceptional security services.'
  }
];

const milestones = [
  {
    year: 1998,
    title: 'Company Founded',
    description: 'SecureGuard was established with a vision to revolutionize security services.'
  },
  {
    year: 2005,
    title: 'National Expansion',
    description: 'Expanded operations to cover all major cities across the country.'
  },
  {
    year: 2010,
    title: 'Technology Integration',
    description: 'Launched state-of-the-art monitoring and surveillance systems.'
  },
  {
    year: 2015,
    title: 'International Growth',
    description: 'Established presence in key international markets.'
  },
  {
    year: 2020,
    title: 'Digital Transformation',
    description: 'Implemented AI-powered security solutions and analytics.'
  }
];

const values = [
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of professional ethics and transparency.'
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our security services.'
  },
  {
    title: 'Innovation',
    description: 'We continuously evolve and adapt to emerging security challenges.'
  },
  {
    title: 'Reliability',
    description: 'We deliver consistent, dependable security solutions 24/7.'
  }
];

const About = () => {
  return (
    <div id="about" className="pt-16">
      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About SecureGuard</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the industry in innovative security solutions and professional excellence since 1998.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide unparalleled security services through innovation, expertise, and unwavering commitment to our clients' safety and peace of mind.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in security solutions, setting industry standards for excellence, innovation, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Founders</h2>
            <p className="text-xl text-gray-600">The visionaries behind SecureGuard</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={founder.imageUrl}
                  alt={founder.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                <p className="text-xl text-blue-600">{founder.role}</p>
                <p className="text-gray-600 mt-4">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Driving Innovation in Security</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At SecureGuard, we are committed to staying ahead of the curve by integrating cutting-edge technologies and forward-thinking approaches to secure your world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-xl">
              <ArrowRightCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Surveillance</h3>
              <p className="text-gray-600">
                Our AI-driven surveillance solutions analyze real-time data to detect anomalies, ensuring proactive responses to potential threats before they escalate.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-xl">
              <ArrowRightCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IoT Integration</h3>
              <p className="text-gray-600">
                Through seamless IoT integration, we provide smarter, connected security systems that offer better monitoring, control, and responsiveness.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-xl">
              <ArrowRightCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-600">
                We leverage big data and predictive analytics to anticipate security threats, optimizing your security infrastructure for greater safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones that shaped our success</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="flex-none">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow md:pt-4">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.year}</h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'What types of security services do you offer?',
                answer: 'We offer a comprehensive range of security services including physical security, surveillance systems, cash logistics, facility management, and access control solutions.'
              },
              {
                question: 'Are your security personnel licensed and insured?',
                answer: 'Yes, all our security personnel are fully licensed, insured, and undergo rigorous training programs to maintain the highest standards of professionalism.'
              },
              {
                question: 'Do you provide 24/7 security services?',
                answer: 'Yes, we provide round-the-clock security services with dedicated teams available 24/7 to respond to any security concerns.'
              },
              {
                question: 'How quickly can you respond to security incidents?',
                answer: 'Our rapid response teams are strategically positioned to ensure immediate response to security incidents, typically within minutes of notification.'
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-lg shadow-sm group"
              >
                <summary className="list-none cursor-pointer p-6 flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className="ml-6 flex-shrink-0 text-blue-600">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
