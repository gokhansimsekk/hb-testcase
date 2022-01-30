import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "store/productsSlice";

import products from "mocks/products";

import Card from "./Card";
import Paginator from "./Paginator";

const Results = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(products));
  }, [dispatch]);

  return (
    <div className="results" data-testid="results">
      {products.map((item) => (
        <Card key={item.id} data={item} />
      ))}
      <Paginator />
    </div>
  );
};

export default Results;
