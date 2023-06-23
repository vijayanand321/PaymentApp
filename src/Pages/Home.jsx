//import './App.css';
import About from "../Component/About";
import Contact from "../Component/Contact";
import Head from "../Component/Head";
import How from "../Component/How";
import Navbar from "../Component/Navbar";
import Services from "../Component/Services";
import "../index.css";
import React from 'react';
import Footer from "../Component/Footer";

function Home() {

  return (
    <div className="App">
       <Navbar></Navbar>
       <Head></Head>
       <How></How>
       <About></About>
       <Services></Services>
       <Contact></Contact>
       <Footer></Footer>
    </div>
  );
}

export default Home;
