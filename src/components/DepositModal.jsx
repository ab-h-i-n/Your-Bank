'use client';

import { Label, Modal } from 'flowbite-react';
import { useState } from 'react';
import SectionHnD from './SectionHnD';

function DepositModal({children,openModal,setOpenModal}) {

  const [amount, setAmount] = useState();

  function onCloseModal() {
    setOpenModal(false);
    setAmount();
  }

  return (
    <>
      {children}
      <Modal className='bg-[#000000] backdrop-blur-sm' show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header className='bg-[#191919]' />
        <Modal.Body className='bg-[#191919] overflow-x-hidden'>
          <div className="space-y-6">
            <SectionHnD textWhite={"Deposit"} textGreen={"Money"} Description={"Deposit money to your account"} />
            <div>
              <div className="mb-2 block ">
                <Label htmlFor="amount" value="Amount to deposit" className='text-white' />
              </div>
              <input className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-[#CAFF33] bg-[#191919] rounded w-full text-white ' type="number" name="amount" id="amount" value={amount} onChange={(event) => setAmount(event.target.value)} required />
            </div>
            <div className="w-full flex justify-center">
              <button className='bg-[#CAFF33] text-[#191919] hover:bg-[#efffc2] font-medium py-2 px-3 rounded'>Deposit</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DepositModal;