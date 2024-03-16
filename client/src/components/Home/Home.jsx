import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-400 to-indigo-600">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-6">Welcome</h1>
        <p className="text-lg mb-8">Please select your role:</p>
        <div className="space-x-4 mb-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md">
            User
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md shadow-md">
            Doctor
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md shadow-md">
            Admin
          </button>
        </div>
        <p className="text-lg mb-4">New here? Register as:</p>
        <div className="space-x-4">
          <Link
            to="/register/user"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md shadow-md"
          >
            New User
          </Link>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md shadow-md">
            New Doctor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
