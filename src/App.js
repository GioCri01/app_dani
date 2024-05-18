import logo from "./logo.svg";
import "./App.css";
import { Suspense, useState } from "react";
// import "node_modules/video-react/dist/video-react.css";

import { Outlet, Route, Router } from "react-router";
import Header from "./components/header/Header";
import Section from "./components/Section/Section";
import Contatti from "./components/contatti/Contatti";
import ProductsList from "./components/ProductsList/ProductsList";
import SeparatorLine from "./components/SeparatorLine/SeparatorLine";


export const HomePage = () =>{
  return(
    <>
      <Section />
      
      <ProductsList/>
     
    </>
  )
}


function App() {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
}

export default App;
