import React from "react";

const PercentageNTitle = ({percentage,title}) => {
  return (
    <>
      {/* <!-- percentage 1 --> */}

      <div class="grid gap-y-[2px] p-[30px] text-center lg:text-start">
        {/* <!-- percentages --> */}

        <h1 class="text-[#CAFF33] font-[500] text-[40px] leading-[60px]">
          {percentage}
        </h1>

        {/* <!-- sub --> */}

        <p class="text-[#B3B3B3] text-[14px] font-[300] leading-[21px]  lg:text-[16px] lg:leading-[24px] lg:pr-[10px]">
          {title}
        </p>
      </div>
    </>
  );
};

export default PercentageNTitle;
