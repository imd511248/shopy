import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cart from "../../assets/images/cart.jpg";
import { Link } from "react-router-dom";
import { decrement, increment } from "../../features/CartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartData.products);
  console.log(products);
  const decreamentHandler = (e) => {
    dispatch(decrement(e));
  };
  const incrementHandler = (e) => {
    dispatch(increment(e));
  };
  return (
    <>
      <div className="mt-20 px-3">
        {products && products.length > 0 ? (
          products.map((item, i) => (
            <div
              key={i}
              className={`min-w-xsm:w-11/12 sm:w-2/3 md:w-8/12 lg:w-2/4 xl:w-5/12 sm:flex md:flex lg:flex xl:flex 2xl:flex text-center bg-gray-200 h-full rounded-lg mx-auto mt-10 pb-3`}>
              <div className="h-48 w-11/12 mx-auto p-2">
                <img src={item?.images[2] || item?.images[1] || item?.images[0]} alt="not found" className="w-full h-full object-fill rounded-lg" />
              </div>
              <div className="block w-11/12 mx-auto p-2">
                <h2 className="line-clamp-2 text-left text-xl font-semibold text-purple-700">{item?.description}</h2>
                <div className="flex justify-center items-center">
                  <ul className="w-3/5 mt-2">
                    <li className="text-left text-gray-600 text-xl line-clamp-1">{item?.title}</li>
                    <li className="flex gap-2 mt-3">
                      <p onClick={() => decreamentHandler(item.id)} className="bg-red-600 text-white rounded-full w-7 text-center h-7 font-bold text-2xl leading-6 cursor-pointer">
                        -
                      </p>
                      {item?.count}
                      <p onClick={() => incrementHandler(item.id)} className="bg-green-600 text-white rounded-full w-7 text-center h-7 font-bold text-2xl leading-6 cursor-pointer">
                        +
                      </p>
                    </li>
                  </ul>
                  <ul className="2/5 mt-4">
                    <li className="text-gray-600">
                      <span className="text-xl text-gray-600 font-semibold">Price:</span> ₹{item?.price}
                    </li>
                    <li className="text-yellow-700">
                      <span className="text-yellow-800 text-xl">Total Price:</span> ₹{item?.price * item?.count}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="text-center mt-56 bg-purple-300 text-green-800 text-3xl font-semibold sm:w-2/5 md:w-3/6 w-5/6 rounded-lg h-32 mx-auto pt-2">
              <img src={cart} alt="" className="absolute left-0 top-0 w-full h-full -z-50" />
              <h2>Your cart is empty</h2>
              <Link to="/">
                {" "}
                <button className="bg-indigo-600 hover:bg-indigo-900 text-white text-xl px-5 py-1 rounded-md mt-5">Back to home</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
