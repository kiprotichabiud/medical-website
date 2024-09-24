import React from "react";
import Button from "../Layouts/Button";


const Home = () => {
  return (
    <div className="  flex flex-col justify-center lg:px-32 px-5 min-h-[94vh] text-white bg-[url(https://images.unsplash.com/photo-1550831107-1553da8c8464?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9ycyUyMGFwcG9pbnRtZW50fGVufDB8fDB8fHww)] bg-no-repeat bg-cover ">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight text-orange-600">
          Empowering Health Choices for a Vibrant Life...
        </h1>
        <p className=" text-orange-600">
         Book a session with us and let us know how we can help
        </p>
      </div>
    </div>
  );
};

export default Home;