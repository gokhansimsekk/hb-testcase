import PropTypes from "prop-types";
import clsx from "clsx";

import useCustomQuery from "hooks/useCustomQuery";

const Row = ({ type, data }) => {
  const { customQuery, setCustomQuery } = useCustomQuery();
  const { sort, brand, color } = customQuery;

  const isActive = () => {
    const { id } = data;

    switch (type) {
      case "sort":
        return sort === id;
      case "brand":
        return brand.includes(id);
      case "color":
        return color.includes(id);
      default:
        return false;
    }
  };

  const handleClick = () => {
    const { id } = data;
    let val;

    switch (type) {
      case "brand":
        val = isActive() ? brand.filter((item) => item !== id) : [...brand, id];
        break;
      case "color":
        val = isActive() ? color.filter((item) => item !== id) : [...color, id];
        break;
      case "sort":
        val = isActive() ? "" : id;
        break;
      default:
        break;
    }

    setCustomQuery({ page: 1, [type]: val });
  };

  return (
    <button
      className={clsx("filter__button", {
        "filter__button--active": isActive(),
      })}
      onClick={handleClick}
      data-testid="filter-button"
    >
      {`${data.title} ${data.count > 0 ? `(${data.count})` : ""}`}
    </button>
  );
};

Row.propTypes = {
  type: PropTypes.oneOf(["color", "sort", "brand"]).isRequired,
  data: PropTypes.object.isRequired,
};

export default Row;
