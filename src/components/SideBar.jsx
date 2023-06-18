import React, { useState } from "react";
import Link from "./Link";
import Panel from "./Panel";
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
      "bg-slate-300": selected === path,
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
    <div className='h-screen bg-red-300 w-1/6 left-0 fixed flex flex-col items-center justify-center'>
      {renderedLinks}
    </div>
  );
};

export default SideBar;
