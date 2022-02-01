import { useEffect, useState } from "react";

import history from "@history";

const useQueryRerender = () => {
  const [, rerender] = useState(false);

  useEffect(() => {
    history.listen(() => {
      rerender((state) => !state);
    });

    return () => {
      rerender((state) => !state);
    };
  }, []);
};

export default useQueryRerender;
