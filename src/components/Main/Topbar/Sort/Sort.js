import { useEffect, useState } from "react";

import sortOptions from "mocks/sort-options";

import useCustomQuery from "hooks/useCustomQuery";

const Sort = () => {
  const [selectValue, setSelectValue] = useState("");

  const { customQuery, setCustomQuery } = useCustomQuery();
  const { sort } = customQuery;

  useEffect(() => {
    if (sort) {
      setSelectValue(sort);
    }
  }, [sort]);

  const handleChange = (e) => {
    const { value } = e.target;

    setSelectValue(value);
    setCustomQuery({ page: 1, sort: value });
  };

  return (
    <select
      className="main-top__select"
      value={selectValue}
      onChange={handleChange}
      data-testid="sort-select"
    >
      <option value="">Sıralama</option>
      {sortOptions.map((item) => (
        <option key={item.id} value={item.id}>
          {item.title}
        </option>
      ))}
    </select>
  );
};

export default Sort;
