import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonial = ({ image, name, role, rating, quote }) => {
  return (
    <div className="relative bg-white dark:bg-[#1F2937] rounded-2xl p-6 transition-all duration-300 border dark:border-gray-700 shadow-lg transform hover:scale-105">
      
      {/* Half Circle Decorative Element */}
      <div
        className="absolute top-0 right-0 w-20 h-20 bg-[#DCFCE7] dark:bg-[#10211F] rounded-bl-full"
      />

      <div className="flex items-start mb-4 relative z-10">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-green-500 mr-4 mt-1"
        />
        <div>
          <h4 className="text-lg font-semibold text-black dark:text-white text-start">{name}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm text-start">{role}</p>
          <div className="flex mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <Quote className="absolute top-4 right-4 text-green-500 w-6 h-6 opacity-50 z-10" />

      <p className="text-green-nexus-200 dark:text-gray-300 italic text-sm leading-relaxed relative z-10 text-start">
        {quote}
      </p>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Priya Sharma",
      role: "Regular Commuter",
      rating: 5,
      quote: "IdharUdhar has transformed my daily commute. The drivers are always on time, and the cars are immaculate. I feel safe and comfortable every ride."
    },
    {
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Rahul Kapoor",
      role: "Business Executive",
      rating: 5,
      quote: "As someone who travels for work regularly, I rely on IdharUdhar for reliable intercity rides. Their corporate service is unmatched - professional drivers and excellent customer support."
    },
    {
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Ananya Patel",
      role: "College Student",
      rating: 4,
      quote: "The bike rides are perfect for my quick trips to college. Affordable and quick, especially during rush hour. The app is super easy to use and the rewards system is great!"
    },
    {
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Vikram Singh",
      role: "Entrepreneur",
      rating: 5,
      quote: "I appreciate the focus on green transportation. As someone who cares about environmental impact, I choose IdharUdhar over other services. The electric vehicle options are wonderful."
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-[#1F2937]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">What Our Riders Say</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our riders have to say about their IdharUdhar experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              role={testimonial.role}
              rating={testimonial.rating}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
