import PropTypes from "prop-types";
import useBasket from "hooks/useBasket";

const Row = ({ data }) => {
  const { removeFromBasket } = useBasket();

  const handleRemoveFromBasket = () => {
    removeFromBasket(data.id);
  };

  return (
    <div className="basket__item">
      <img className="basket__item-image" src={data.image} alt={data.title} />
      <div>
        <span className="basket__item-text">{data.title}</span>
        <button
          className="basket__item-remove-button"
          onClick={handleRemoveFromBasket}
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
