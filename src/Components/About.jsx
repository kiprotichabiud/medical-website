import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-10 bg-gradient-to-b from-gray-100 via-white to-gray-50">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-800 text-center lg:text-left leading-snug">
          About <span className="text-blue-600">HealthHub</span>
        </h1>
        <p className="text-lg text-gray-600 text-justify lg:text-left leading-relaxed">
          At <span className="font-semibold text-blue-600">HealthHub</span>, we are committed to making healthcare more accessible and convenient for everyone. 
          Our platform empowers patients to effortlessly book appointments with their preferred doctors from the comfort of their homes.
        </p>
        <p className="text-lg text-gray-600 text-justify lg:text-left leading-relaxed">
          With a user-friendly interface, real-time availability, and automated reminders, we aim to reduce wait times and enhance the overall patient experience. 
          Whether you're scheduling a routine checkup or seeking a specialist consultation, 
          <span className="font-semibold text-blue-600"> HealthHub</span> ensures you receive the care you need, exactly when you need it most.
        </p>
        <button className="px-6 py-3 mt-4 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          className="rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          src={img}
          alt="About HealthHub"
        />
      </div>
    </div>
  );
};

export default About;
