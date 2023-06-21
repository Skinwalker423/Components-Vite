import React from "react";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";
import ReactDOM from "react-dom";

const Modal = ({
  onClose,
  children,
  actionBar,
  closeIcon = false,
}) => {
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className='absolute inset-0 bg-gray-800 bg-opacity-50'
      ></div>
      <div className='absolute inset-80 flex justify-between flex-col border px-10 py-3 rounded-2xl bg-white'>
        {closeIcon && (
          <div
            onClick={onClose}
            className='absolute top-0 right-0 px-5 py-2 cursor-pointer rounded-full hover:bg-slate-50'
          >
            <AiOutlineClose />
          </div>
        )}
        <div className='relative w-full h-full flex flex-col justify-around'>
          {children}
          <div className='relative flex justify-between items-center'>
            {actionBar}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal-container")
  );
};

export default Modal;
