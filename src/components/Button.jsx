import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`bg-blue-gradient font-poppins py-4 px-6 font-medium text-primary text-[18px] outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
