import PropTypes from "prop-types";
import Modal from "react-modal";
import useBasket from "hooks/useBasket";

const RemoveModal = ({ data, isOpen, onClose }) => {
  const { removeFromBasket } = useBasket();

  const handleRemove = () => {
    removeFromBasket(data.id);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="modal__overlay"
      className="modal__content"
      ariaHideApp={false}
    >
      <div className="modal__head">Ürünü silmek istediğinize emin misiniz?</div>
      <div className="modal__body">
        <div className="modal__text-content">
          <b>{data.title}</b> isimli ürünü sepetten kaldırmak istediğinize emin
          misiniz?
        </div>
        <div className="modal__buttons">
          <button
            className="modal__button modal__button--green"
            onClick={handleRemove}
            data-testid="accept-button"
          >
            Evet
          </button>
          <button
            className="modal__button modal__button--red"
            onClick={onClose}
            data-testid="cancel-button"
          >
            Hayır
          </button>
        </div>
      </div>
    </Modal>
  );
};

RemoveModal.propTypes = {
  data: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RemoveModal;
