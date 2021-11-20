import React, { Children } from "react";

function Table({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col text-left">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            className="
          shadow
          overflow-hidden
          border-b border-gray-200
          sm:rounded-lg
        "
          >
            <table className="min-w-full divide-y divide-gray-200">
             {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;

function Header({ children }: { children: React.ReactNode }) {
  return (
    <thead className="bg-gray-50">
      <tr>{children}</tr>
    </thead>
  );
}

function HeadCol({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
      {children}
    </th>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <tr className="">{children}</tr>;
}

function Col({ children }: { children: React.ReactNode }) {
  return <td className="px-6 py-4 whitespace-nowrap">{children}</td>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Col = Col;
Table.HeadCol = HeadCol;
