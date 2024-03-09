import React from 'react'
import ForIndividual from './ForIndividual'
import ForBussiness from './ForBussiness'
import SectionHnD from './SectionHnD'

const UseCaseSection = () => {
  return (
    <section id="usecases" class="mt-[80px] lg:mt-[120px]">

            {/* <!-- use cases for individuals container  --> */}

            <div class="grid">

                {/* <!-- heading and description  --> */}

                <SectionHnD textWhite={"Use"} textGreen={"Cases"} Description={"Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations"} />

                {/* <!-- for individuals and for business container  --> */}

                <div class="grid lg:grid-cols-2 lg:gap-x-[60px] lg:gap-y-[40px]">

                    {/* <!-- use cases items container  --> */}

                    <ForIndividual/>

                    {/* <!-- for businesses items container  --> */}
                    
                    <ForBussiness />


                </div>


            </div>

        </section>
  )
}

export default UseCaseSection