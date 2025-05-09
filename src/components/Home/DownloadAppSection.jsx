import React from "react";
import { Check, Smartphone } from "lucide-react";

const DownloadAppSection = () => {
  const features = [
    "Book rides in just a few taps",
    "Track your driver in real-time",
    "Schedule rides in advance",
    "Save favorite destinations",
    "Earn and redeem rewards",
    "Access 24/7 in-app support",
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <div className="bg-green-500/10 absolute -inset-4 rounded-lg blur-xl"></div>
            <div className="relative">
              <div
                className="absolute -right-4 -top-4 bg-gray-800 text-white px-4 py-2 rounded-lg z-10"
                style={{
                  border: "6px solid rgba(21, 243, 102, 0.1)",
                  animation: "subtleGlow 4s ease-in-out infinite",
                  borderRadius: "0.75rem",
                  transition: "border-color 1s ease-in-out",
                  transform: "scale(1)",
                  animation: "subtleGlow 2s ease-in-out infinite",
                }}
              >
                <div className="text-sm">Your ride is arriving!</div>
                <div className="text-green-400 text-xs">ETA: 3 minutes</div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
                alt="IdharUdhar App"
                className="rounded-lg shadow-2xl w-full border-4 border-black dark:border-gray-700"
                style={{
                  position: "relative",
                  border: "6px solid rgba(252, 249, 249, 0.4)", // more transparent white
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.08)", // soft glow
                  filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.1))",
                  borderRadius: "15PX",
                  height:"450PX"
                }}
              />
              <div
                className="absolute -bottom-4 -left-4 bg-gray-800 text-white px-3 py-1 rounded-lg flex items-center"
                style={{
                  border: "6px solid rgba(34, 197, 94, 0.1)",
                  animation: "subtleGlow 4s ease-in-out infinite",
                  borderRadius: "0.75rem",
                  transition: "border-color 1s ease-in-out",
                  transform: "scale(1)",
                  animation: "subtleGlow 2s ease-in-out infinite",
                }}
              >
                <span className="flex items-center">
                  <span className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </span>
                  <span className="ml-1">4.9</span>
                </span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 text-left">
            <div className="flex items-center bg-green-500/20 text-gary dark:text-green-500 px-4 py-2 rounded-full text-sm font-medium mb-4 w-40">
              <Smartphone className="" />
              Mobile App
            </div>
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-6">
              Download the IdharUdhar App for a Seamless Experience
            </h2>
            <p className="dark:text-gray-400 text-lg mb-8">
              Get the full IdharUdhar experience right in your pocket. Our app
              provides real-time tracking, quick booking, multiple payment
              options, and exclusive rewards.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center dark:text-gray-300">
                  <Check className="text-green-500 mr-3 w-5 h-5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="transition-transform hover:scale-105">
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-[85px] w-[80]"
                />
              </a>
              <a href="#" className="transition-transform hover:scale-105">
                <img
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-[60px] w-[60] mt-3"
                />
              </a>
            </div>

            <div className="mt-8 p-4 rounded-lg bg-green-500/10 border border-green-500/50">
              <p className="mb-2 dark:text-gray-400">
                <span className="font-semibold text-black dark:text-white">
                  Driver Partner?
                </span>{" "}
                Download the dedicated driver app to start earning with
                GreenGlide today!
              </p>
              <a
                href="#"
                className="text-green-500 hover:text-green-400 transition-colors"
              >
                Learn more about becoming a partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
