import clsx from "clsx";

import useCustomQuery from "hooks/useCustomQuery";

const Title = () => {
  const { customQuery } = useCustomQuery();
  const { q = "" } = customQuery;

  return (
    <div>
      <span className="main-top__title">Cep Telefonu</span>
      <span className={clsx({ invisible: !q })} data-testid="search-query">
        <span className="main-top__search">Aranan Kelime: </span>
        <span className="main-top__query">{q}</span>
      </span>
    </div>
  );
};

export default Title;
