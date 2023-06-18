import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Panel from "./Panel";

const Dropdown = ({
  options,
  width = "w-full",
  onChange,
  value,
}) => {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (!dropdownRef.current) {
        return;
      }

      if (!dropdownRef?.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick, true);

    return document.removeEventListener(
      "click",
      handleClick
    );
  }, []);

  const handleToggleOptions = () => {
    setOpen((bool) => !bool);
  };

  const handleOptionClick = (option) => {
    onChange(option);
    setOpen(false);
  };

  const list = options.map((option) => {
    const { label } = option;
    const finalClassNames = classNames(
      "hover:bg-slate-200 rounded px-3 py-3 m-1 text-xl cursor-pointer",
      {
        "bg-slate-200": value?.value === option.value,
      }
    );

    return (
      <div
        className={finalClassNames}
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        <div>{label}</div>
      </div>
    );
  });
  return (
    <div ref={dropdownRef} className='w-48 relative'>
      <Panel>
        <h1
          className='flex justify-between items-center py-2 px-3'
          onClick={handleToggleOptions}
        >
          <span>{value?.label || "Select Color..."}</span>
          <span>
            {open ? <BsChevronUp /> : <BsChevronDown />}
          </span>
        </h1>
      </Panel>
      {open && <Panel>{list}</Panel>}
    </div>
  );
};

export default Dropdown;
