import { useContext } from "react";

import Link from "@/components/navigation/Link";
import { HeaderContext } from "@/contexts/HeaderContext";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const slide = {
  initial: { x: 80 },
  enter: (i) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};

export default function DrawerLinks({
  data = {},
  isActive = false,
  setSelectedIndicator,
}) {
  const { label, href, index } = data;
  const { setIsActive } = useContext(HeaderContext);

  return (
    <motion.div
      className="link"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={() => setIsActive(false)}
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="indicator"
      />
      <Link
        to={href}
        linkWithUnderline
        noCustomization={false}
        className="py-2 text-5xl capitalize transition hover:text-orange active:text-orange"
      >
        {label}
      </Link>
    </motion.div>
  );
}

DrawerLinks.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      index: PropTypes.number.isRequired,
    }),
  ).isRequired,
  isActive: PropTypes.bool.isRequired,
  setSelectedIndicator: PropTypes.func.isRequired,
};
