import React from 'react';
import { Shield, Clock, MapPin, CreditCard, UserPlus, Headphones } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 border dark:border-gray-700 hover:scale-105">
      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-500">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-black dark:text-white mb-3 text-start">{title}</h3>
      <p className="text-gray-400 text-start">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield size={32} />,
      title: "Prioritized Safety",
      description: "Real-time ride tracking, verified drivers, and 24/7 emergency support for worry-free travel."
    },
    {
      icon: <Clock size={32} />,
      title: "On-Time Guarantee",
      description: "We value your time. Schedule rides in advance with our punctuality promise."
    },
    {
      icon: <MapPin size={32} />,
      title: "Available in 500+ Cities",
      description: "Expanding nationwide to provide reliable rides no matter where you are."
    },
    {
      icon: <CreditCard size={32} />,
      title: "Seamless Payments",
      description: "Multiple payment options including cards, UPI, and wallet for hassle-free transactions."
    },
    {
      icon: <UserPlus size={32} />,
      title: "Partner with Us",
      description: "Become a driver partner and earn on your own schedule with competitive incentives."
    },
    {
      icon: <Headphones size={32} />,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is always ready to assist you with any concerns."
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
            Why Choose <span className="text-green-500">Idhar-Udhar</span>
          </h2>
          <p className="text-gray-400 text- max-w-2xl mx-auto">
            We're committed to providing the safest, most reliable, and environmentally conscious ride-sharing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;