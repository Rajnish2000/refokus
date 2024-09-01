import Cards from "./components/Cards";
import Marquees from "./components/Marquees";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Stripes from "./components/Stripes";
import Work from "./components/Work";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full h-full bg-zinc-900 text-zinc-50 font-[satoshi]">
        <NavBar />
        <Work />
        <Stripes />
        <Products />
        <Marquees />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
