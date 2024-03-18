import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/navbar";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/main";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </>
  );
};

export default App;
