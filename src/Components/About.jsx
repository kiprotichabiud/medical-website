import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
     At HealthHub, we are dedicated to making healthcare more accessible and convenient for everyone. Our platform allows patients to seamlessly book appointments with their preferred doctors from the comfort of their homes. 
     <p>With a user-friendly interface, real-time availability, and reminders, we aim to reduce wait times and enhance the patient experience. Whether you're looking for a routine checkup or a specialist consultation, HealthHub ensures you get the care you need, when you need it.</p>
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;