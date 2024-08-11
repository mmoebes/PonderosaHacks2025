import React from "react";
import "./App.css";
import {
  About,
  Footer,
  Home,
  Navbar,
  // Judges,
  Theme,
  Team,
  // Scheduled,
  // Faq,
  Venue,
  // Gallery,
  Sponsors
} from "./components";

import { TopButton } from "./components/TopButton";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Theme />
      <Venue />
      {/* <Scheduled /> */}
      <Sponsors />
      <Team />
      {/* <Judges/> */}
      {/* <Faq /> */}
      {/* <Gallery /> */}
      <Footer />
      <TopButton />
    </div>
  );
};

export default App;
