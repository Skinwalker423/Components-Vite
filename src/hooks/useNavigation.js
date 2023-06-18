import { useContext } from "react";
import { NavigationContext } from "../context/navigation";

const useNavigation = () => {
  const { currentPath, navigate } = useContext(
    NavigationContext
  );
  return { currentPath, navigate };
};

export default useNavigation;
