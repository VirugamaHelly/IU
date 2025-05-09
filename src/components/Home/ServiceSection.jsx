import React from 'react';
import { Bike, Car, Truck, Package, UtensilsCrossed, ShoppingBag } from 'lucide-react';

const ServiceCard = ({ icon, title, description, image }) => {
    return (
        <div className="group relative w-full max-w-[280px] h-[180px] rounded-xl overflow-hidden shadow-md mx-auto">
            <img
                src={image}
                alt={title}
                className="w-full h-[160px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-start p-4">
                <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center mb-3 mt-0 text-green-500">
                    {icon}
                </div>
                <h3 className="text-lg font-semibold text-white text-start">{title}</h3>
                <p className="text-sm text-gray-300 text-start">{description}</p>
            </div>
        </div>
    );
};

const ServiceSection = () => {
    const services = [
        {
            icon: <Bike size={32} />,
            title: "Bike Ride",
            description: "Quick & affordable bike rides",
            image: "https://images.unsplash.com/photo-1543168256-418811576931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
        },
        {
            icon: <Car size={32} />,
            title: "Car Ride",
            description: "Comfortable sedans for daily commute",
            image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
        },
        {
            icon: <Truck size={32} />,
            title: "Auto Ride",
            description: "Convenient three-wheeler auto rides",
            image: "https://ethnomarginalia.com/wp-content/uploads/2021/03/img_4461_original.jpg?w=1600&h=600&crop=1"
        },
        {
            icon: <Package size={32} />,
            title: "Courier Delivery",
            description: "Fast & secure package delivery",
            image: "	https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
        },
        {
            icon: <UtensilsCrossed size={32} />,
            title: "Food Delivery",
            description: "Deliver food from restaurants to doorstep",
            image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
        },
        {
            icon: <ShoppingBag size={32} />,
            title: "Grocery Delivery",
            description: "Convenient grocery delivery to your home",
            image: "https://images.unsplash.com/photo-1543168256-418811576931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
        }
    ];

    return (
        <section className="py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">What service do you need today?</h2>
                    <p className="text-gray-400 text-sm max-w-xl mx-auto">Choose a service to get started with your booking</p>
                </div>
                <div className="flex flex-wrap justify-start gap-4" style={{maxWidth: '900px', margin: '0 auto'}}>
                    {services.slice(0, 6).map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
