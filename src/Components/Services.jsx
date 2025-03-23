import React from "react";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import Button from "../Layouts/Button";
import ServicesCard from "../Layouts/ServicesCard";

const Services = () => {
  const services = [
    {
      icon: <RiMicroscopeLine size={40} className="text-blue-600" />,
      title: "Lab Test",
      description:
        "Accurate and reliable diagnostic lab tests to ensure your health is in check.",
    },
    {
      icon: <MdHealthAndSafety size={40} className="text-blue-600" />,
      title: "Health Check",
      description:
        "Comprehensive health screenings to keep you proactive about your well-being.",
    },
    {
      icon: <FaHeartbeat size={40} className="text-blue-600" />,
      title: "Heart Health",
      description:
        "Specialized services for monitoring and improving cardiovascular health.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 via-white to-gray-100 lg:px-32 px-5 pt-24 lg:pt-16">
      {/* Header Section */}
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800">Our Services</h1>
        <p className="mt-4 text-lg text-gray-600">
          At HealthHub, we provide a range of top-notch medical services
          tailored to your unique healthcare needs. Your health is our
          priority.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-12">
        <Button text="Learn More" />
      </div>
    </div>
  );
};

export default Services;
