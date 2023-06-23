//import './App.css';
import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from 'react-router-dom';
import AboutPage from "./Pages/AboutPage";
import Error from "./Pages/Error";
import ContactUs from "./Pages/ContactUs";
import Service from "./Pages/Service";

function App() {

  return (
    <>
      <Routes>
      <Route exact path="/"  element={<Home></Home>} />
      <Route path="/about" element={<AboutPage></AboutPage>} />
      <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
      <Route path="/service" element={<Service></Service>}></Route>
      <Route element={<Error></Error>}></Route>
      </Routes>
    </>
  );
}

export default App;
