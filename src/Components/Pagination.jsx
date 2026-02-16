import React from "react";

function Pagination({ pageNo, setPageNo }) {
  const totalPages = 10;
  const previousTwo = Array.from(
    { length: 2 },
    (_, index) => pageNo - 1 - index,
  )
    .filter((value) => value > 0)
    .reverse();
  const nextTwo = Array.from(
    { length: 3 },
    (_, index) => pageNo + index,
  ).filter((v) => v <= totalPages);
  const paginationArr = [...previousTwo, ...nextTwo];

  return (
    <div>
      <div className="flex justify-center items-center gap-3 mt-12">
        <button
          onClick={() => setPageNo(pageNo - 1)}
          disabled={pageNo === 1}
          className={`px-6 py-2 rounded bg-gray-700 hover:bg-gray-800 text-white disabled:hidden`}
        >
          Prev
        </button>
        {paginationArr.map((value, index) => {
          return (
            <span
              key={index}
              className={`px-3 py-1 rounded hover:bg-slate-800 text-white ${value === pageNo ? "bg-black" : "bg-gray-700"}`}
              onClick={() => setPageNo(value)}
            >
              {value}
            </span>
          );
        })}

        <button
          onClick={() => setPageNo(pageNo + 1)}
          disabled={pageNo === totalPages}
          className="px-6 py-2 rounded bg-gray-700 hover:bg-slate-800 text-white disabled:bg-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
