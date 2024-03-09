import React from "react";

const ServiceBtn = ({img,text}) => {
  return (
    <button
      id="deposit-btn"
      class="func-btn grid place-items-center gap-y-[20px] py-[30px] lg:px-[90px] w-full"
    >
      {/* <!-- icon  --> */}

      <img src={img} alt="btn" />

      {/* <!-- heading  --> */}

      <h1 class="text-white font-[400] text-[20px] leading-[30px] ">{text}</h1>
    </button>
  );
};

export default ServiceBtn;
