import React from "react";
import { useContext } from "react";
import { NavigationContext } from "../context/navigation";

const Route = ({ path, children }) => {
  const { currentPath } = useContext(NavigationContext);

  if (path !== currentPath) return null;

  return <div>{children}</div>;
};

export default Route;
