import CurveSideNav from "../components/navigation/CurveSideNav";
import redactLogo from "@/assets/Svg/redactLogo.svg";
import RegularList from "@/components/globals/RegularList";
import Link from "@/components/navigation/Link";
import Nav from "@/components/navigation/Nav";
import { NAV_LINKS } from "@/lib/data";

function Navbar() {
  return (
    <header className="mx-auto flex max-w-[1070px] items-center justify-between px-5 py-14 md:flex-row">
      <Link to="/">
        <img src={redactLogo} alt="Logo" width="103" height="44" />
      </Link>
      <nav className="hidden md:inline-block" role="navigation">
        <ul className="flex items-center gap-x-14">
          <RegularList
            resourceName="link"
            itemComponent={Nav}
            items={NAV_LINKS}
          />
        </ul>
      </nav>

      <div className="hidden gap-x-8 md:inline-flex md:items-center">
        <button type="button">sign in</button>
        <button type="button">sign up</button>
      </div>

      <CurveSideNav />
    </header>
  );
}

export default Navbar;
