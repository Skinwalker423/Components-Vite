import React from "react";
import classNames from "classnames";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const Table = ({
  data,
  handleFilterDescending,
  handleFilterAscending,
}) => {
  if (!data) return;

  const table = (
    <table className='w-full'>
      <thead className='border-b-2 border-black'>
        <tr>
          <th className='p-2'>Name</th>
          <th>Color</th>
          <th className='flex items-center justify-center gap-3'>
            <div className='hover:cursor-pointer'>
              <BiUpArrow
                fontSize={"large"}
                onClick={handleFilterAscending}
              />
              <BiDownArrow
                fontSize={"large"}
                onClick={handleFilterDescending}
              />
            </div>
            Score
          </th>
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

  return table;
};

export default Table;
