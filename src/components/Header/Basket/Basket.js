import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { basketSelectors } from "store/basketSlice";
import { setData } from "store/basketSlice";

import Row from "./Row";

const Basket = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket"));

    if (storedBasket) {
      dispatch(setData(storedBasket));
    }
  }, [dispatch]);

  const basketItems = useMemo(() => {
    return basketSelectors.selectAll(basket);
  }, [basket]);

  const isBasketEmpty = useMemo(() => {
    return basketItems.length === 0;
  }, [basketItems]);

  return (
    <div className="basket">
      <button className="basket__open-button">
        {!isBasketEmpty && (
          <span
            className="basket__open-button-badge"
            data-testid="basket-badge"
          >
            {basketItems.length}
          </span>
        )}
        <span className="basket__open-button-text">Sepetim</span>
      </button>
      <div className="basket__content">
        <div className="basket__inner">
          {!isBasketEmpty ? (
            <div>
              {basketItems.map((item) => (
                <Row key={item.id} data={item} />
              ))}
            </div>
          ) : (
            <div className="basket__no-data">
              Sepetinizde ürün bulunmamaktadır.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
