import PropTypes from "prop-types";

import Row from "./Row";

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
            <Row type={type} data={item} />
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
