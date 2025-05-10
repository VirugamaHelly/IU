import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Menu, Moon, Sun, Globe, X, Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import { Link } from 'react-router-dom';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <header className="w-full">
        {/* Top bar - always fixed */}
        <div className="bg-green-700 text-white py-2 px-4 w-full flex justify-between items-center fixed top-0 left-0 z-50">
          <div className="flex items-center space-x-6">
            <a
              href="mailto:support@idharudhar.com"
              className="text-sm flex items-center hover:text-green-200 transition-colors"
            >
              <Mail className="mr-2" size={16} />
              <span className="hidden sm:inline">support@idharudhar.com</span>
              <span className="sm:hidden">Email Us</span>
            </a>
            <a
              href="tel:+919999988888"
              className="text-sm flex items-center hover:text-green-200 transition-colors"
            >
              <Phone className="mr-2" size={16} />
              <span>+91 99999 88888</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-green-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-white hover:text-green-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white hover:text-green-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Main navigation - fixed after scroll */}
        <div
          className={`bg-white text-black dark:bg-gray-900 dark:text-white py-4 px-4 fixed top-9 left-0 w-full z-40 transition-all duration-300 ${scrolled ? "shadow-lg" : ""
            }`}
        >
          <div className="container mx-auto flex justify-between items-center">
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to='/'
                className="font-medium hover:text-green-400 transition-colors"
              >
                Home
              </Link>
              <div className="relative">
                <button
                  className="flex items-center font-medium hover:text-green-400 transition-colors"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-1 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""
                      }`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50">
                    <Link to='/carrides'
                      className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700 transition-colors"
                    >
                      Car Rides
                    </Link>
                    <Link to='/rentals'
                      className="block px-4 py-2 hover:bg-green-200  dark:hover:bg-green-700  transition-colors"
                    >
                      Rentals
                    </Link>
                    <Link to="/Auto_rides"
                      className="block px-4 py-2 hover:bg-green-200  dark:hover:bg-green-700 transition-colors"
                    >
                      Auto Rides
                    </Link>
                    <Link to='/Bike_rides'
                      className="block px-4 py-2 hover:bg-green-200  dark:hover:bg-green-700  transition-colors"
                    >
                      Bike_Rides
                    </Link>
                    <Link to='/Intercity'
                      className="block px-4 py-2 hover:bg-green-200  dark:hover:bg-green-700 transition-colors"
                    >
                      Intercity
                    </Link>

                  </div>
                )}
              </div>
              <a
                href="#"
                className="font-medium hover:text-green-400 transition-colors"
              >
                Safety
              </a>
              <a
                href="#"
                className="font-medium hover:text-green-400 transition-colors"
              >
                About
              </a>
              <div className="relative">
                <button
                  className="flex items-center font-medium hover:text-green-400 transition-colors"
                  onClick={() => setHelpOpen(!helpOpen)}
                >
                  Help
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-1 transition-transform duration-200 ${helpOpen ? "rotate-180" : ""
                      }`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {helpOpen && (
                  <div className="absolute left-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50">
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-green-200  dark:hover:bg-green-700  transition-colors"
                    >
                      FAQs
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-green-200  dark:hover:bg-green-700  transition-colors"
                    >
                      Contact Us
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700 transition-colors"
                    >
                      Support
                    </a>
                  </div>
                )}
              </div>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-green-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={
                  isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                className="p-2 rounded-full hover:bg-green-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Change language"
              >
                <Globe size={20} />
              </button>
              {/*dark:border-gray-700 hover:border-[#0F5729] hover:bg-[#0F5729] hover:text-white bg-white text-black border-gray-300 dark:text-white */}
              <Link to={"/login"}
                className="text-black dark:text-white font-medium px-4 py-2 rounded-md border-gray-300 transition-colors"
              >
                Login
              </Link>

              <Link to='/signup'
                className="w-full bg-green-500 text-white font-medium px-4 py-2 rounded-md text-center hover:bg-green-600 transition-colors"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white p-2 rounded-md hover:bg-gray-700 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 bg-gray-900 z-30 pt-28 px-4 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
        >
          <nav className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-white text-lg font-medium py-2 border-b border-gray-700"
            >
              Home
            </a>
            <details className="group">
              <summary className="text-white text-lg font-medium py-2 border-b border-gray-700 flex justify-between items-center cursor-pointer list-none">
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-open:rotate-180"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </summary>
              <div className="mt-2 ml-4 space-y-2">
                <a href="#" className="block text-white py-2">
                  Bike Ride
                </a>
                <a href="#" className="block text-white py-2">
                  Car Ride
                </a>
                <a href="#" className="block text-white py-2">
                  Auto Ride
                </a>
                <a href="#" className="block text-white py-2">
                  Courier Delivery
                </a>
                <a href="#" className="block text-white py-2">
                  Food Delivery
                </a>
                <a href="#" className="block text-white py-2">
                  Grocery Delivery
                </a>
              </div>
            </details>
            <a
              href="#"
              className="text-white text-lg font-medium py-2 border-b border-gray-700"
            >
              Safety
            </a>
            <a
              href="#"
              className="text-white text-lg font-medium py-2 border-b border-gray-700"
            >
              About
            </a>
            <details className="group">
              <summary className="text-white text-lg font-medium py-2 border-b border-gray-700 flex justify-between items-center cursor-pointer list-none">
                Help
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-open:rotate-180"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </summary>
              <div className="mt-2 ml-4 space-y-2">
                <a href="#" className="block text-white py-2">
                  FAQs
                </a>
                <a href="#" className="block text-white py-2">
                  Contact Us
                </a>
                <a href="#" className="block text-white py-2">
                  Support
                </a>
              </div>
            </details>

            <div className="flex space-x-4 py-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label={
                  isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Change language"
              >
                <Globe size={20} />
              </button>
            </div>


            <div className="flex flex-col space-y-3 mt-4">
              <Link to={"/login"}
                className="text-black dark:text-white font-medium px-4 py-2 rounded-md border-gray-300 transition-colors"
              >
                Login
              </Link>

              <Link to='/signup'
                className="w-full bg-green-500 text-white font-medium px-4 py-2 rounded-md text-center hover:bg-green-600 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </header>
      {/* Spacer to account for fixed headers */}
      <div className="h-[106px]"></div>
    </>
  );
};

export default Header;

