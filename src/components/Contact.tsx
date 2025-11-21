"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-white via-yellow-50/30 to-amber-50/20 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Rotating Spotlight Effects */}
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-xl"
          style={{
            background:
              "radial-gradient(circle, rgba(254, 240, 138, 0.4) 0%, rgba(254, 249, 195, 0.3) 40%, transparent 70%)",
          }}
          animate={{
            x: ["-20%", "120%", "-20%"],
            y: ["-10%", "110%", "-10%"],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-lg"
          style={{
            background:
              "radial-gradient(circle, rgba(253, 224, 71, 0.3) 0%, rgba(254, 240, 138, 0.2) 50%, transparent 80%)",
          }}
          animate={{
            x: ["100%", "-30%", "100%"],
            y: ["80%", "-20%", "80%"],
            rotate: [360, 0, -360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/60 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 border-2 border-yellow-300/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-16 h-16 bg-yellow-200/20 transform rotate-45"
          animate={{ rotate: [45, 225, 45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to experience luxury? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-purple-600 text-2xl mr-4">📍</div>
                <div>
                  <h4 className="font-bold text-gray-800">Our Location</h4>
                  <p className="text-gray-600">123 Luxury Street, Beauty City, BC 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-purple-600 text-2xl mr-4">📞</div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone Number</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-purple-600 text-2xl mr-4">✉️</div>
                <div>
                  <h4 className="font-bold text-gray-800">Email Address</h4>
                  <p className="text-gray-600">info@luxuryspa.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-purple-600 text-2xl mr-4">🕒</div>
                <div>
                  <h4 className="font-bold text-gray-800">Working Hours</h4>
                  <p className="text-gray-600">Monday-Friday: 9AM - 8PM</p>
                  <p className="text-gray-600">Saturday-Sunday: 10AM - 6PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="hair">Hair Styling</option>
                  <option value="spa">Spa Treatments</option>
                  <option value="nails">Nail Care</option>
                  <option value="waxing">Waxing</option>
                  <option value="makeup">Makeup Artistry</option>
                  <option value="body">Body Treatments</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us about your needs..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;