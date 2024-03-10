import React, { useState } from 'react'
import { Label, Modal } from 'flowbite-react';
import SectionHnD from './SectionHnD';

function CheckBalanceModal({children,openModal,setOpenModal}) {

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
            <SectionHnD textWhite={"Your"} textGreen={"Balance"} Description={"Your currernt balance is"} />
            <div>
              <div className="mb-2 block ">
                <Label htmlFor="amount" value="Your Balance" className='text-white' />
              </div>
              <input className=' bg-[#191919] rounded w-full text-white ' type="text" name="balance" id="balance" value={amount} readOnly/>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CheckBalanceModal