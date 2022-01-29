import PropTypes from "prop-types";

const Card = ({ data }) => {
  return (
    <div className="card" title={data.title}>
      <div className="card__image">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="card__content">
        <div className="card__title">{data.title}</div>
        <div className="card__feature">
          <b>Marka: </b> <span>{data.brand}</span>
        </div>
        <div className="card__feature">
          <b>Renk: </b> <span>{data.color}</span>
        </div>
        <div className="card__price">
          {data.discount_rate ? data.discounted_price : data.price} TL
        </div>
        {data.discount_rate && (
          <div data-testid="old-price-discount-rate">
            <span className="card__old-price">{data.price} TL</span>
            <span className="card__discount-rate"> {data.discount_rate}</span>
          </div>
        )}
        <button className="card__button" disabled={data.id === 3}>
          {data.id === 3 ? "Bu ürünü sepete ekleyemezsiniz." : "Sepete Ekle"}
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
