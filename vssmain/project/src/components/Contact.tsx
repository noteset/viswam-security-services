import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { text: "Hello! How can I help you today?", isBot: true }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setChatMessages([...chatMessages, { text: message, isBot: false }]);
      // Simulate bot response
      setTimeout(() => {
        setChatMessages(prev => [...prev, {
          text: "Thanks for your message! Our team will get back to you soon.",
          isBot: true
        }]);
      }, 1000);
      setMessage('');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600">We're here to help with your security needs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-lg shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564756836!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+91 7093945841</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600">info@secureguard.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-600">viswam security , hyderabad</p>
          </motion.div>
        </div>
      </div>

      {/* Chatbot Widget */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <MessageSquare className="w-6 h-6" />
        </button>

        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl"
          >
            <div className="p-4 bg-blue-600 text-white rounded-t-lg">
              <h3 className="font-semibold">Chat with us</h3>
            </div>
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;