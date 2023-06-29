import React, { useState } from "react";
import Table from "./Table";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import useSort from "../hooks/useSort";

const SortableTable = (props) => {
  const { config, data } = props;
  const { setSortColumn, sortBy, sortOrder, sortedData } =
    useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return { ...column };
    } else {
      const sortableHeader = (
        <th onClick={() => setSortColumn(column.label)}>
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
