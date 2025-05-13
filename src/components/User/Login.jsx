import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.trim()) {
      setError("Email or phone is required");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Enter a valid email");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post("https://idharudhar-backend-2.onrender.com/api/auth/login", {
        email,
      });

      if (response.status === 200) {
        navigate("/otpverification", { state: { email } });
      } else {
        setError(response.data.message || "Login failed. Try again.");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md dark:bg-black">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2 dark:text-white">
          Sign in to GreenGlide
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6 dark:text-gray-400">
          Enter your email or phone to receive an OTP
        </p>

        <form onSubmit={handleLogin}>
          <label className="block text-sm text-gray-700 mb-1 dark:text-gray-300" htmlFor="email">
            Email or Phone
          </label>

          <input
            id="email"
            type="text"
            placeholder="john.doe@example.com or +1234567890"
            className={`w-full px-4 py-2 border ${error ? 'border-red-500' : 'border-gray-400'
              } dark:text-white dark:bg-black dark:border-gray-700 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition text-center"
          >
            {loading ? "Sending OTP..." : "Sign in with OTP"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-green-600 font-semibold cursor-pointer">
            Sign up now →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
