import React from 'react';
import { Link } from 'react-router-dom';

export default function Rentals() {
    return (
        <>
            <div className="bg-green-600 text-white px-6 py-12 md:py-24">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Content */}
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">GreenGlide Rentals</h1>
                        <p className="text-lg md:text-xl mb-8">
                            Flexible vehicle rentals by the hour, day, or week for all your travel needs
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
                                Rent a Vehicle
                            </button>
                            <button className="bg-green-800 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700 transition">
                                Learn About Safety
                            </button>
                        </div>
                    </div>

                    {/* Right Image and Card */}
                    <div className="md:w-1/2 relative">
                        <img
                            src="/images/Rentals.png"
                            alt="Car"
                            className="rounded-xl shadow-lg w-full h-auto"
                        />
                        {/* Arrival Time Card */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white text-gray-800 dark:bg-gray-800 dark:text-white shadow-xl rounded-lg p-4 flex items-center gap-4 w-[250px]">
                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-green-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-300">Flexible Duration</p>
                                <p className="font-semibold text-gray-900 dark:text-white">Hours to Weeks</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Why Choose GreenCar */}
            <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Why Choose GreenGlide Rentals?
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10">
                        The most convenient and flexible way to rent vehicles for any duration with no hidden fees
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Card 1 - Flexible Duration */}
                        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-left">
                            <div className="mb-4 text-green-600">
                                {/* Clock Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Flexible Duration</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Rent by the hour, day, or week with easy extensions and early returns
                            </p>
                        </div>

                        {/* Card 2 - Diverse Fleet */}
                        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-left">
                            <div className="mb-4 text-green-600">
                                {/* Car Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 16l1.5-4.5h11L19 16M3 16v2a1 1 0 0 0 1 1h1a2 2 0 1 0 4 0h6a2 2 0 1 0 4 0h1a1 1 0 0 0 1-1v-2M6.5 9l1.5-4h8l1.5 4" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Diverse Fleet</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Choose from cars, SUVs, luxury vehicles, and more to suit your specific needs
                            </p>
                        </div>

                        {/* Card 3 - Fully Insured */}
                        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-left">
                            <div className="mb-4 text-green-600">
                                {/* Shield Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">Fully Insured</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                All rentals come with comprehensive insurance coverage for peace of mind
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* 3d */}
            <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4 sm:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                        Choose Your Rental Package
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 text-base">
                        We offer a variety of rental options to fit your specific needs and budget
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 px-2 sm:px-2 lg:px-0 mx-auto">


                        {/* card1 */}
                        <div className="relative border border-gray-300 dark:border-gray-600 rounded-lg shadow-md bg-white dark:bg-gray-900">
                            <div className="bg-green-600 text-white py-3 rounded-t-lg text-center">
                                <h3 className="text-lg font-semibold">Hourly Rental</h3>
                            </div>
                            <div className="py-6 text-center">
                                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">₹149<span style={{ fontSize: "17px", fontWeight: "lighter" }}>/hour</span></h2>
                                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">Minimum 4 hours</p>

                                <div className="mt-4 space-y-3 text-gray-700 dark:text-gray-200 text-sm text-left px-6">
                                    <p>
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]"></span>
                                        Perfect for short trips
                                    </p>
                                    <p>
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]"></span>
                                        Fuel included
                                    </p>
                                    <p>
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]"></span>
                                        Unlimited km within city
                                    </p>
                                </div>
                            </div>
                            <div className="px-6 pb-6">
                                <Link to='/Book_ride'> <button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition">
                                    Book Now
                                </button></Link>
                            </div>
                        </div>

                        {/* card2 */}
                        <div className="relative border border-gray-300 dark:border-gray-600 rounded-lg shadow-md bg-white dark:bg-gray-900">
                            <div className="absolute top-0 right-0 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-b rounded-tr shadow">
                                POPULAR
                            </div>
                            <div className="bg-green-600 text-white py-3 rounded-t-lg text-center">
                                <h3 className="text-lg font-semibold">Daily Rental</h3>
                            </div>
                            <div className="py-6 text-center">
                                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">₹1,299<span style={{ fontSize: "17px", fontWeight: "lighter" }}>/day</span></h2>
                                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">24-hour period</p>

                                <div className="mt-4 space-y-3 text-gray-700 dark:text-gray-200 text-sm text-left px-6">
                                    <p>
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]" ></span>
                                        Ideal for day trips
                                    </p>
                                    <p>
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]"></span>
                                        300 km included
                                    </p>
                                    <p>
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]"></span>
                                        Free delivery & pickup
                                    </p>
                                </div>
                            </div>
                            <div className="px-6 pb-6">
                                <Link to='/Book_ride'> <button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition">
                                    Book Now
                                </button></Link>
                            </div>
                        </div>

                        {/* card 3 */}
                        <div className="relative border border-gray-300 dark:border-gray-600 rounded-lg shadow-md bg-white dark:bg-gray-900">
                            <div className="bg-green-600 text-white py-3 rounded-t-lg text-center">
                                <h3 className="text-lg font-semibold">Weekly Rental</h3>
                            </div>
                            <div className="py-6 text-center">
                                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">₹6,999<span style={{ fontSize: "17px", fontWeight: "lighter" }}>/week</span></h2>
                                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">7-day period</p>

                                <div className="mt-4 space-y-3 text-gray-700 dark:text-gray-200 text-sm text-left px-6">
                                    <p>
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]"></span>
                                        Perfect for long trips
                                    </p>
                                    <p>
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]"></span>
                                        1500 km included
                                    </p>
                                    <p>
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]"></span>
                                        24/7 roadside assistance
                                    </p>
                                </div>
                            </div>
                            <div className="px-6 pb-6">
                                <Link to='/Book_ride'> <button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition">
                                    Book Now
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* 4th part */}
            <div className="bg-white dark:bg-gray-900 py-12 px-2">
                <section className="bg-green-600 rounded-2xl text-white py-12 px-4 md:px-8 max-w-7xl mx-3 my-12 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Text Section */}
                        <div className="space-y-4 m-6">
                            <h2 className="text-3xl md:text-4xl font-bold">Need a Vehicle for Longer?</h2>
                            <p className="text-lg opacity-90">
                                Contact our team for special monthly rates and corporate fleet solutions. Custom packages available.
                            </p>
                            <div className="pt-4">
                                <a
                                    href="/book"
                                    className="inline-flex items-center justify-center gap-2 text-sm font-medium h-11 px-8 rounded-md bg-white text-green-700 hover:bg-gray-100 transition"
                                >
                                    Rent Now
                                </a>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="flex justify-center">
                            <img
                                src="/images/Rentals2.png"
                                alt="GreenCar App"
                                className="max-h-80 rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section>
            </div>


        </>
    );
}
