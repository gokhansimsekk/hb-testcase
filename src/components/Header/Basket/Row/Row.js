import { useDispatch } from "react-redux";
import { removeItem } from "store/basketSlice";

import PropTypes from "prop-types";

const Row = ({ data }) => {
  const dispatch = useDispatch();

  const removeFromBasket = () => {
    dispatch(removeItem(data.id));
  };

  return (
    <div className="basket__item">
      <img className="basket__item-image" src={data.image} alt={data.title} />
      <div>
        <span className="basket__item-text">{data.title}</span>
        <button
          className="basket__item-remove-button"
          onClick={removeFromBasket}
          data-testid="remove-button"
        >
          Kaldır
        </button>
      </div>
    </div>
  );
};

Row.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Row;
