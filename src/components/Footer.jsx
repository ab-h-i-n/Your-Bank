import React from 'react'

const Footer = () => {
  return (
    <footer
        class=" bg-[#1C1C1C] grid place-items-center gap-y-[20px]  pt-[50px] px-[16px] pb-[30px] divide-y divide-[#262626]">

        {/* <!-- logo and links  --> */}

        <div class="grid place-items-center gap-y-[24px] py-[30px]">

            {/* <!-- logo  --> */}

            <img src="assets/navBar_logo.svg" class="w-[132.46px]" alt='logo' />

            {/* <!-- links  --> */}

            <ul
                class="text-[400] text-[14px] leading-[21px] text-[#E4E4E7] flex gap-x-[14px] lg:text-[16px] lg:leading-[24px] ">
                <li><a href="/#home">Home</a></li>
                <li><a href="/#careers">Careers</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#security">Security</a></li>

            </ul>

        </div>


        {/* <!-- contact links  --> */}

        <ul
            class="w-full grid grid-cols-2 place-items-center font-[400] text-[14px] leading-[21px] text-[#E4E4E7] pt-[30px]  gap-[20px] lg:flex lg:text-[16px] lg:leading-[24px] lg:pt-[40px] lg:pb-[20px] lg:justify-center ">

            {/* <!-- email  --> */}

            <li class="px-[9.5px]"><a class="flex gap-x-[6px] " href="/#">

                    {/* <!-- icon  --> */}

                    <img src="assets/email-icon.svg" alt='email' />

                    {/* <!-- link --> */}

                    <p>hello@skillbridge.com</p>

                </a></li>

            {/* <!-- phone  --> */}

            <li class="px-[9.5px]"><a class="flex gap-x-[6px]" href="/#">

                    {/* <!-- icon  --> */}

                    <img src="assets/phone-icon.svg" alt='phone' />

                    {/* <!-- link --> */}

                    <p>+91 91813 23 2309</p>

                </a></li>

            {/* <!-- location  --> */}

            <li class="col-span-2 px-[9.5px]"><a class="flex gap-x-[6px] justify-center" href="/#">

                    {/* <!-- icon  --> */}

                    <img src="assets/location.svg" alt='location' />

                    {/* <!-- link --> */}

                    <p>Somewhere in the World</p>

                </a></li>

        </ul>

        {/* <!-- social links  --> */}

        <div class="pt-[40px] w-full ">

            <div class="relative bg-[#1A1A1A] border border-[#262626] grid place-items-center gap-y-[20px] w-full pt-[50px] pr-[24px] pb-[30px] pl-[12px] rounded-[12px]
                        lg:flex lg:items-center lg:justify-between lg:h-[68px] lg:p-[12px] lg:rounded-[100px]">

                {/* <!-- links --> */}

                <ul class="flex gap-x-[8px] absolute top-0 translate-y-[-20px] lg:static lg:translate-y-0 ">
                    <li><a href="/#"><img src="assets/facebook.svg" alt='facebook' /></a></li>
                    <li><a href="/#"><img src="assets/twitter.svg" alt='twitter' /></a></li>
                    <li><a href="/#"><img src="assets/linkedin.svg" alt='linkedin' /></a></li>
                </ul>

                {/* <!-- all rights reserved  --> */}

                <p class="font-[300] text-[14px] leading-[21px] text-[#B3B3B3]">YourBank All Rights Reserved</p>

                {/* <!-- privacy and terms  --> */}

                <p class="font-[300] text-[14px] leading-[21px] text-[#B3B3B3]">Privacy Policy | Terms of Service</p>

            </div>

        </div>


    </footer>
  )
}

export default Footer