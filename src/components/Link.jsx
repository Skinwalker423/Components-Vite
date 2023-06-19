import React from "react";
import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

const Link = ({
  children,
  to,
  activeClassName,
  className,
}) => {
  const { navigate, currentPath } = useNavigation();

  const finalClassNames = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

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
