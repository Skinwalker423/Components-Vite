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
        setSortOrder("desc");
      } else if (sortOrder === "desc") {
        setSortOrder(null);
      } else {
        setSortOrder("asc");
      }
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      console.log("not sortable");
      return { ...column };
    } else {
      console.log("sortable");
      const value = column.sortValue;
      console.log("value: ", value);
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
            <div>Score</div>
          </div>
        </th>
      );

      return { ...column, header: sortableHeader };
    }
  });

  return <Table {...props} config={updatedConfig} />;
};

export default SortableTable;
