// import { useState } from 'react'
// import Signup from './components/Signup'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Main from "./components/Main"
// import Underweight from './components/Underweight'
// import Dietplan from './components/Dietplan'
// import Overweight from './components/Overweight'
// import Normalweight from './components/Normalweight'

// const App = () => {
//   return (
//    //<Signup/>
//    //<Navbar/>
//   //  <Home/>
//   //  <Main/>
//   //  <Underweight />
//   //  <Dietplan/>
//   // <Overweight/>
//     <Normalweight/>
//   )
// }

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import Underweight from "./components/Underweight";
import NormalWeight from "./components/Normalweight";
import Overweight from "./components/Overweight";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi-calculator" element={<Main />} />
        <Route path="/underweight" element={<Underweight />} />
        <Route path="/normal-weight" element={<NormalWeight />} />
        <Route path="/overweight" element={<Overweight />} />
      </Routes>
    </Router>
  );
};

export default App;
