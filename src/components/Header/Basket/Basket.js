import { useState, useEffect } from "react";
import clsx from "clsx";

const Basket = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleClose = (e) => {
      if (isOpen && !e.target.closest(".basket")) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClose);

    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="basket">
      <button
        className={clsx("basket__open-button ", {
          "basket__open-button--opened": isOpen,
        })}
        onClick={handleToggle}
        data-testid="basket-open-button"
      >
        <span className="basket__open-button-badge">4</span>
        <span className="basket__open-button-text">Sepetim</span>
      </button>
      {isOpen && (
        <div className="basket__content">
          <div className="basket__inner">
            <div className="basket__item">
              <img
                className="basket__item-image"
                src="https://www.onlygfx.com/wp-content/uploads/2020/05/old-mobile-phones-3.png"
                alt="Ürün Adı"
              />
              <div>
                <span className="basket__item-text">
                  iPhone 11 Kırmızı Kılıflı Garantili TelefoniPhone 11 Kırmızı
                  Kılıflı Garantili
                </span>
                <button className="basket__item-remove-button">Kaldır</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
