import React from 'react'

const food = [
  {
    img1: "https://static.wixstatic.com/media/94982f_603db5fa14fc44cba5f63d16fa68b5d2~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/94982f_603db5fa14fc44cba5f63d16fa68b5d2~mv2.jpg",
    name: "Fruits Salad",
  },
  {
    img1: "https://www.allrecipes.com/thmb/UgUZpaTRGWIHEk57yWMhMEjffiY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/16160-juicy-grilled-chicken-breasts-ddmfs-5594-hero-3x4-902673c819994c0191442304b40104af.jpg",
    name: "Chicken Breasts",
  },
  {
    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT23q4jcUUhvNMi8Av5h4KXZs7NQEzu-s0vEw&s",
    name: "Eggs",
  },
  {
    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6fHveKdHFOUPy5-McbL1cQob2o4MrDF-tA&s",
    name: "Brocolli",
  },
  {
    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5fqV_znGAHqOym4QrxnVXKAfwJUxudoCyw&s",
    name: "Fish",
  },
  {
    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmgbMNTApICag3wBeDZsA7331wLnEMi9pPBw&s",
    name: "Vegetable Soup",
  },
];

const Overweight = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-200">
      {/* Outer Box */}
      <div className="w-full max-w-7xl h-auto p-10 bg-red-100 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-red-600">Overweight Diet Plan</h1>
        <p className="mt-4">Here’s a recommended diet plan to help you lose weight:</p>
        <ul className="list-disc mt-4 text-left mx-auto max-w-lg">
          <li>Stay in calorie deficient.</li>
          <li>Limit carbohydrates and fats and include more proteins</li>
          <li>Drink more water and stay hydrated</li>
        </ul>

        {/* Inner Boxes */}
        <div className="grid grid-cols-1 gap-5 m-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 pl-4"> {/* Changed ml-4 to pl-4 */}
          {food.map((item, index) => (
            <div
              key={index}
              className="bg-red-300 text-white flex flex-col p-4 rounded-xl shadow-2xl text-center w-full sm:w-40 md:w-48 lg:w-56"
            >
              <img
                src={item.img1}
                alt={item.name}
                className="w-full h-24 object-cover rounded-lg"
              />
              <div className="mt-2 text-lg font-semibold">{item.name}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Overweight