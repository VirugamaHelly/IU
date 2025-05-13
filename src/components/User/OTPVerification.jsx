import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OTPVerification = () => {
  const [timer, setTimer] = useState(30);
  const [showResend, setShowResend] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prev => {
        if (prev === 1) {
          clearInterval(countdown);
          setShowResend(true);
          return 0;
        }
        return prev - 1;
      });
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

  const handleResend = async () => {
    try {
      await axios.post("https://idharudhar-backend-2.onrender.com/api/auth/send-otp", { email });
      setTimer(30);
      setShowResend(false);
    } catch (err) {
      console.error("Resend OTP error:", err);
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      setError("Please enter the complete 6-digit OTP.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("https://idharudhar-backend-2.onrender.com/api/auth/verify-otp", {
        email,
        otp: enteredOtp
      });

      if (response.status === 200) {
        // Successfully verified
        navigate("/"); // or to a protected route
      } else {
        setError(response.data.message || "Invalid OTP.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to verify OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">Verify Your Login</h2>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-6">
          Enter the 6-digit code sent to <span className="font-semibold dark:text-white">{email}</span>
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
              className="w-10 h-12 text-center text-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          ))}
        </div>

        {/* Error */}
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {/* Resend Section */}
        {!showResend ? (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Resend code in {timer} second{timer !== 1 ? 's' : ''}
          </p>
        ) : (
          <button
            onClick={handleResend}
            className="text-green-600 font-medium text-sm mb-4 hover:underline"
          >
            Resend OTP
          </button>
        )}

        {/* Buttons */}
        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md mb-2 transition"
        >
          {loading ? "Verifying..." : "Verify & Continue"}
        </button>

        <Link to="/login">
          <button className="w-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OTPVerification;
