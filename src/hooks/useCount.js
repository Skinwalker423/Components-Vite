import React, { useState, useEffect } from "react";

const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log("count changed");
  }, [count]);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };
  const decrementCount = () => {
    setCount((count) => count - 1);
  };

  return { count, incrementCount, decrementCount };
};

export default useCounter;
