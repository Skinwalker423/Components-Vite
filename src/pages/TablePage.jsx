import React from "react";
import { Table } from "../components";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  return (
    <div className='w-full h-full'>
      <Table data={data} />
    </div>
  );
};

export default TablePage;
