import React, { useState } from "react";

const BookRideForm = () => {
    const [isSchedule, setIsSchedule] = useState(false);
    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleScheduleClick = () => {
        const now = new Date();
        const today = now.toISOString().split("T")[0]; // yyyy-mm-dd
        const currentTime = now.toTimeString().slice(0, 5); // hh:mm
        setIsSchedule(true);
        setDate(today);
        setTime(currentTime);
    };

    return (
        <div className="flex justify-center items-center px-4 py-10 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Book Your Ride</h2>

                {/* Pickup */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Pickup Location</label>
                    <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-gray-50">
                        <span className="text-gray-400 mr-2">📍</span>
                        <input
                            type="text"
                            placeholder="Enter pickup location"
                            value={pickup}
                            onChange={(e) => setPickup(e.target.value)}
                            className="w-full bg-transparent outline-none"
                        />
                    </div>
                </div>

                {/* Dropoff */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Dropoff Location</label>
                    <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-gray-50">
                        <span className="text-gray-400 mr-2">✈️</span>
                        <input
                            type="text"
                            placeholder="Enter dropoff location"
                            value={dropoff}
                            onChange={(e) => setDropoff(e.target.value)}
                            className="w-full bg-transparent outline-none"
                        />
                    </div>
                </div>

                {/* Toggle Buttons */}
                <div className="mb-4 flex border border-gray-300 rounded overflow-hidden">
                    <button
                        onClick={() => setIsSchedule(false)}
                        className={`w-1/2 py-2 font-medium ${!isSchedule ? "bg-gray-100 text-gray-900" : "bg-white text-gray-500"
                            }`}
                    >
                        Ride Now
                    </button>
                    <button
                        onClick={handleScheduleClick}
                        className={`w-1/2 py-2 font-medium ${isSchedule ? "bg-gray-100 text-gray-900" : "bg-white text-gray-500"
                            }`}
                    >
                        Schedule
                    </button>
                </div>

                {/* Conditional Content */}
                {isSchedule ? (
                    <>
                        {/* Schedule: Show Date & Time Fields */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">Date</label>
                            <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-gray-50">
                                <span className="text-gray-400 mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-calendar h-5 w-5 text-gray-400">
                                        <path d="M8 2v4"></path>
                                        <path d="M16 2v4"></path>
                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                        <path d="M3 10h18"></path>
                                    </svg>
                                </span>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full bg-transparent outline-none"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">Time</label>
                            <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-gray-50">
                                <span className="text-gray-400 mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-clock h-5 w-5 text-gray-400">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </span>

                                <input
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className="w-full bg-transparent outline-none"
                                />
                            </div>
                            <p className="text-xs text-green-600 mt-1">
                                Rides can be scheduled at least 15 minutes in advance
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Ride Now: Show Immediate Pickup Message */}
                        <div className="mb-4 px-3 py-2">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Book a ride for immediate pickup at your location
                            </p>
                        </div>
                    </>
                )}

                {/* Submit */}
                <button className="w-full py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700">
                    Find Rides
                </button>
            </div>
        </div>
    );
};

export default BookRideForm;
