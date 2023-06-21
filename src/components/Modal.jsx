import React, { useEffect, useRef } from "react";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";
import ReactDOM from "react-dom";

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

  return ReactDOM.createPortal(
    <div className='absolute inset-0 bg-gray-800 bg-opacity-50'>
      <div
        ref={modalRef}
        className='absolute inset-x-1/3 inset-y-80 flex justify-between items-start flex-col border py-3 px-10 rounded-2xl bg-white'
      >
        <div className='relative w-full h-full flex flex-col items-start justify-around'>
          <div className='w-full h-full'>
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
    </div>,
    document.querySelector("#modal-container")
  );
};

export default Modal;
