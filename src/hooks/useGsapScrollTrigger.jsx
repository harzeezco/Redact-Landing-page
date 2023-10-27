import { useContext, useLayoutEffect, useRef } from "react";

import { HeaderContext } from "@/contexts/HeaderContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useGsapScrollTrigger = () => {
  const button = useRef(null);
  const { isActive, setIsActive } = useContext(HeaderContext);

  useLayoutEffect(() => {
    function handleResize() {
      let scrollTrigger;
      const innerWidth = 1020;
      if (window.innerWidth >= innerWidth) {
        gsap.registerPlugin(ScrollTrigger);

        scrollTrigger = ScrollTrigger.create({
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          onLeave: () => {
            gsap.to(button.current, {
              scale: 1,
              duration: 0.25,
              ease: "power1.out",
            });
          },
          onEnterBack: () => {
            gsap.to(button.current, {
              scale: 0,
              duration: 0.25,
              ease: "power1.out",
            });
            setIsActive(false);
          },
        });
      } else {
        button.current.style = "transform: scale(1)";
      }

      return scrollTrigger;
    }

    let scrollTrigger = handleResize();

    window.addEventListener("resize", () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
        button.current.style = "transform: scale(0)";
        setIsActive(false);
      }
      const newScrollTrigger = handleResize();
      scrollTrigger = newScrollTrigger;
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsActive]);

  return { button, isActive, setIsActive };
};

export default useGsapScrollTrigger;
