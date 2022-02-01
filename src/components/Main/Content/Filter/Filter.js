import { useMemo } from "react";
import { useSelector } from "react-redux";
import { productsSelectors } from "store/productsSlice";

import sortOptions from "mocks/sort-options";
import sortObjectArray from "helpers/sortObjectArray";

import Section from "./Section";

const Filter = () => {
  const products = useSelector((state) => state.products);

  const productsArr = useMemo(() => {
    return productsSelectors.selectAll(products);
  }, [products]);

  const sectionData = (type) => {
    return productsArr
      .map((item) => ({
        id: item[type],
        title: item[type],
        count: productsArr.filter((i) => i[type] === item[type]).length,
      }))
      .reduce((a, b) => {
        if (!a.find((el) => el.id === b.id)) {
          a.push(b);
        }
        return a;
      }, []);
  };

  return (
    <aside className="filter" data-testid="filter">
      <Section
        type="color"
        data={sortObjectArray(sectionData("color"), "title")}
      />
      <Section type="sort" data={sortOptions} />
      <Section
        type="brand"
        data={sortObjectArray(sectionData("brand"), "title")}
      />
    </aside>
  );
};

export default Filter;
