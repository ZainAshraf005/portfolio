/** @format */

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaHackerrank,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="border-t border-zinc-600 text-white py-8"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Contact Info */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold">Contact Me</h2>
          <p className="text-gray-400">Email: jzain7344@gmail.com</p>
          <p className="text-gray-400">Phone: +92 322 7290180</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <Link
            href="https://facebook.com/zainashraf005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-all"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            href="https://hackerrank.com/zainashraf005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all"
          >
            <FaHackerrank size={24} />
          </Link>
          <Link
            href="https://linkedin.com/zainashraf005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-all"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="https://github.com/zainashraf005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-all"
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} M.ZainAshraf. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
