import React from 'react'

const HeroSection = () => {
    return (

        <section id="hero-section" class="grid grid-cols-1 h-full py-[50px] overflow-x-clip lg:grid-cols-2 lg:py-[30px] lg:gap-x-[100px]">

            {/* <!-- contaner-1  --> */}

            <div class="flex flex-col items-center lg:items-start lg:mt-[60px]">


                {/* <!-- no lcc required - container  --> */}

                <div class="flex gap-x-[4px] items-center bg-[#262626] py-[8px] px-[16px] rounded-[61px] mb-[12px] ">

                    {/* <!-- tick mark icon  --> */}

                    <img src="assets/tick-mark.svg" class="w-[20px] h-[20px]" alt='tick-mark' />

                    {/* <!-- text  --> */}

                    <p class="text-white font-[300] text-[12px] leading-[24px] lg:text-[14px]">No LLC Required, No
                        Credit
                        Check.</p>

                </div>

                {/* <!-- text container  --> */}

                <div class="flex flex-col gap-y-[8px] text-white text-center lg:text-start">

                    {/* <!-- text heading  --> */}

                    <div class="font-[500] text-[28px] leading-[42px] lg:text-[38px] lg:leading-[57px] lg:pr-38">

                        Welcome to YourBank Empowering Your

                        <span class="text-[#CAFF33] whitespace-nowrap lg:whitespace-normal">Financial Journey</span>

                    </div>

                    {/* <!-- paragraph  --> */}

                    <div class="font-[300] text-[#E4E4E7] leading-[21px] text-[14px] lg:text-[16px] lg:leading-[24px]">
                        At YourBank, our mission is to provide comprehensive banking solutions that empower individuals
                        and
                        businesses to achieve their financial goals. We are committed to delivering personalized and
                        innovative services that prioritize our customers' needs.
                    </div>

                </div>

                {/* <!-- open account button   --> */}

                <button
                    class="text-[14px] text-[#1C1C1C] leading-[21px] font-[400] py-[14px] px-[24px] bg-[#CAFF33] rounded-[82px] mt-[30px]">Open
                    Account</button>


            </div>

            {/* <!-- contaner-2  --> */}

            <div class=" my-[80px] relative w-full ">

                {/* <!-- arrow bg  --> */}

                <img src="assets/background-arrows.svg" class=" absolute top-0 right-0 translate-x-[95px] lg:w-[300px lg:right-[50%] lg:translate-x-[380px] lg:translate-y-[20px]" alt='arrows' />

                {/* <!-- transac-money svg  --> */}

                <img src="assets/transac-money.svg" class=" w-screen lg:h-[501px] lg:translate-y-[-25px] " alt='transaction' />

            </div>

        </section>
    )
}

export default HeroSection