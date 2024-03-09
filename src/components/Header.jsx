import React from 'react'

const Header = () => {
  return (
    <>
        <nav
        class="fixed z-[10] top-0 w-[90vw] mx-[16px] mt-[40px] md:mx-[80px] md:mt-[30px] flex justify-between items-center bg-[#1C1C1C] h-[68px] rounded-[100px] border border-[#262626] py-[14px] pl-[24px] pr-[14px] font-[400]">

        {/* <!-- navbar logo  --> */}

        <img src="assets/navBar_logo.svg" class="w-[101.29px] h-[26px] lg:w-[116.87px] lg:h-[30px]" alt='logo' />

        {/* <!-- links  --> */}

        <ul class="link-btns hidden lg:flex gap-x-[26px] text-white ">
            <li><a href="#home"
                    class="home-btn w-[77px] h-[41px] hover:bg-[#262626] bg-[#262626] py-[10px] px-[18px] rounded-[82px]">Home</a>
            </li>
            <li><a href="#home"
                    class="w-[77px] h-[41px] hover:bg-[#262626] py-[10px] px-[18px] rounded-[82px]">Careers</a></li>
            <li><a href="#home"
                    class="w-[77px] h-[41px] hover:bg-[#262626] py-[10px] px-[18px] rounded-[82px]">About</a></li>
            <li><a href="#home"
                    class="w-[77px] h-[41px] hover:bg-[#262626] py-[10px] px-[18px] rounded-[82px]">Security</a>
            </li>
        </ul>

        {/* <!-- sign up and login buttons  --> */}

        <div class="hidden login-signup-btn lg:flex gap-x-[20px] text-white">

            <button id="signup-btn" class="sign-log-btn rounded-[82px] py-[12px] px-[24px]">Sign Up</button>
            <button id="login-btn"
                class="sign-log-btn rounded-[82px] py-[12px] px-[24px] text-[#1C1C1C] bg-[#CAFF33]">Login</button>

        </div>

        {/* <!-- hamburger button  --> */}

        <button
            class="w-[56px] h-[40px] flex flex-col items-center justify-center bg-[#CAFF33] py-[6px] px-[14px] rounded-[82px] lg:hidden">

            {/* <!-- lines contaner  --> */}

            <div class="w-[21px] h-[14px] flex flex-col justify-between items-end">
                <div class="bg-[#262626] h-[1.5px] w-full rounded-3xl"></div>
                <div class="bg-[#262626] h-[1.5px] w-full rounded-3xl"></div>
                <div class="bg-[#262626] h-[2px] w-[70%] rounded-3xl"></div>
            </div>

        </button>


    </nav>
    </>
  )
}

export default Header