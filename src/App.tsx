import "./App.css";
import { Header } from "./components/Header";
import { TopSlider } from "./components/TopSlider";
import { Wrapper } from "./components/wrapper/Wrapper";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

function App() {
  return (
    <>
      <header className="w-full md:fixed top-0 z-10 bg-transparent">
        <Header />
      </header>
      <div className="bg-[#191B24] relative top-0">
        <TopSlider />
      </div>
      <div className="s bg-[#191B24]">
        <Wrapper />
      </div>
      <footer className=" bg-[#0F111A]">
        <Footer />
      </footer>
      <BackToTop />
    </>
  );
}

export default App;
