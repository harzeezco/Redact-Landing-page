import { createContext, useEffect, useMemo, useState } from "react";

import PropTypes from "prop-types";

export const HeaderContext = createContext();

function HeaderContextProvider({ children }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.querySelector("body").classList.add("overflow");
    } else {
      document.querySelector("body").classList.remove("overflow");
    }
  }, [isActive]);

  const state = useMemo(
    () => ({
      isActive,
      setIsActive,
    }),
    [isActive, setIsActive],
  );

  return (
    <HeaderContext.Provider value={state}>{children}</HeaderContext.Provider>
  );
}

HeaderContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderContextProvider;
