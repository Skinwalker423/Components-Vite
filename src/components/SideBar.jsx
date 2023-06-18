import React, { useState } from "react";
import Link from "./Link";
import classNames from "classnames";

const SideBar = () => {
  const [selected, setSelected] = useState(null);
  const links = [
    { label: "Dropdown Page", path: "/" },
    { label: "Accordion Page", path: "/accordion" },
    { label: "Button Page", path: "/button" },
  ];

  const handleSelected = (link) => {
    setSelected(link);
  };

  const renderedLinks = links.map(({ label, path }) => {
    const classes = classNames("px-2 py-3 bg-white", {
      "text-blue-500 border-l border-l-slate-400 font-bold":
        selected === path,
    });
    return (
      <Link
        key={label}
        className={classes}
        handleSelected={handleSelected}
        to={path}
      >
        {label}
      </Link>
    );
  });

  return (
    <div className='sticky top-0 overflow-y-scroll flex flex-col'>
      {renderedLinks}
    </div>
  );
};

export default SideBar;
