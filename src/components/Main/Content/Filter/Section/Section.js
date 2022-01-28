import PropTypes from "prop-types";
import clsx from "clsx";

const Section = ({ type, data }) => {
  const _title = () => {
    switch (type) {
      case "color":
        return "Renk";
      case "sort":
        return "Sıralama";
      case "brand":
        return "Marka";
      default:
        return "";
    }
  };

  return (
    <div className="filter__section">
      <div className="filter__section-title">{_title()}</div>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <button
              className={clsx("filter__button", {
                "filter__button--active": item.id === "apple",
              })}
              data-testid="filter-button"
            >
              {item.title} (4)
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

Section.propTypes = {
  type: PropTypes.oneOf(["color", "sort", "brand"]).isRequired,
  data: PropTypes.array.isRequired,
};

export default Section;
