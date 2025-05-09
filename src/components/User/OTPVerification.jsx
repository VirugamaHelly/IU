import React, { useState, useEffect } from 'react';

const OTPVerification = () => {
  const [timer, setTimer] = useState(30);
  const [otp, setOtp] = useState(new Array(6).fill(""));

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Verify Your Login</h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter the 6-digit code sent to <span className="font-semibold">dd@test.com</span>
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-between space-x-2 mb-4">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              id={`otp-${idx}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, idx)}
              className="w-10 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          ))}
        </div>

        {/* Resend Timer */}
        <p className="text-sm text-gray-500 mb-4">
          Resend code in {timer} {timer === 1 ? "second" : "seconds"}
        </p>

        {/* Buttons */}
        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md mb-2 transition">
          Verify & Continue
        </button>
        <button className="w-full border border-gray-300 text-gray-600 py-2 rounded-md hover:bg-gray-100 transition">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
