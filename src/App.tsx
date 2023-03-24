import React from "react";
import Footer from "./components/footer/Footer";

import { Outlet } from "react-router-dom";
import { Nav } from "./components/nav/Nav";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
