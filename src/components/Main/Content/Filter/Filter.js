import colors from "mocks/colors";
import sortOptions from "mocks/sort-options";
import brands from "mocks/brands";

import Section from "./Section";

const Filter = () => {
  return (
    <aside className="filter" data-testid="filter">
      <Section type="color" data={colors} />
      <Section type="sort" data={sortOptions} />
      <Section type="brand" data={brands} />
    </aside>
  );
};

export default Filter;
