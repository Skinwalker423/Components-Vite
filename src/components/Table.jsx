import React, { Fragment } from "react";
import classNames from "classnames";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const Table = ({ data, config, keyFn }) => {
  if (!data) return;

  console.log("this is config", config);

  const headerColumn = config.map((column) => {
    const label = column.label.toLowerCase();
    if (!column.header)
      return <th key={column.label}>{column.label}</th>;

    const renderedHeader = (
      <Fragment key={column.label}>
        {column.header}
      </Fragment>
    );

    return renderedHeader;
  });

  const tableRows = data.map((rowData) => {
    const rederedCells = config.map((column) => {
      return (
        <td key={column.label} className='p-3'>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className='text-center' key={keyFn(rowData)}>
        {rederedCells}
      </tr>
    );
  });

  return (
    <table className=' w-1/2 table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2 border-black'>
          {headerColumn}
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default Table;
