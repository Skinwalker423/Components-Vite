import React, { useState } from "react";
import { Table } from "../components";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const [tableData, setTableData] = useState(data);

  const handleFilterAscending = () => {
    console.log("clicked filer asc");
    const sortedData = tableData.sort((a, b) => {
      if (a.score < b.score) {
        return -1;
      }
      if (a.score > b.score) {
        return 1;
      }
      return 0;
    });
    console.log("sorted data:", sortedData);
    setTableData([...sortedData]);
  };
  const handleFilterDescending = () => {
    console.log("clicked filer desc");
    const sortedData = tableData.sort((a, b) => {
      if (a.score > b.score) {
        return -1;
      }
      if (a.score < b.score) {
        return 1;
      }
      return 0;
    });
    console.log("sorted data:", sortedData);
    setTableData([...sortedData]);
  };

  return (
    <div className='w-full h-full'>
      <Table
        handleFilterAscending={handleFilterAscending}
        handleFilterDescending={handleFilterDescending}
        data={tableData}
      />
    </div>
  );
};

export default TablePage;
