import { useState } from "react";
import PropTypes from "prop-types";
import RemoveModal from "../RemoveModal";

const Row = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleRemoveFromBasket = () => {
    setModalOpen(true);
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
        <RemoveModal
          data={data}
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
};

Row.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Row;
