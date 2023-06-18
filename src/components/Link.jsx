import React from "react";
import { useContext } from "react";
import { NavigationContext } from "../context/navigation";
import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

const Link = ({ children, to }) => {
  const { navigate } = useNavigation();

  const finalClassNames = classNames("text-blue-500", {});

  const handleClick = (e) => {
    if (e.ctrlKey || e.metaKey) {
      return;
    } else {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a
      className={finalClassNames}
      onClick={handleClick}
      href={to}
    >
      {children}
    </a>
  );
};

export default Link;
