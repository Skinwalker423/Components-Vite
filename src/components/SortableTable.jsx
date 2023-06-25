import React, { useState } from "react";
import Table from "./Table";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, handleSorting, data } = props;

  const handleClick = (label) => {
    if (sortBy !== label) {
      setSortBy(label);
      setSortOrder("asc");
    } else {
      if (sortOrder === "asc") {
        setSortBy(label);
        setSortOrder("desc");
      } else if (sortOrder === "desc") {
        setSortBy(null);
        setSortOrder(null);
      } else {
        setSortOrder("asc");
        setSortBy(label);
      }
    }
  };

  let sortedData = data;

  if (sortOrder && sortBy) {
    const { sortValue } = config.find(
      (column) => column.label === sortBy
    );
    sortedData = [...data].sort((a, b) => {
      const valA = sortValue(a);
      const valB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valA === "string") {
        console.log(valA, valB);
        return valA.localeCompare(valB) * reverseOrder;
      } else {
        console.log(valA, valB);
        return (valA - valB) * reverseOrder;
      }
    });
  }

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return { ...column };
    } else {
      const sortableHeader = (
        <th onClick={() => handleClick(column.label)}>
          <div className='flex items-center justify-center gap-2'>
            <div className='h-10'>
              {(sortOrder === "asc" ||
                sortOrder === null ||
                sortBy !== column.label) && (
                <BiUpArrow fontSize={"large"} />
              )}
              {(sortOrder === "desc" ||
                sortOrder === null ||
                sortBy !== column.label) && (
                <BiDownArrow fontSize={"large"} />
              )}
            </div>
            <div>{column.label}</div>
          </div>
        </th>
      );

      return { ...column, header: sortableHeader };
    }
  });

  return (
    <Table
      {...props}
      config={updatedConfig}
      data={sortedData}
    />
  );
};

export default SortableTable;
