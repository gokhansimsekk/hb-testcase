import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData, productsSelectors } from "store/productsSlice";

import productsMock from "mocks/products";
import sortObjectArray from "helpers/sortObjectArray";
import useCustomQuery from "hooks/useCustomQuery";

import Card from "./Card";
import Paginator from "./Paginator";

const Results = () => {
  const dispatch = useDispatch();

  const { customQuery } = useCustomQuery();
  const {
    page: currentPage = 1,
    q = "",
    sort,
    brand: currentBrands,
    color: currentColors,
  } = customQuery;

  const itemsPerPage = process.env.REACT_APP_ITEMS_PER_PAGE;

  const products = useSelector((state) => state.products);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));

    if (storedProducts) {
      dispatch(setData(storedProducts));
    } else {
      localStorage.setItem("products", JSON.stringify(productsMock));
      dispatch(setData(productsMock));
    }
  }, [dispatch]);

  const productsArr = useMemo(() => {
    return productsSelectors.selectAll(products);
  }, [products]);

  // filter by color and brand
  const filtered = () => {
    let arr = [...productsArr];

    if (currentBrands.length > 0) {
      arr = arr.filter(({ brand }) => currentBrands.includes(brand));
    }
    if (currentColors.length > 0) {
      arr = arr.filter(({ color }) => currentColors.includes(color));
    }

    return arr;
  };

  // filter by query
  const searched = () => {
    return filtered().filter(({ title }) =>
      title.toLowerCase().includes(q.toLowerCase())
    );
  };

  // sort by order
  const sorted = () => {
    switch (sort) {
      case "highest":
        return sortObjectArray(
          searched().map((item) => ({
            ...item,
            _price: parseFloat(item.discounted_price || item.price),
          })),
          "_price",
          "desc"
        );
      case "lowest":
        return sortObjectArray(
          searched().map((item) => ({
            ...item,
            _price: parseFloat(item.discounted_price || item.price),
          })),
          "_price",
          "asc"
        );
      case "newest": {
        return sortObjectArray(searched(), "inserttime", "desc");
      }
      case "oldest":
        return sortObjectArray(searched(), "inserttime", "asc");
      default:
        return searched();
    }
  };

  // paginated results
  const paginated = () => {
    return sorted()
      .map((item) => <Card key={item.id} data={item} />)
      .filter((_, i) => {
        return (
          i >= currentPage * itemsPerPage - itemsPerPage &&
          i < currentPage * itemsPerPage
        );
      });
  };

  return (
    <div className="results" data-testid="results">
      {paginated().length > 0 ? (
        <>
          {paginated()}
          <Paginator totalCount={sorted().length} currentPage={currentPage} />
        </>
      ) : (
        <div className="results__no-data">Ürün bulunamadı</div>
      )}
    </div>
  );
};

export default Results;
