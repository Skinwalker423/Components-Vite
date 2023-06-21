import React from "react";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";
import ReactDOM from "react-dom";

const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className='absolute inset-0 bg-gray-800 bg-opacity-50'
      ></div>
      <div className='absolute inset-x-1/3 inset-y-80 flex justify-between items-start flex-col border py-3 px-10 rounded-2xl bg-white'>
        <div className='relative w-full h-full flex flex-col items-start justify-around'>
          <div className='w-full h-full'>
            <h3 className='flex justify-between w-full font-bold text-2xl'>
              Modal Title
              <div
                onClick={onClose}
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
