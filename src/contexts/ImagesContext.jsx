import { createContext, useState, useMemo, useEffect } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import { useInView } from "react-cool-inview";

export const ImagesContext = createContext();

function ImagesContextProvider({
  children = null,
  initialCategory = "Recommendedgjhklkll",
}) {
  const [category, setCategory] = useLocalStorage("category", initialCategory);
  const [isElementVisible, setIsElementVisible] = useState(false);
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  });

  useEffect(() => {
    const visibleTimeout = setTimeout(() => {
      setIsElementVisible(inView);
    }, 1000);

    return () => clearTimeout(visibleTimeout);
  }, [inView]);

  const state = useMemo(
    () => ({ category, setCategory, observe, isElementVisible }),
    [category, setCategory, observe, isElementVisible],
  );

  return (
    <ImagesContext.Provider value={state}>{children}</ImagesContext.Provider>
  );
}

export default ImagesContextProvider;
