import { useEffect } from "react";

function useScrollToTop(trigger?: unknown) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [trigger]);
}

export default useScrollToTop;
