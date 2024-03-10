import React, { useState } from "react";
import ServiceBtn from "./ServiceBtn";
import SectionHnD from "./SectionHnD";
import DepositModal from "./DepositModal";
import WithdrawModal from "./WithdrawModal";
import CheckBalanceModal from "./CheckBalanceModal";
import ViewDetailsModal from "./ViewDetailsModal";

const OurServicesSection = () => {
  const [DepModalOpen, setDepModalOpen] = useState(false);
  const [WithModalOpen, setWithModalOpen] = useState(false);
  const [CheckBalModalOpen, setCheckBalModalOpen] = useState(false);
  const [viewAccModalOpen, setViewAccModalOpen] = useState(false);

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
          <button onClick={() => setDepModalOpen(true)} className="w-full">
            <ServiceBtn img={"assets/checking_accounts.svg"} text={"Deposit"} />
          </button>
        </DepositModal>

        {/* <!-- option 2  --> */}

        <WithdrawModal openModal={WithModalOpen} setOpenModal={setWithModalOpen}>
          <button onClick={() => setWithModalOpen(true)} className="w-full" >
            <ServiceBtn img={"assets/saving_accounts.svg"} text={"Withdraw"} /></button>
        </WithdrawModal>

        {/* <!-- option 3  --> */}

        <ViewDetailsModal openModal={viewAccModalOpen} setOpenModal={setViewAccModalOpen}>
          <button onClick={() => setViewAccModalOpen(true)} className="w-full">
            <ServiceBtn img={"assets/loans_mortgages.svg"} text={"Account Details"} /></button>
        </ViewDetailsModal>


        {/* <!-- option 4  --> */}

        <CheckBalanceModal openModal={CheckBalModalOpen} setOpenModal={setCheckBalModalOpen} >
          <button onClick={() => setCheckBalModalOpen(true)} className="w-full">
            <ServiceBtn img={"assets/loans_mortgages.svg"} text={"Check Balance"} /></button>
        </CheckBalanceModal>

      </div>
    </section>
  );
};

export default OurServicesSection;
