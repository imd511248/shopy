import React, { useEffect, useState } from "react";
import { IoMdMenu, IoIosHome, IoMdCart } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterDatas } from "../../features/FilterSlice";
const NavbarSection = () => {
  const cart = useSelector((state) => state.cartData.products);
  const counterProducts = useSelector((state) => state.counter.products);
  const dispatch = useDispatch();

  const [filterData, setFilterData] = useState([]);
  const [checkFilter, setCheckFilter] = useState([]);

  const priceRangeFilter = (e) => {
    const value = e.target.value;
    setCheckFilter((prev) => (e.target.checked ? [...prev, value] : prev.filter((item) => item !== value)));
  };

  useEffect(() => {
    if (checkFilter.length === 0) {
      setFilterData([...counterProducts]);
    } else {
      const tempFilteredData = checkFilter.reduce((acc, item) => {
        const [minPrice, maxPrice] = item.includes("above") ? [parseInt(item.trim().split("-")[0]), Infinity] : item.trim().split("-").map(Number);

        const findData = counterProducts.filter((product) => product.price >= minPrice && product.price <= maxPrice);
        return [...acc, ...findData];
      }, []);

      setFilterData(tempFilteredData);
    }
  }, [checkFilter, counterProducts]);

  useEffect(() => {
    dispatch(filterDatas(filterData));
  }, [dispatch, filterData]);

  const closeMenuHandler = () => {
    document.querySelector(".handler").style.left = "-100%";
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
  };
  const openHandlerMenu = () => {
    document.querySelector(".handler").style.left = "0";
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
  };
  const inputLabel = [
    { name: "0 - 100", value: "0-100", title: "0 - 100" },
    { name: "100 - 500", value: "100-500", title: "100 - 500" },
    { name: "500 - 1000", value: "500-1000", title: "500 - 1000" },
    { name: "1000 - above", value: "1000-above", title: "Above 1000" },
  ];
  return (
    <>
      <nav className="bg-purple-500 fixed w-full top-0 left-0 z-30">
        <div className="h-16 w-5/6 flex justify-between items-center mx-auto">
          <div className="flex justify-center items-center gap-4">
            <strong onClick={openHandlerMenu} className="text-white text-4xl cursor-pointer">
              <IoMdMenu className="hover:scale-105" />
            </strong>{" "}
            <menu className="text-white text-3xl cursor-pointer">
              <Link to="/">
                <IoIosHome className="hover:scale-105" />
              </Link>
            </menu>
          </div>
          <div className="capitalize text-2xl font-bold text-white hidden sm:block md:block lg:block xl:block 2xl:block ">Welcome to our shopy app</div>
          <div className="flex space-x-3 text-white gap-3">
            <p className="cursor-pointer text-white text-2xl relative">
              <span className="absolute left-2 -top-3 text-sm text-green-800 font-medium z-30">{cart.length > 9 ? "9+" : cart.length}</span>
              <Link to="/cart">
                <IoMdCart className="hover:scale-125" />
              </Link>
            </p>
            <p className="cursor-pointer text-white text-2xl">
              <Link to="/login">
                <FaUserCircle className="hover:scale-110" />
              </Link>
            </p>
          </div>
        </div>
        <div className="absolute top-0 handler -left-full  w-screen h-screen ease-in-out duration-500">
          <span className=" absolute top-0 left-0 w-5/6 sm:w-3/6 md:w-2/6 lg:w-4/12 xl:w-3/12 2xl:w-2/12 h-screen z-50 bg-blue-100 ">
            <i onClick={closeMenuHandler} className="right-4 top-4 absolute cursor-pointer">
              <ImCross />
            </i>
            <div className="w-11/12 mx-auto mt-14 border-2 border-white pl-2 pt-2">
              <strong className="text-yellow-600 text-xl ">Filter By Price</strong>
              {inputLabel?.map((item) => (
                <ul className="ml-2 my-4" key={item.name}>
                  <li className="mt-3">
                    <input onChange={priceRangeFilter} type="checkbox" name={item?.name} value={item?.value} />
                    <span className="ml-2 tracking-wide text-xl"> {item?.title}</span>
                  </li>
                </ul>
              ))}
            </div>
          </span>
        </div>
      </nav>
    </>
  );
};

export default NavbarSection;
