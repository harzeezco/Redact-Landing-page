import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Link({
  noCustomization = false,
  linkWithUnderline = true,
  children = null,
  ...otherProps
}) {
  return (
    <NavLink
      target={linkWithUnderline ? "_self" : "_blank"}
      className={noCustomization ? "" : ""}
      {...otherProps}
    >
      {children}
    </NavLink>
  );
}

Link.propTypes = {
  noCustomization: PropTypes.bool.isRequired,
  linkWithUnderline: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
