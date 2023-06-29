import React, { Fragment } from "react";

const Table = ({ data, config, keyFn }) => {
  if (!data) return;

  const headerColumn = config.map(({ label, header }) => {
    if (!header) return <th key={label}>{label}</th>;

    const renderedHeader = (
      <Fragment key={label}>{header}</Fragment>
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
