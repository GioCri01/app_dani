import logo from "./logo.svg";
import "./App.css";
import { Suspense, useState, useEffect } from "react";
// import "node_modules/video-react/dist/video-react.css";

import { Outlet, Route, Router, useLocation } from "react-router";
import Header from "./components/header/Header";
import Section from "./components/Section/Section";
import Contatti from "./components/contatti/Contatti";
import ProductsList from "./components/ProductsList/ProductsList";
import SeparatorLine from "./components/SeparatorLine/SeparatorLine";
import ScrollButton from "./components/scrollButton/ScrollButton";
import { unstable_HistoryRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { log } from "three/examples/jsm/nodes/Nodes.js";

export const HomePage = () => {
  return (
    <>
      <Section />

      <ProductsList />
    </>
  );
};

function App() {
  const location = useLocation();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location?.pathname]);
  return (
    <>
      <Header />
      <Outlet />
      {/* <ScrollButton /> */}
    </>
  );
}

export default App;
