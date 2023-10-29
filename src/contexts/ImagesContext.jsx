import { createContext, useState, useMemo, useEffect } from "react";

import { useInView } from "react-cool-inview";

export const ImagesContext = createContext();

function ImagesContextProvider({ children = null }) {
  const [imageCategories, setImageCategories] = useState("Recommended");
  const [isElementVisible, setIsElementVisible] = useState(false);

  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  });

  useEffect(() => {
    const l = setTimeout(() => {
      setIsElementVisible(inView);
    }, 1000);

    return () => clearTimeout(l);
  }, [inView]);

  const state = useMemo(
    () => ({ imageCategories, setImageCategories, observe, isElementVisible }),
    [imageCategories, setImageCategories, observe, isElementVisible],
  );

  return (
    <ImagesContext.Provider value={state}>{children}</ImagesContext.Provider>
  );
}

export default ImagesContextProvider;
