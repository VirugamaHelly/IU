import React from "react";
import { MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-green-800 text-white pt-16 pb-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* LEFT SIDE - Text and Form */}
          <div className="max-w-xl text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-white">The Future of</span>
              <span className="block text-green-300">Ride Sharing</span>
              <span className="block text-white">is Green &</span>
              <span className="block text-white">Sustainable</span>
            </h1>
            <p className="text-lg mb-8 max-w-xl">
              Experience seamless, eco-friendly rides at your fingertips.
              Idhar-Udhar connects you with reliable drivers in over 500+ cities
              nationwide.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full max-w-ld border-0.5">
              <div className="mb-4">
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400"
                    size={20}
                  />
                  <input
                    type="text"
                    id="pickup"
                    placeholder="Enter pickup location"
                    className="w-full bg-white/20 backdrop-blur-sm text-white placeholder-gray-300 rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400"
                    size={20}
                  />
                  <input
                    type="text"
                    id="destination"
                    placeholder="Enter destination"
                    className="w-full bg-white/20 backdrop-blur-sm text-white placeholder-gray-300 rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
              </div>

              <button className="w-full bg-green-500 hover:bg-green-600 transition-colors text-white font-medium rounded-md py-3">
                Find Rides
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - Image and Info */}
          <div className="relative w-full h-full">
            {/* 🟢 Bottom-Left Circle - Behind Image */}
            <div className="absolute bottom-[-40px] left-[-40px] w-[120px] h-[120px] bg-[#5BA79D] rounded-full opacity-50 z-0 animate-pulse-custom"></div>

            {/* 🟢 Top-Right Circle - Above Image */}
            <div className="absolute top-[-40px] right-[-40px] w-[120px] h-[120px] bg-[#5BA79D] rounded-full z-20 animate-pulse-custom" />

            {/* 🌄 Image Block */}
            <div className="relative rounded-xl overflow-hidden shadow-lg z-10">
              <img
                src="https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=800&auto=format&fit=crop&q=60"
                alt="Luxury car"
                className="object-cover w-full h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-800/40 to-transparent"></div>

              <div className="absolute bottom-4 left-4 p-4 text-white w-[550px]">
                <div className="mb-3">
                  <div className="flex items-center mb-1">
                    <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4">
                      G
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        IdharUdhar Premium
                      </h3>
                      <p className="text-xs text-green-300">
                        Electric Luxury Experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">Starting at</p>
                    <p className="text-2xl font-bold">₹199</p>
                  </div>
                  <button className="text-base bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
