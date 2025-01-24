import React, { useState } from "react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [classification, setClassification] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    // Convert height to meters and calculate BMI
    const heightInMeters = height / 100; // height input is in cm
    const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    setBmi(calculatedBMI);

    // Determine classification
    if (calculatedBMI < 18.5) {
      setClassification("Underweight");
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
      setClassification("Normal weight");
    } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
      setClassification("Overweight");
    } else {
      setClassification("Obesity");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-400">
      <div className="w-full max-w-md bg-purple-200 p-10 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          BMI Calculator
        </h1>
        <form onSubmit={calculateBMI} className="space-y-4">
          {/* Height Input */}
          <div>
            <label className="block text-gray-700 mb-2">Height (in cm):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          {/* Weight Input */}
          <div>
            <label className="block text-gray-700 mb-2">Weight (in kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Calculate BMI
          </button>
        </form>

        {/* BMI Result */}
        {bmi && (
          <div className="mt-6 p-4 bg-blue-100 rounded-lg text-center">
            <h2 className="text-xl font-bold text-blue-800">
              Your BMI: {bmi}
            </h2>
            <p className="text-blue-700">{classification}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
