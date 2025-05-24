"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink, Calendar, CheckCircle, Search } from "lucide-react";
import { myCertifications } from "@/data/data";
import Image from "next/image";

export default function CertificationsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample certifications data
  const certifications = myCertifications;

  const filteredCertifications = certifications.filter((cert) => {
    const matchesSearch =
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesSearch;
  });

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-30" />

      <motion.div
        className="relative sm:px-6 md:px-8 pb-12 md:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h1
            className="text-4xl  md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            My <span className="text-glow">Certifications</span>
          </motion.h1>
          <motion.p
            className="text-lg  text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            A showcase of my professional certifications and achievements in
            various technologies and platforms. Continuously learning and
            staying updated with the latest industry standards.
          </motion.p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-col gap-6 items-start md:items-center justify-between">
            {/* Category Filters */}
            {/* <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? "bg-glow text-black"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Filter className="w-4 h-4" />
                  {category.name}
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category.id
                        ? "bg-black/20"
                        : "bg-gray-700"
                    }`}
                  >
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div> */}

            {/* Search */}
            <div className="relative w-full ">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-glow focus:border-glow/50 transition-all duration-300 text-white placeholder-gray-400"
              />
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-1  md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {filteredCertifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className="group bg-gray-800/30 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 hover:border-glow/50 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              {/* Certificate Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    width={100}
                    height={100}
                    src={cert.image || "/placeholder.svg"}
                    alt={`${cert.issuer} logo`}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white group-hover:text-glow transition-colors duration-300 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500 text-sm">{cert.date}</span>
                    {cert.status === "active" && (
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-xs">Active</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.slice(0, 4).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-glow/20 text-glow text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 4 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded-md">
                      +{cert.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Expiry Date */}

              {/* Verification Link */}
              {cert.verificationUrl && (
                <motion.a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-glow hover:text-yellow-300 transition-colors duration-300 text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  Verify Certificate
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredCertifications.length === 0 && (
          <motion.div variants={itemVariants} className="text-center py-16">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              No certifications found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-2 -4 gap-6"
        >
          <div className="text-center p-6 bg-gray-800/30 border border-gray-700 rounded-lg">
            <div className="text-3xl font-bold text-glow mb-2">
              {certifications.length}
            </div>
            <div className="text-gray-400 text-sm">Total Certifications</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 border border-gray-700 rounded-lg">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {certifications.filter((c) => c.status === "active").length}
            </div>
            <div className="text-gray-400 text-sm">Active Certifications</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 border border-gray-700 rounded-lg">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {new Set(certifications.map((c) => c.category)).size}
            </div>
            <div className="text-gray-400 text-sm">Technology Areas</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 border border-gray-700 rounded-lg">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {new Set(certifications.map((c) => c.issuer)).size}
            </div>
            <div className="text-gray-400 text-sm">Issuing Organizations</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
