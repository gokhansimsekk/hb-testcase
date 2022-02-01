import { useEffect, useRef, useState } from "react";

import debounce from "lodash/debounce";

import useCustomQuery from "hooks/useCustomQuery";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const { customQuery, setCustomQuery } = useCustomQuery();
  const { q } = customQuery;

  useEffect(() => {
    if (q) {
      setInputValue(q);
    }
  }, [q]);

  const ref = useRef(
    debounce((value) => {
      if (value.length > 1) {
        setCustomQuery({ page: 1, q: value });
        return;
      }
      setCustomQuery({ q: "" });
    }, 500)
  );

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    ref.current(value);
  };

  return (
    <div className="header__search">
      <input
        type="text"
        className="header__search-input"
        onChange={handleChange}
        placeholder="25 milyon’dan fazla ürün içerisinde ara"
        value={inputValue}
        data-testid="search-query"
      />
    </div>
  );
};

export default Search;
