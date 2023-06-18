import React from "react";
import useNavigation from "../hooks/useNavigation";

const Route = ({ path, children }) => {
  const { currentPath } = useNavigation();

  if (path !== currentPath) return null;

  return <div className='relative'>{children}</div>;
};

export default Route;
