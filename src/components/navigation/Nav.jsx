import { Link } from "react-router-dom";

function Nav({ link }) {
  const { href, label } = link;

  return (
    <Link
      to={href}
      className="underlineLink relative inline-block text-lg text-grayLight no-underline"
    >
      {label}
    </Link>
  );
}

export default Nav;
