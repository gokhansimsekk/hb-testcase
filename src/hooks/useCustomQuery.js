import {
  useQueryParams,
  NumberParam,
  StringParam,
  withDefault,
  DelimitedArrayParam,
} from "use-query-params";
import useQueryRerender from "hooks/useQueryRerender";

const useCustomQuery = () => {
  useQueryRerender();

  const [customQuery, _setCustomQuery] = useQueryParams({
    page: NumberParam,
    color: withDefault(DelimitedArrayParam, []),
    brand: withDefault(DelimitedArrayParam, []),
    sort: StringParam,
    q: StringParam,
  });

  const setCustomQuery = (param) => {
    _setCustomQuery(param);
  };

  return { customQuery, setCustomQuery };
};

export default useCustomQuery;
