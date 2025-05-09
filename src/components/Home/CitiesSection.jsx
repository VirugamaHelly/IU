import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const CitiesSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad",
    "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal"
  ];

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">Available in 500+ Cities</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Book your ride anywhere in the country with our extensive coverage. We're rapidly expanding to reach every corner.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-10">
          <div className="relative rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-green-500 transition-shadow duration-300">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for a city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white dark:bg-[#020817] w-full dark:text-white rounded-full py-3 pl-10 pr-4 focus:outline-none"
              style={{  border: '1px solid gray' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center mb-8">
          {filteredCities.map((city, index) => (
            <a
              key={index}
              href="#"
              className="relative dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2 rounded-md group flex items-center justify-center"
            >
              <span>{city}</span>
              <span className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-2xl bg-green-500 flex items-center justify-center ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <MapPin size={16} className="text-white" />
              </span>
              <div className="absolute inset-0 bg-transparent group-hover:bg-green-500/10 rounded-md"></div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="w-full inline-flex items-center justify-center bg-green-500 hover:bg-transparent transition-colors text-white font-medium rounded-full px-6 py-3 border border-green-500 hover:text-green-500"
          >
            View All Cities
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
