import PropTypes from "prop-types";
import clsx from "clsx";
import useCustomQuery from "hooks/useCustomQuery";

const Paginator = ({ totalCount }) => {
  const { customQuery, setCustomQuery } = useCustomQuery();
  const currentPage = customQuery.page || 1;

  const itemsPerPage = process.env.REACT_APP_ITEMS_PER_PAGE;
  const ceiled = Math.ceil(totalCount / itemsPerPage);

  const prevPage = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < ceiled) {
      changePage(currentPage + 1);
    }
  };

  const changePage = (page) => {
    setCustomQuery({ page });
  };

  return (
    <div className="paginator">
      <button
        className="paginator__button"
        onClick={prevPage}
        data-testid="prev-button"
      >
        &lt;
      </button>
      {Array(ceiled)
        .fill()
        .map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={i}
              className={clsx("paginator__button", {
                "paginator__button--active": currentPage === page,
              })}
              onClick={() => changePage(page)}
            >
              {page}
            </button>
          );
        })}
      <button
        className="paginator__button"
        onClick={nextPage}
        data-testid="next-button"
      >
        &gt;
      </button>
    </div>
  );
};

Paginator.propTypes = {
  totalCount: PropTypes.number.isRequired,
};

export default Paginator;
