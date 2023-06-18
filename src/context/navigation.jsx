import { createContext, useState, useEffect } from "react";

export const NavigationContext = createContext({});

export default function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname
  );

  useEffect(() => {
    function handlePathChange() {
      console.log("path changed");
      setCurrentPath(window.location.pathname);
    }
    window.addEventListener("popstate", handlePathChange);

    return () =>
      window.removeEventListener(
        "popstate",
        handlePathChange
      );
  }, []);

  function navigate(url = "/") {
    console.log("navigating to", url);
    window.history.pushState({}, "", url);
    setCurrentPath(url);
  }

  const value = {
    currentPath,
    navigate,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}
