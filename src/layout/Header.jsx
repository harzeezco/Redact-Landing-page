import { useContext } from "react";

import redactLogo from "@/assets/Svg/redactLogo.svg";
import Button from "@/components/global/Button";
import RegularList from "@/components/global/RegularList";
import Drawer from "@/components/navigation/Drawer";
import Link from "@/components/navigation/Link";
import Nav from "@/components/navigation/Nav";
import NavToggler from "@/components/navigation/NavToggler";
import { HeaderContext } from "@/contexts/HeaderContext";
import { NAV_LINKS } from "@/lib/data";
import { AnimatePresence } from "framer-motion";

function Header() {
  const { isActive } = useContext(HeaderContext);

  return (
    <header className="mx-auto flex max-w-[1070px] items-center justify-between px-5 py-10 md:flex-row">
      <Link to="/" noCustomization linkWithUnderline>
        <img src={redactLogo} alt="Logo" width="103" height="44" />
      </Link>
      <nav className="hidden lg:inline-block" role="navigation">
        <ul className="flex items-center gap-x-10">
          <RegularList
            resourceName="link"
            itemComponent={Nav}
            items={NAV_LINKS}
          />
        </ul>
      </nav>

      <div className="hidden gap-x-6 lg:inline-flex lg:items-center">
        <Button btnType="outline">Log in</Button>
        <Button btnType="dark" background="#1E2A39">
          Sign up
        </Button>
      </div>

      <NavToggler />

      <AnimatePresence mode="wait">{isActive && <Drawer />}</AnimatePresence>
    </header>
  );
}

export default Header;
