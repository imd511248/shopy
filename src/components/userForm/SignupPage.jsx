import React, { useState } from "react";
import { FaUserAlt, FaPhoneAlt, FaCalendarAlt, FaUserLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import InputField from "./InputField";
import { Link, useNavigate } from "react-router-dom";
const SignupPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", email: "", password: "", number: "", date: "", gender: "" });
  const InputHandler = (e, type) => {
    setData({ ...data, [type]: e.target.value });
  };

  const registerUser = async () => {
    const { name, email, password, number, date, gender } = data;
    if (!name || !email || !password || !number || !date || !gender) {
      alert("Please fill in all input fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password.length < 4) {
      alert("Password should be at least 4 characters long.");
      return;
    }
    const numberRegex = /^[0-9]+$/;
    if (!numberRegex.test(number)) {
      alert("Please enter a valid number.");
      return;
    } else if (number.length < 10) {
      alert("Please add 10 digit number");
      return;
    }
    // . axios.delete(`https://655acda16981238d054dbdc1.mockapi.io/irshad/${id}`);///////////////axios.put(`https://655acda16981238d054dbdc1.mockapi.io/irshad/${id}`, input);

    alert("Registration successful!");
    navigate("/login");
  };
  registerUser();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <div className="flex justify-center items-center mt-24 mx-auto w-full">
        <div className="md:w-[30%] border-[#7b7b7b]  bg-opacity-30 bg-white border-2 round-[10px] md:mx- mx-4 rounded-xl py-[10px]">
          <h1 className="relative before:absolute before:bg-purple-500 before:bottom-[-1px] before:content-[''] before:w-full before:h-[2.5px] w-fit mx-auto text-[30px] text-center font-bold md:text-[30px] text-purple-500">
            Sign Up !
          </h1>

          <form className="mt-[10px] w-4/5 mx-auto ">
            <InputField InputHandler={(e) => InputHandler(e, "name")} value={data.name} icon={<FaUserAlt />} placeholder="Full Name" type="name" />
            <InputField InputHandler={(e) => InputHandler(e, "email")} value={data.email} icon={<MdAlternateEmail />} placeholder="Email" type="email" />
            <InputField InputHandler={(e) => InputHandler(e, "password")} value={data.password} icon={<FaUserLock />} placeholder="Password" type="password" />
            <InputField InputHandler={(e) => InputHandler(e, "number")} value={data.number} icon={<FaPhoneAlt />} placeholder="Mob" type="number" />
            <InputField InputHandler={(e) => InputHandler(e, "date")} value={data.date} icon={<FaCalendarAlt />} placeholder="Date" type="date" />
          </form>
          <button className="text-white px-9 py-3 flex justify-center m-[auto] bg-purple-500 rounded-xl">Submit</button>
          <p className="text-center text-[#6a6262] font-semibold my-[20px]">
            You already have an account?{" "}
            <Link to="/login">
              <button className="text-[red] underline tracking-wider">Login</button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
