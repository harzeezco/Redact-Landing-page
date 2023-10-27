import { useState } from "react";

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
      className="fixed right-0 top-0 z-10 h-screen w-full bg-white lg:w-[70vw]"
    >
      <div className="flex h-full flex-col justify-between p-16">
        <div className="nav flex flex-col gap-3 text-4xl">
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
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}

export default Drawer;
