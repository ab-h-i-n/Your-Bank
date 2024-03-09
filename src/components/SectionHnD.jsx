import React from "react";

const SectionHnD = ({textWhite,textGreen,Description}) => {
  return (

    <div class="lg:w-[831px]">

      {/* <!-- heading  --> */}

      <h1 class="flex justify-center font-[500] text-[28px] leading-[42px] gap-x-[.5rem] lg:justify-start lg:text-[38px] lg:leading-[57px]">
        <p class="text-white">{textWhite}</p>
        <p class="text-[#CAFF33]">{textGreen}</p>
      </h1>

      {/* <!-- description  --> */}

      <p class="font-[300] text-[14px] leading-[21px] text-center text-[#B3B3B3] mt-[10px] mb-[20px] lg:leading-[24px] lg:text-[16px] lg:text-left">
        {Description}
      </p>

    </div>

  );
};

export default SectionHnD;
