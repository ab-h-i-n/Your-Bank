import React, { useState } from "react";
import ServiceBtn from "./ServiceBtn";
import SectionHnD from "./SectionHnD";
import DepositModal from "./DepositModal";
import WithdrawModal from "./WithdrawModal";

const OurServicesSection = () => {
  const [DepModalOpen, setDepModalOpen] = useState(false);
  const [WithModalOpen, setWithModalOpen] = useState(false);

  return (
    <section id="our-service" class="grid gap-y-[60px]">
      {/* <!-- heaidng and description  --> */}

      <SectionHnD
        textWhite={"Our"}
        textGreen={"Services"}
        Description={
          "At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions"
        }
      />

      {/* <!-- options container  --> */}

      <div class="grid place-items-center lg:flex lg:justify-between lg:place-items-end lg:gap-y-[80px] divide-y divide-[#262626] lg:divide-y-0 lg:divide-x">
        {/* <!-- option 1  --> */}

        <DepositModal openModal={DepModalOpen} setOpenModal={setDepModalOpen}>
          <button onClick={() => setDepModalOpen(true)}>
            <ServiceBtn img={"assets/checking_accounts.svg"} text={"Deposit"} />
          </button>
        </DepositModal>

        {/* <!-- option 2  --> */}

        <WithdrawModal openModal={WithModalOpen} setOpenModal={setWithModalOpen}>
          <button onClick={()=>setWithModalOpen(true)} ><ServiceBtn img={"assets/saving_accounts.svg"} text={"Withdraw"} /></button>
        </WithdrawModal>

        {/* <!-- option 3  --> */}

        <ServiceBtn img={"assets/loans_mortgages.svg"} text={"Account Details"}/>

        {/* <!-- option 4  --> */}

        <ServiceBtn img={"assets/loans_mortgages.svg"} text={"Check Balance"} />
      </div>
    </section>
  );
};

export default OurServicesSection;
