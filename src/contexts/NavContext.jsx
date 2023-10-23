import { createContext, useEffect, useMemo, useState } from "react";

import PropTypes from "prop-types";

export const NavContext = createContext();

function NavContextProvider({ children }) {
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

  return <NavContext.Provider value={state}>{children}</NavContext.Provider>;
}

NavContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavContextProvider;
