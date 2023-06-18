import { useState } from "react";
import { Dropdown } from "../components";

function DropdownPage() {
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
    <div>
      <Dropdown
        onChange={handleSelect}
        value={selected}
        width={"w-1/2"}
        options={options}
      />
    </div>
  );
}

export default DropdownPage;
