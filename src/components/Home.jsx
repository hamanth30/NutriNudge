import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "./hero_bg.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/bmi-calculator");
  };

  return (
    <div
      className="min-h-screen flex justify-between items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full lg:w-2/3 space-y-5 bg-white bg-opacity-70 p-8 rounded-lg">
        <h1 className="text-red-800 font-semibold text-6xl">
          Nutri Nudge, the ultimate food diet tracker for your fitness journey
        </h1>
        <div className="flex justify-center">
          <button
            onClick={handleGetStarted}
            className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-600 hover:shadow-xl transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

