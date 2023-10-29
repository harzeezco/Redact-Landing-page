import { createContext, useEffect, useMemo, useState } from "react";

import PropTypes from "prop-types";

export const HeaderContext = createContext();

function HeaderContextProvider({ children }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.querySelector("body").classList.add("overflow");
      document.querySelector(".main-container").classList.add("blur-bg");
    } else {
      document.querySelector("body").classList.remove("overflow");
      document.querySelector(".main-container").classList.remove("blur-bg");
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
