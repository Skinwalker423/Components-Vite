import React from "react";
import { SortableTable } from "../components";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 30 },
    { name: "banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
    { name: "Eggplant", color: "bg-purple-500", score: 10 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => (
        <div className='flex justify-center items-center'>
          <div
            className={`p-2 m-3 w-5 h-5 ${fruit.color}`}
          />
        </div>
      ),
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: "Score Squared",
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div className='w-full h-full'>
      <SortableTable
        data={data}
        config={config}
        keyFn={keyFn}
      />
    </div>
  );
};

export default TablePage;
