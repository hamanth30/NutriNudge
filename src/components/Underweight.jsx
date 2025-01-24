import React from 'react';

const food = [
  {
    img1: "https://static.toiimg.com/photo/67975826.cms",
    name: "Milk",
  },
  {
    img1: "https://cdn11.bigcommerce.com/s-hccytny0od/images/stencil/832x750/uploaded_images/nuts.jpg?t=1604502556",
    name: "Nuts",
  },
  {
    img1: "https://images.getrecipekit.com/20230102102018-peanut_butter_01_520x500.webp?aspect_ratio=1:1&quality=90&",
    name: "Peanut butter",
  },
  {
    img1: "https://www.eatingbirdfood.com/wp-content/uploads/2023/09/cottage-cheese-pasta-close-up-on-plate.jpg",
    name: "Pasta",
  },
  {
    img1: "https://domf5oio6qrcr.cloudfront.net/medialibrary/9235/conversions/iStock-489607216-thumb.jpg",
    name: "Dark Chocolate",
  },
  {
    img1: "https://cheesemaking.com/cdn/shop/products/cottage-cheese-1.jpg?v=1529434175&width=800",
    name: "Cottage cheese/ Paneer",
  },
];

const Underweight = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-200">
      {/* Outer Box */}
      <div className="w-full max-w-7xl h-auto p-10 bg-red-100 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-red-600">Underweight Diet Plan</h1>
        <p className="mt-4">Here’s a recommended diet plan to help you gain weight:</p>
        <ul className="list-disc mt-4 text-left mx-auto max-w-lg">
          <li>Increase calorie intake with healthy fats and proteins.</li>
          <li>Include nuts, avocados, and whole grains in your meals.</li>
          <li>Drink high-calorie smoothies or shakes.</li>
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

export default Underweight;