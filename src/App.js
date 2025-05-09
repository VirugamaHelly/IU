import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import { ThemeProvider } from './contexts/ThemeContext';
import { Route, Routes } from 'react-router-dom';
import CarRides from './components/Services/Car_Rides';
import Rentals from './components/Services/Rentals';
import Auto_Rides from './components/Services/Auto_Rides';
import Bike_Rides from './components/Services/Bike_Rides';
import Intercity from './components/Services/Intercity';
import Book_Ride from './components/Services/Book_Ride';
import SignUp  from './components/User/Signup';
import Login from './components/User/Login';
import OTPVerification from './components/User/OTPVerification';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carrides" element={<CarRides />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/Auto_rides" element={<Auto_Rides />} />
            <Route path="/Bike_rides" element={<Bike_Rides />} />
            <Route path="/Intercity" element={<Intercity />} />
            <Route path="/Book_ride" element={<Book_Ride />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otpverification" element={<OTPVerification />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}


export default App;
