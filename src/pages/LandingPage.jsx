import NavContextProvider from "@/contexts/NavContext";
import Footer from "@/layout/Footer";
import Main from "@/layout/Main";
import Navbar from "@/layout/Navbar";

function LandingPage() {
  return (
    <div>
      <NavContextProvider>
        <Navbar />
      </NavContextProvider>
      <Main />
      <Footer />
    </div>
  );
}

export default LandingPage;
