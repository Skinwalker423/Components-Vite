import { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen w-'>
      <h1 className='text-6xl my-6'>Dropdown</h1>
      <Dropdown
        handleSelect={handleSelect}
        selected={selected}
        width={"1/2"}
        options={options}
      />
    </div>
  );
}

export default App;
