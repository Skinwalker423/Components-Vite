import React from "react";
import Link from "./Link";
import classNames from "classnames";

const SideBar = () => {
  const links = [
    { label: "Dropdown Page", path: "/" },
    { label: "Accordion Page", path: "/accordion" },
    { label: "Button Page", path: "/button" },
    { label: "Modal Page", path: "/modal" },
    { label: "Table Page", path: "/table" },
  ];

  const renderedLinks = links.map(({ label, path }) => {
    const classes = classNames("mb-3 px-2");
    return (
      <Link
        activeClassName='text-blue-500 border-l-4 border-l-slate-400 font-bold'
        className={classes}
        key={label}
        to={path}
      >
        {label}
      </Link>
    );
  });

  return (
    <div className='sticky overflow-y-scroll top-0 flex flex-col items-start'>
      {renderedLinks}
    </div>
  );
};

export default SideBar;
