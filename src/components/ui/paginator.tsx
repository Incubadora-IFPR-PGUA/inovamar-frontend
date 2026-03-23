import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

type PaginatorProps = {
  totalItems: number;
  page: number;
  perPage: number;
};

function Paginator({ page, totalItems, perPage }: PaginatorProps) {
  const totalPages = Math.ceil(totalItems / perPage);
  const pagesToShow = 5;

  let startPage = Math.max(1, page - Math.floor(pagesToShow / 2));
  let endPage = startPage + pagesToShow - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full">
      <div className="flex justify-center items-center mt-5 w-full gap-5">
        {page > 1 && page <= totalPages && (
          <Link
            to={`?page=${page - 1}`}
            reloadDocument
            className="rounded text-gray-700 cursor-pointer text-xl"
          >
            <FaAngleLeft />
          </Link>
        )}

        {pageNumbers.map(pageNum => (
          <Link
            key={pageNum}
            to={`?page=${pageNum}`}
            reloadDocument
            className={`p-2 text-xl font-bold no-underline cursor-pointer text-gray-700
              ${page === pageNum
            ? "bg-gray-200 text-gray-500 pointer-events-none cursor-default rounded"
            : ""
          }`}
          >
            {pageNum}
          </Link>
        ))}

        {page < totalPages && (
          <Link
            to={`?page=${page + 1}`}
            reloadDocument
            className="rounded text-gray-700 cursor-pointer text-xl"
          >
            <FaAngleRight />
          </Link>
        )}
      </div>

      {page >= 1 && page <= totalPages && (
        <span className="text-gray-700 font-medium">
          Página
          {" "}
          {page}
          {" "}
          de
          {" "}
          {totalPages}
        </span>
      )}
    </div>
  );
}

export default Paginator;
