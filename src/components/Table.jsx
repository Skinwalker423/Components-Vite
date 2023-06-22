import React from "react";
import classNames from "classnames";

const Table = ({ data }) => {
  if (!data) return;

  const table = (
    <table className='w-full'>
      <thead className='border-b-2 border-black'>
        <tr>
          <th className='p-2'>Name</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, color, score }) => {
          const finalClassNames = classNames(
            "border w-10 h-10 text-center",
            color
          );
          return (
            <tr className='text-center' key={name}>
              <td className='p-2'>{name}</td>
              <td className='flex justify-center p-1'>
                <div className={finalClassNames}></div>
              </td>
              <td className='p-1'>{score}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return <div>{table}</div>;
};

export default Table;
