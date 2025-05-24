"use client";

import type React from "react";

import { motion } from "motion/react";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  ArrowRight,
  Facebook,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/ZainAshraf005", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/ZainAshraf005", label: "LinkedIn" },
    { icon: Facebook, href: "https://facebook.com/ZainAshraf005", label: "Facebook" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "jzain7345@gmail.com",
      href: "mailto:jzain7345@gmail.com",
    },
    { icon: Phone, text: "+92 322 7290 180", href: "tel:+923227290180" },
    { icon: MapPin, text: "Lahore, PK", href: "#" },
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-30" />

      <motion.div
        className="relative  sm:px-6 lg:px-8 py-12 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            Let&apos;s work <span className="text-glow">together</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Have a project in mind? I&apos;d love to hear about it. Send me a message
            and let&apos;s discuss how we can bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-8"
              variants={itemVariants}
            >
              Send me a message
            </motion.h2>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={itemVariants}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-glow focus:border-glow/50 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-glow focus:border-glow/50 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-glow focus:border-glow/50 transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="What&apos;s this about?"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-glow focus:border-glow/50 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group w-full md:w-auto px-8 py-4 bg-glow text-black font-semibold rounded-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-glow focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div variants={itemVariants} className="space-y-12">
            {/* Contact Information */}
            <div>
              <motion.h2
                className="text-2xl md:text-3xl font-semibold mb-8"
                variants={itemVariants}
              >
                Get in touch
              </motion.h2>

              <motion.div className="space-y-6" variants={itemVariants}>
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="group flex items-center gap-4 p-4 rounded-lg bg-gray-800/30 border border-gray-700 hover:bg-gray-800/50 hover:border-glow/50 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-glow/20 rounded-lg group-hover:bg-glow/30 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-glow" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-glow group-hover:translate-x-1 transition-all duration-300 ml-auto" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <motion.h3
                className="text-xl font-semibold mb-6"
                variants={itemVariants}
              >
                Follow me
              </motion.h3>

              <motion.div className="flex gap-4" variants={itemVariants}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-gray-800/30 border border-gray-700 hover:bg-gray-800/50 hover:border-glow/50 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:text-glow transition-colors duration-300" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Additional Info */}
            <motion.div
              className="p-6 bg-gray-800/30 border border-gray-700 rounded-lg"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold mb-3 text-glow">
                Let&apos;s create something amazing
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I&apos;m always excited to work on new projects and collaborate with
                talented people. Whether you have a clear vision or just an
                idea, I&apos;d love to help bring it to life.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
