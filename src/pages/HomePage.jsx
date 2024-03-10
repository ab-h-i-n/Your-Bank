import React, { useContext } from 'react'
import HeroSection from '../components/HeroSection'
import OurServicesSection from '../components/OurServicesSection'
import UseCaseSection from '../components/UseCaseSection'
import { UserContext } from '../User.js'


const HomePage = () => {

  const user = useContext(UserContext);

  console.log(user);

  return (
    <div className='bg-[#191919] min-h-screen'>

        {/* homepage top left img  */}

        <img src="assets/Abstract-img.svg" class="absolute top-0 left-0" alt='abstract img'/>

        {/* all sections  */}

        <main className='mx-[16px] md:mx-[80px] py-24'>

            <HeroSection/>

            <OurServicesSection/>

            <UseCaseSection/>

        </main>

    </div>
  )
}

export default HomePage