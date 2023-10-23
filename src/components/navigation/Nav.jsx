import { Link } from "react-router-dom";

function Nav({ link }) {
  const { href, label } = link;

  return (
    <Link
      to={href}
      className="text-lg text-grayLight underline-text relative inline-block no-underline"
    >
      {label}
    </Link>
  );
}

export default Nav;
