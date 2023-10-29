import { useState } from "react";

import Button from "@/components/global/Button";
import Curve from "@/components/navigation/Curve";
import DrawerLinks from "@/components/navigation/DrawerLinks";
import { NAV_LINKS } from "@/lib/data";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function Drawer() {
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
      className="fixed right-0 top-0 z-30 h-screen w-full bg-white lg:w-[70vw]"
    >
      <div className="flex w-full justify-between p-16">
        <div className="nav grid h-[80dvh] grid-rows-[auto-1fr-auto] gap-3 text-4xl">
          <p className="border-gray-600 text-gray-600 border-b text-sm uppercase">
            Menu
          </p>

          <ul className="py-4">
            {NAV_LINKS.map((data, index) => (
              <DrawerLinks
                key={data.id}
                data={{ ...data, index }}
                isActive={pathname === data.href}
                setSelectedIndicator={setPathname}
              />
            ))}
          </ul>

          <div className="flex items-center gap-x-6">
            <Button btnType="outline">Log in</Button>
            <Button btnType="dark" background="#1E2A39">
              Sign up
            </Button>
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}

export default Drawer;
