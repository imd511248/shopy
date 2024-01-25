import React from "react";

const InputField = ({ icon, value, placeholder, InputHandler, type, id }) => {
  return (
    <>
      <div className="flex justify-left items-center rounded bg-[#e8f0fe] py-2 my-[15px] border-2 border-[#999999] text-[#6d6868]">
        <label className="mx-[20px] text-[20px]">{icon}</label>
        <input className="text-[20px] outline-none bg-transparent truncate w-[85%] " value={value} type={type} id={id} required placeholder={placeholder} onChange={InputHandler} />
      </div>
    </>
  );
};
export default InputField;
