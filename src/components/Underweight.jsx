import React from 'react';

const food = [
  {
    img1: "https://static.toiimg.com/photo/67975826.cms",
    name: "Milk",
  },
  {
    img1: "https://static.toiimg.com/photo/67975826.cms",
    name: "Milk",
  },
  {
    img1: "https://static.toiimg.com/photo/67975826.cms",
    name: "Milk",
  },
  {
    img1: "https://static.toiimg.com/photo/67975826.cms",
    name: "Milk",
  },
  {
    img1: "https://static.toiimg.com/photo/67975826.cms",
    name: "Milk",
  },
  {
    img1: "https://static.toiimg.com/photo/67975826.cms",
    name: "Milk",
  },
];

const Underweight = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-200">
      <div className="max-w-lg h-auto p-10 bg-purple-100 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-purple-600">Underweight Diet Plan</h1>
        <p className="mt-4">Here’s a recommended diet plan to help you gain weight:</p>
        <ul className="list-disc mt-4 text-left">
          <li>Increase calorie intake with healthy fats and proteins.</li>
          <li>Include nuts, avocados, and whole grains in your meals.</li>
          <li>Drink high-calorie smoothies or shakes.</li>
        </ul>
        <div className="grid grid-cols-1 gap-5 m-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {food.map((item, index) => (
            <div
              key={index}
              className="bg-purple-500 text-white flex flex-col p-4 rounded-xl shadow-2xl text-center"
            >
              <img
                src={item.img1}
                alt={item.name}
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="mt-2 text-lg font-semibold">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Underweight;
