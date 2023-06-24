import React, { Fragment } from "react";
import classNames from "classnames";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const Table = ({ data, config, keyFn }) => {
  if (!data) return;

  const headerColumn = config.map((header) => {
    const label = header.label.toLowerCase();
    const renderedHeader = header.header ? (
      <Fragment key={header.label}>
        {header.header()}
      </Fragment>
    ) : (
      <th key={header.label}>{header.label}</th>
    );
    console.log(label);
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
