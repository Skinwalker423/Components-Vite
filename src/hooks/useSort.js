import React, { useState } from "react";

const useSort = (data, config) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
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
        return valA.localeCompare(valB) * reverseOrder;
      } else {
        return (valA - valB) * reverseOrder;
      }
    });
  }

  return { sortedData, setSortColumn, sortBy, sortOrder };
};

export default useSort;
