import { Link } from 'react-router-dom';
import React from 'react';

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md dark:bg-black">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2 dark:text-white">
          Sign in to GreenGlide
                  </h2>
        <p className="text-center text-gray-500 text-sm mb-6 dark:text-gray-400">
          Enter your email or phone to receive an OTP
        </p>

        {/* FORM starts here */}
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Label */}
          <label className="block text-sm text-gray-700 mb-1 dark:text-gray-300" htmlFor="email">
            Email or Phone
          </label>

          {/* Input */}
          <input
            id="email"
            type="text"
            placeholder="john.doe@example.com or +1234567890"
            className="w-full px-4 py-2 border border-gray-300 dark:bg-black dark:border-gray-800 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Sign in with OTP
          </button>
        </form>

        {/* Sign up link */}
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
