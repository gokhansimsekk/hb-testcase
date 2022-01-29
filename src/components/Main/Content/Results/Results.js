import products from "mocks/products";

import Card from "./Card";
import Paginator from "./Paginator";

const Results = () => {
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
