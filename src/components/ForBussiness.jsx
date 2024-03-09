import React from "react";
import PercentageNTitle from "./PercentageNTitle";
import LearnMoreBtn from "./LearnMoreBtn";

const ForBussiness = () => {
  return (
    <>
      <div class=" rounded-[20px] p-[20px] bg-[#1C1C1C] mt-[40px] relative lg:p-[40px] lg:mt-[0px] lg:order-last">
        {/* <!-- bg logo  --> */}

        <img
          src="assets/usecases-bg.svg"
          class="absolute z-[0] top-0 left-0 lg:w-[254px]"
          alt="usecases"
        />

        {/* <!-- items  conntainter--> */}

        <div class="grid grid-cols-2 gap-[10px] lg:h-full">
          {/* <!-- items 1  --> */}

          <div class="grid place-items-center gap-y-[14px] bg-[#1C1C1C]  border border-[#262626] rounded-[12px] p-[20px] z-[1]">
            {/* <!-- icon  --> */}

            <img src="assets/startup-enterprenur.svg" alt="startup" />

            {/* <!-- heading  --> */}

            <h1 class="text-white font-[400] text-[14px] leading-[21px] text-center lg:text-[16px] lg:leading-[24px] lg:px-[30px] ">
              Startups and Enterpreners
            </h1>
          </div>

          {/* <!-- items 2  --> */}

          <div class=" grid place-items-center gap-y-[14px] bg-[#1C1C1C]  border border-[#262626] rounded-[12px] p-[20px]">
            {/* <!-- icon  --> */}

            <img src="assets/cashflow-management.svg" alt="cashflow" />

            {/* <!-- heading  --> */}

            <h1 class="text-white font-[400] text-[14px] leading-[21px] text-center lg:text-[16px] lg:leading-[24px]">
              Cash Flow Management
            </h1>
          </div>

          {/* <!-- items 3  --> */}

          <div class="grid place-items-center gap-y-[14px] bg-[#1C1C1C]  border border-[#262626] rounded-[12px] p-[20px] ">
            {/* <!-- icon  --> */}

            <img src="assets/bussiness-expansion.svg" alt="bussiness" />

            {/* <!-- heading  --> */}

            <h1 class="text-white font-[400] text-[14px] leading-[21px] text-center lg:text-[16px] lg:leading-[24px]">
              Bussiness Expansion
            </h1>
          </div>

          {/* <!-- items 4  --> */}

          <div class="grid place-items-center gap-y-[14px] bg-[#1C1C1C]  border border-[#262626] rounded-[12px] p-[24px] ">
            {/* <!-- icon  --> */}

            <img src="assets/payment-solutions.svg" alt="payment" />

            {/* <!-- heading  --> */}

            <h1 class="text-white font-[400] text-[14px] leading-[21px] text-center lg:text-[16px] lg:leading-[24px]">
              Payment Solutions
            </h1>
          </div>
        </div>
      </div>

      {/* <!-- for bussiness contents  --> */}

      <div class="mt-[30px] grid place-items-center gap-y-[50px] lg:place-items-start ">
        {/* <!-- heading and description  --> */}

        <div class="grid gap-y-[10px] ">
          {/* <!-- heading  --> */}

          <h1 class="px-[20px] text-center text-white font-[500] text-[20px] leading-[30px] lg:text-start lg:text-[26px] lg:leading-[39px]">
            For Business
          </h1>

          {/* <!-- desctiption --> */}

          <p class="font-[300] text-[14px] leading-[21px] text-center text-[#B3B3B3] px-[20px] lg:text-start lg:text-[16px] lg:leading-[24px]">
            For businesses, we empower growth with working capital solutions
            that optimize cash flow, and our tailored financing options fuel
            business expansion. Whatever your financial aspirations, YourBank is
            committed to providing the right tools and support to achieve them
          </p>
        </div>

        {/* <!-- percentages data container  --> */}

        <div class="grid place-items-center divide-y divide-dashed divide-[#262626] lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
          {/* <!-- percentage 1 --> */}

          <PercentageNTitle percentage={"65%"} title={"Cash Flow Management"} />

          {/* <!-- percentage 2 --> */}

          <PercentageNTitle percentage={"70%"} title={"Drive Business Expansion"} />

          {/* <!-- percentage 3 --> */}

          <PercentageNTitle percentage={"45%"} title={"Streamline payroll processing"} />

        </div>

        {/* <!-- learn more button  --> */}

        <LearnMoreBtn/>

      </div>
    </>
  );
};

export default ForBussiness;
