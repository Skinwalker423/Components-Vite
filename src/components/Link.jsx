import React from "react";
import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

const Link = ({
  children,
  to,
  handleSelected,
  className,
}) => {
  const { navigate } = useNavigation();

  const finalClassNames = classNames(
    "text-blue-500 w-full",
    className
  );

  const handleClick = (e) => {
    if (e.ctrlKey || e.metaKey) {
      return;
    } else {
      e.preventDefault();
      handleSelected(to);
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
