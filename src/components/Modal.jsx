import React, { useEffect, useRef } from "react";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ handleClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOverlayClick = (e) => {
      if (!modalRef.current) {
        return;
      }
      if (modalRef?.current.contains(e.target)) {
        console.log("inside modal");
        return;
      } else {
        console.log("clicked outside");
        handleClose();
      }
    };
    document.addEventListener(
      "click",
      handleOverlayClick,
      true
    );

    return document.removeEventListener(
      "click",
      handleOverlayClick
    );
  }, []);

  return (
    <div className='w-full h-full absolute flex justify-center items-center top-0 left-0 bg-gray-800 bg-opacity-50'>
      <div
        ref={modalRef}
        className='relative flex justify-between items-start flex-col border w-96 h-96 rounded-lg bg-white p-5'
      >
        <div className='w-full'>
          <h3 className='flex justify-between w-full font-bold text-2xl'>
            Modal Title
            <div
              onClick={handleClose}
              className='cursor-pointer'
            >
              <AiOutlineClose />
            </div>
          </h3>
          <p className='mt-5'>Modal Body</p>
        </div>
        <Button secondary>Action</Button>
      </div>
    </div>
  );
};

export default Modal;
