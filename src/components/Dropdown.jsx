import React, { useState } from "react";
import classNames from "classnames";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Dropdown = ({
  options,
  width = 48,
  handleSelect,
  selected,
}) => {
  const [open, setOpen] = useState(false);

  const handleToggleOptions = () => {
    setOpen((bool) => !bool);
  };

  const handleOptionClick = (option) => {
    handleSelect(option);
    setOpen(false);
  };

  const list = options.map((option) => {
    const { label, value } = option;
    const finalClassNames = classNames(
      "hover:bg-slate-200 px-3 py-3 text-xl cursor-pointer",
      {
        "bg-slate-200": selected?.value === value,
      }
    );

    return (
      <div
        className={finalClassNames}
        onClick={() => handleOptionClick(option)}
        key={value}
      >
        <div>{label}</div>
      </div>
    );
  });
  return (
    <div
      className={`w-${width} flex flex-col justify-start mx-auto h-52`}
    >
      <h1
        className='flex justify-between items-center border border-slate-400 px-3 py-2 text-xl cursor-pointer'
        onClick={handleToggleOptions}
      >
        <span>{selected?.label || "Select Color..."}</span>
        <span>
          {open ? <BsChevronUp /> : <BsChevronDown />}
        </span>
      </h1>
      {open && <div className='border'>{list}</div>}
    </div>
  );
};

export default Dropdown;
