import React from "react";
import classNames from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  ...rest
}) => {
  const finalClassName = classNames(
    rest.className,
    "flex items-center gap-3 justify-center px-2 py-3 border w-56",
    {
      "border-blue-500 bg-blue-500 hover:bg-blue-400":
        primary,
      "border-gray-900 bg-gray-900 hover:bg-gray-700":
        secondary,
      "border-green-500 bg-green-500 hover:bg-green-400":
        success,
      "bg-orange-500 hover:bg-yellow-400":
        warning && !outline,
      "border-red-500 bg-red-500 hover:bg-red-400": danger,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-red-500": outline && danger,
      "border-yellow-500 text-yellow-500 hover:bg-yellow-500":
        outline && warning,
      "text-white":
        !outline &&
        (primary ||
          secondary ||
          success ||
          warning ||
          danger),
      "hover:text-white":
        outline &&
        (primary ||
          secondary ||
          success ||
          warning ||
          danger),
      "rounded-full": rounded,
      "bg-white": outline,
    }
  );

  console.log(finalClassName);

  return (
    <button {...rest} className={finalClassName}>
      {children}
    </button>
  );
};

export default Button;
