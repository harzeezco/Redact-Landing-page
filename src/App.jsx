/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import { useEffect } from "react";

import LandingPage from "@/page/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Toastify from "toastify-js";
import { registerSW } from "virtual:pwa-register";

function App() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      // eslint-disable-next-line no-unused-vars
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  if ("serviceWorker" in navigator) {
    // && !/localhost/.test(window.location) && !/lvh.me/.test(window.location)) {
    const updateSW = registerSW({
      onNeedRefresh() {
        Toastify({
          text: `<h4 style='display: inline'>An update is available!</h4>
                <br><br>
                <a class='do-sw-update'>Click to update and reload</a>  `,
          escapeMarkup: false,
          gravity: "bottom",
          onClick() {
            updateSW(true);
          },
        }).showToast();
      },
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
