import React, { useState } from "react";
import { Table } from "../components";
import classNames from "classnames";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 30 },
    { name: "banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const [tableData, setTableData] = useState(data);

  const handleSorting = (column, ascending) => {
    const sortedData = tableData.sort((a, b) => {
      const first =
        typeof a[column] === "number"
          ? a[column]
          : a[column].toString().toLowerCase();
      const second =
        typeof b[column] === "number"
          ? b[column]
          : b[column].toString().toLowerCase();

      if (first < second) {
        return ascending ? -1 : 1;
      }
      if (first > second) {
        return ascending ? 1 : -1;
      }
      return 0;
    });
    console.log("sorted data:", sortedData);
    setTableData([...sortedData]);
  };

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sort: handleSorting,
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
      sort: handleSorting,
      header: () => {
        return (
          <th>
            <div className='flex items-center justify-center gap-2'>
              <div>
                <BiUpArrow
                  fontSize={"large"}
                  onClick={() =>
                    handleSorting("score", true)
                  }
                />
                <BiDownArrow
                  fontSize={"large"}
                  onClick={() =>
                    handleSorting("score", false)
                  }
                />
              </div>
              <div>Score</div>
            </div>
          </th>
        );
      },
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div className='w-full h-full'>
      <Table
        data={tableData}
        config={config}
        keyFn={keyFn}
      />
    </div>
  );
};

export default TablePage;
