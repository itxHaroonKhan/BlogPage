import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Font Awesome CSS شامل کریں

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-800">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          {/* Copyright Section */}
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Haroon Rasheed —
            <a
              href="https://twitter.com/yourtwitter"
              className="text-gray-400 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @HaroonRasheed
            </a>
          </p>

          {/* Social Media Links */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://twitter.com/HaroonRasheed"
              className="text-gray-400 hover:text-indigo-500 mx-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter w-6 h-6"></i> {/* Twitter Icon */}
            </a>
            <a
              href="https://www.instagram.com/HaroonRasheed"
              className="text-gray-400 hover:text-indigo-500 mx-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram w-6 h-6"></i> {/* Instagram Icon */}
            </a>
            <a
              href="https://www.linkedin.com/in/HaroonRasheed"
              className="text-gray-400 hover:text-indigo-500 mx-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin w-6 h-6"></i> {/* LinkedIn Icon */}
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
