import { useDispatch } from "react-redux";
import { addItem, removeItem } from "store/basketSlice";

const useBasket = () => {
  const dispatch = useDispatch();

  const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];

  const addToBasket = (data) => {
    const { id, title, image } = data;
    const obj = {
      id,
      title,
      image,
      inserttime: new Date().getTime(),
    };
    dispatch(addItem(obj));
    localStorage.setItem("basket", JSON.stringify([...storedBasket, obj]));
  };

  const removeFromBasket = (id) => {
    dispatch(removeItem(id));
    localStorage.setItem(
      "basket",
      JSON.stringify(storedBasket.filter((item) => item.id !== id))
    );
  };

  return { addToBasket, removeFromBasket };
};

export default useBasket;
