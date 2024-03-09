import React from "react";
import PercentageNTitle from "./PercentageNTitle";
import LearnMoreBtn from "./LearnMoreBtn";

const ForIndividual = () => {
  return (
    <>
      <div class=" rounded-[20px] p-[20px] bg-[#1C1C1C] mt-[60px] relative  lg:p-[40px] lg:mt-[0px]">
        {/* <!-- bg logo  --> */}

        <img
          src="assets/usecases-bg.svg"
          class="absolute z-[0] top-0 left-0 lg:w-[254px]"
          alt="usecases"
        />

        {/* <!-- items  conntainter--> */}

        <div class="grid grid-cols-2 gap-[10px] lg:h-full">
          {/* <!-- items 1  --> */}

          <div class="grid place-items-center gap-y-[14px] bg-[#1A1A1A]  border border-[#262626] rounded-[12px] p-[20px] z-[1] ">
            {/* <!-- icon  --> */}

            <img src="assets/managing-personal-finance.svg" alt="finance" />

            {/* <!-- heading  --> */}

            <h1 class=" text-white font-[400] text-[14px] leading-[21px] text-center lg:text-[16px] lg:leading-[24px] lg:px-[40px]">
              Managing Personal Finances
            </h1>

          </div>

          {/* <!-- items 2  --> */}

          <div class=" grid place-items-center gap-y-[14px] bg-[#1A1A1A]  border border-[#262626] rounded-[12px] p-[20px]">
            {/* <!-- icon  --> */}

            <img src="assets/saving-forthe-future.svg" alt="saving" />

            {/* <!-- heading  --> */}

            <h1 class=" text-white font-[400] text-[14px] leading-[21px] text-center lg:text-[16px] lg:leading-[24px]">
              Saving for the Future
            </h1>
          </div>

          {/* <!-- items 3  --> */}

          <div class="grid place-items-center gap-y-[14px] bg-[#1A1A1A]  border border-[#262626] rounded-[12px] p-[20px] ">
            {/* <!-- icon  --> */}

            <img src="assets/homeownership.svg" alt="homeownership" />

            {/* <!-- heading  --> */}

            <h1 class=" text-white font-[400] text-[14px] leading-[21px] text-center lg:text-[16px] lg:leading-[24px]">
              Homeownership
            </h1>
          </div>

          {/* <!-- items 4  --> */}

          <div class="grid place-items-center gap-y-[14px] bg-[#1A1A1A]  border border-[#262626] rounded-[12px] p-[24px] ">
            {/* <!-- icon  --> */}

            <img src="assets/education-funding.svg" alt="education" />

            {/* <!-- heading  --> */}

            <h1 class=" text-white font-[400] text-[14px] leading-[21px] text-center lg:text-[16px] lg:leading-[24px] ">
              Educaiton Funding
            </h1>
          </div>
        </div>
      </div>

      {/* <!-- for individuals contents  --> */}

      <div class="mt-[30px] grid place-items-center gap-y-[50px] lg:place-items-start ">
        {/* <!-- heading and description  --> */}

        <div class="grid gap-y-[10px]">
          {/* <!-- heading  --> */}

          <h1 class="text-center text-white font-[500] text-[20px] leading-[30px] lg:text-start lg:text-[26px] lg:leading-[39px]">
            For Individuals
          </h1>

          {/* <!-- desctiption --> */}

          <p class="font-[300] text-[14px] leading-[21px] text-center text-[#B3B3B3] px-[20px] lg:text-start lg:px-[0px] lg:text-[16px] lg:leading-[24px]">
            For individuals, our mortgage services pave the way to
            homeownership, and our flexible personal loans provide vital support
            during various life milestones. We also prioritize retirement
            planning, ensuring a financially secure future for our customers
          </p>
        </div>

        {/* <!-- percentages data container  --> */}

        <div class="grid place-items-center divide-y divide-dashed divide-[#262626] lg:grid-cols-3 lg:divide-y-0 lg:divide-x ">
          {/* <!-- percentage 1 --> */}

          <PercentageNTitle percentage={"78%"} title={"Secure Retirement Planning"} />

          {/* <!-- percentage 2 --> */}

          <PercentageNTitle percentage={"63%"} title={"Manageable Debt Consolidation"} />


          {/* <!-- percentage 3 --> */}

          <PercentageNTitle percentage={"91%"} title={"Reducing financial burdens"} />

        </div>

        {/* <!-- learn more button  --> */}

        <LearnMoreBtn/>

      </div>
    </>
  );
};

export default ForIndividual;
