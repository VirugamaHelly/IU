import React from 'react';
import { Car } from 'lucide-react';

const Logo = () => {
  return (
    <a href="#" className="flex items-center space-x-2 text-white">
      <Car className="h-8 w-8 text-green-500" />
      <span className="text-xl font-bold text-green-500">
        <span className="text-green-500">Idhar</span>Udhar
      </span>
    </a>
  );
};

export default Logo;
