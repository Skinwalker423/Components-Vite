import React from "react";
import Table from "./Table";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const SortableTable = (props) => {
  const { config, handleSorting } = props;

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      console.log("not sortable");
      return { ...column };
    } else {
      console.log("sortable");
      const value = column.sortValue;
      console.log("value: ", value);
      const sortableHeader = (
        <th>
          <div className='flex items-center justify-center gap-2'>
            <div>
              <BiUpArrow
                fontSize={"large"}
                onClick={() => handleSorting(value, true)}
              />
              <BiDownArrow
                fontSize={"large"}
                onClick={() => handleSorting(value, false)}
              />
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
