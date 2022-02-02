import { useEffect, useState } from "react";

import history from "@history";

const useQueryRerender = () => {
  const [, rerender] = useState(false);

  useEffect(() => {
    let isMounted = true;

    history.listen(() => {
      if (isMounted) rerender((state) => !state);
    });

    return () => {
      isMounted = false;
    };
  }, []);
};

export default useQueryRerender;
