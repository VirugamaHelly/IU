import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaPhone, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { fullName, email, phone, password, confirmPassword } = formData;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email.trim()) {
            setError("Email is required");
            return;
        }

        if (!emailRegex.test(email)) {
            setError("Enter a valid email");
            return;
        }

        if (!password || !confirmPassword) {
            setError("Password and Confirm Password are required");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('https://idharudhar-backend-2.onrender.com/api/auth/signup', {
                name: fullName,
                email,
                phone,
                password,
                confirmPassword,
            });
            await axios.post('https://idharudhar-backend-2.onrender.com/api/auth/send-otp', { email });

            alert("Signup successful! OTP sent to your email.");

            console.log(response.data);
            setError("");
            navigate("/otpverification", { state: { email } });
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message || "Signup failed!");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full bg-white dark:bg-black shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-bold text-center text-black dark:text-white mb-1">
                    Create a GreenGlide Account
                </h2>
                <p className="text-center text-gray-500 dark:text-gray-300 mb-6">
                    Sign up to access eco-friendly transportation options
                </p>

                <form onSubmit={handleSubmit}>
                    {/* Error Message */}
                    {error && (
                        <p className="text-red-500 text-sm text-center mb-4">{error}</p>
                    )}

                    {/* Full Name */}
                    <label className="block mb-2 text-sm text-gray-700 dark:text-gray-200">Full Name</label>
                    <div className="flex items-center mb-4 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-black">
                        <FaUser className="text-gray-400 dark:text-gray-300 mr-2" />
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full bg-transparent text-black dark:text-white outline-none"
                        />
                    </div>

                    {/* Email */}
                    <label className="block mb-2 text-sm text-gray-700 dark:text-gray-200">Email Address</label>
                    <div className="flex items-center mb-4 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-black">
                        <FaEnvelope className="text-gray-400 dark:text-gray-300 mr-2" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="w-full bg-transparent text-black dark:text-white outline-none"
                        />
                    </div>

                    {/* Phone */}
                    <label className="block mb-2 text-sm text-gray-700 dark:text-gray-200">Phone Number</label>
                    <div className="flex items-center mb-4 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-black">
                        <FaPhone className="text-gray-400 dark:text-gray-300 mr-2" />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
                            className="w-full bg-transparent text-black dark:text-white outline-none"
                        />
                    </div>

                    {/* Password */}
                    <label className="block mb-2 text-sm text-gray-700 dark:text-gray-200">Password</label>
                    <div className="flex items-center mb-4 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-black">
                        <FaLock className="text-gray-400 dark:text-gray-300 mr-2" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="w-full bg-transparent text-black dark:text-white outline-none"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash className="text-gray-500 dark:text-gray-300" /> : <FaEye className="text-gray-500 dark:text-gray-300" />}
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <label className="block mb-2 text-sm text-gray-700 dark:text-gray-200">Confirm Password</label>
                    <div className="flex items-center mb-4 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-black">
                        <FaLock className="text-gray-400 dark:text-gray-300 mr-2" />
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="w-full bg-transparent text-black dark:text-white outline-none"
                        />
                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <FaEyeSlash className="text-gray-500 dark:text-gray-300" /> : <FaEye className="text-gray-500 dark:text-gray-300" />}
                        </button>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start mb-6">
                        <input type="checkbox" className="mr-2 mt-1" required />
                        <label className="text-sm text-gray-700 dark:text-gray-300">
                            I agree to the <span className="text-green-600 dark:text-green-400">Terms of Service</span> and <span className="text-green-600 dark:text-green-400">Privacy Policy</span>
                        </label>
                    </div>

                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md">
                        Create Account
                    </button>
                </form>

                <div className="text mt-4 text-center dark:text-gray-500">
                    <p>
                        Already have an account? <Link to='/login' className="text-green-600 font-semibold cursor-pointer">Sign in →</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
