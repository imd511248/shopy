import React from "react";
import { useSelector } from "react-redux";
import cart from "../../assets/images/cart.jpg";
import { Link } from "react-router-dom";
const Cart = () => {
  const products = useSelector((state) => state.cartData.products);
  console.log(products);

  return (
    <>
      {products && products.length > 0 ? (
        products.map((item) => (
          <div className="mt-20 text-center bg-gray-200 h-full w-2/5 mx-auto flex rounded-lg">
            <div className="h-48 w-2/4 p-2">
              <img src={item?.images[0]} alt="not found" className="w-full h-full object-fill rounded-lg" />
            </div>
            <div className="block w-2/4 p-2">
              <h2 className="line-clamp-2 text-left text-xl font-semibold text-purple-700">{item?.description}</h2>
              <div className="flex justify-center items-center">
                <ul className="w-3/5 mt-2">
                  <li className="text-left text-gray-600 text-xl line-clamp-1">{item?.title}</li>
                  <li className="flex gap-2 mt-3">
                    <li className="bg-red-600 text-white rounded-full w-7 text-center h-7 font-bold text-2xl leading-6 cursor-pointer">-</li> 1{" "}
                    <li className="bg-green-600 text-white rounded-full w-7 text-center h-7 font-bold text-2xl leading-6 cursor-pointer">+</li>
                  </li>
                </ul>
                <ul className="2/5 mt-4">
                  <li className="text-gray-600">
                    <span className="text-xl text-gray-600 font-semibold">Price:</span> ₹{item?.price}
                  </li>
                  <li className="text-yellow-700">
                    <span className="text-yellow-800 text-xl">Total Price:</span> ₹{item?.price}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="text-center mt-56 bg-purple-300 text-green-800 text-3xl font-semibold w-1/5 rounded-lg h-32 mx-auto pt-2">
            <img src={cart} alt="" className="absolute left-0 top-0 w-full h-full -z-50" />
            <h2>Your cart is empty</h2>
            <Link to="/">
              {" "}
              <button className="bg-indigo-600 hover:bg-indigo-900 text-white text-xl px-5 py-1 rounded-md mt-5">Back to home</button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
