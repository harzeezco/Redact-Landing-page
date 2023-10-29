import HeaderContextProvider from "@/contexts/HeaderContext";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Main from "@/layout/Main";

function LandingPage() {
  return (
    <div className="bg-fadeWhite">
      <HeaderContextProvider>
        <Header />
      </HeaderContextProvider>
      <Main />
      <Footer />
    </div>
  );
}

export default LandingPage;
