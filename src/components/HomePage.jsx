import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../features/CounterSlice";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { addData } from "../features/CartSlice";
export const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [allData, setAllData] = useState([]);
  const dispatch = useDispatch();
  // console.log(allData);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const products = useSelector((state) => state.counter.products);
  const productFilter = useSelector((state) => state.rangeData.product);
  // console.log(productFilter);
  useEffect(() => {
    setAllData(products);
  }, [products]);

  const inputSearchHandler = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    if (value !== "") {
      const filterData = products.filter((item) => item.title.toLowerCase().includes(value));
      if (filterData.length === 0) {
        alert("plese serach available product");
      }
      setAllData(filterData);
    } else {
      setAllData(products);
    }
  };

  //////////////////////////....CartHandler.....///////////////////////////
  const data = useSelector((state) => state.cartData.products);
  const CartHandler = (e) => {
    const details = { id: e.id, count: 1, title: e.title, price: e.price, description: e.description, images: e.images };
    dispatch(addData({ details: details, cardData: data }));
    // const findDetails = data.find((item) => item.id === e.id);
    // if (findDetails) {
    //   alert("already added this item");
    // } else {
    // }
  };
  // .........................................................................
  return (
    <>
      <div className=" flex justify-between gap-2 items-center mt-20 w-3/5 mx-auto  border-2 border-purple-500  rounded-lg overflow-hidden">
        <input
          onChange={inputSearchHandler}
          value={inputValue || ""}
          type="text"
          placeholder="search your preferred items here"
          className="capitalize outline-none bg-indigo-100 w-full px-5 py-2 text-xl line-clamp-1"
        />
      </div>

      <div className="mt-10 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 auto-cols-auto">
        {productFilter && productFilter.length > 0 ? (
          productFilter.map((item) => (
            <div className="relative bg-purple-200 rounded-b-lg border-2 border-gray-500 w-full overflow-hidden hover:scale-95 duration-300 " key={item.id}>
              <div className="absolute bg-purple-600 text-white text-lg top-10 animate-pulse left-0 w-2/5 text-center line-clamp-1 z-20">{item?.brand}</div>
              <div className="w-full h-52 overflow-hidden">
                <img className="w-full h-full object-fill hover:scale-110 duration-700 ease-in-out" src={item?.images[2] || item?.images[1] || item?.images[0]} alt={item?.title} />
              </div>
              <p className="px-2 font-bold text-xl line-clamp-1">{item?.title}</p>
              <p className="px-2 line-clamp-1 text-gray-500">{item?.description}</p>
              <div className="flex justify-between items-center mt-2 px-2">
                <span className="text-lg font-bold text-gray-700">Stock: {item?.stock}</span>
                <span className="pr-5">
                  {item?.ratinsg}
                  <FaStar className="inline-block align-baseline text-yellow-400" />
                  <FaStar className="inline-block align-baseline text-yellow-400" />
                  <FaStar className="inline-block align-baseline text-yellow-400" />
                  <FaStar className="inline-block align-baseline text-yellow-400" />
                  <FaStarHalf className="inline-block align-baseline text-yellow-400" />
                </span>
              </div>
              <div className="flex justify-between items-center mt-2 px-2">
                <span className="text-lg font-bold text-gray-700">Price: ₹{item?.price}</span>
                <del className="text-red-600 font-semibold pr-3"> {item?.discountPercentage}% off</del>
              </div>
              <button
                onClick={(e) => CartHandler(item)}
                className="border-2 border-purple-600 bg-white rounded-md md:px-7 px-4 py-1 my-2 ml-3 hover:bg-purple-600 hover:text-white hover:border-purple-900 hover:scale-105 ">
                Add To Cart
              </button>
            </div>
          ))
        ) : (
          <div className="absolute left-2/4 top-36 text-2xl font-bold">
            <svg
              aria-hidden="true"
              className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );
};
