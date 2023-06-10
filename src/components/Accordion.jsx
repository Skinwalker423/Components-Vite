import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Accordion = ({ items }) => {
  const [selected, setSelected] = useState("");

  const handleClick = (id) => {
    setSelected((item) => {
      if (item === id) {
        return "";
      } else return id;
    });
  };

  const renderedItems = items.map(
    ({ id, title, content }) => {
      const isSelected = selected === id;

      return (
        <div key={id} className='w-full border'>
          <div
            onClick={() => {
              handleClick(id);
            }}
            className='bg-gray-50 flex justify-between items-center py-2 px-2 rounded-md cursor-pointer hover:text-red-300 focus:text-red-300'
          >
            {title}
            {isSelected ? (
              <BsChevronUp />
            ) : (
              <BsChevronDown />
            )}
          </div>
          {isSelected && (
            <div className={"text-left p-7"}>
              <div>{content}</div>
            </div>
          )}
        </div>
      );
    }
  );
  return <div className='w-80 h-full'>{renderedItems}</div>;
};

export default Accordion;
