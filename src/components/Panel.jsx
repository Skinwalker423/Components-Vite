import React from "react";
import classNames from "classnames";

const Panel = ({ className, children, ...rest }) => {
  const finalClassNames = classNames(
    "relative flex flex-col justify-center rounded shadow border border-slate-400 px-3 py-2 w-full bg-white",
    className
  );
  return (
    <div className={finalClassNames} {...rest}>
      {children}
    </div>
  );
};

export default Panel;
