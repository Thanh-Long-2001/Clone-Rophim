import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import { TopSlider } from "./components/TopSlider";
import { Wrapper } from "./components/wrapper/Wrapper";

function App() {
  return (
    <>
      <div className="w-full fixed top-0 z-10 bg-transparent">
        <Header />
      </div>
      <div className="bg-[#202331] relative top-0">
        <TopSlider />
      </div>
      <div className="w-full bg-[#202331]">
        <Wrapper />
      </div>
    </>
  );
}

export default App;
