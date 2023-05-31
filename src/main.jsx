import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from "react-router-dom";

import Footer from './Footer'
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar'
import AnimatedCursor from "./component/cursor"

ReactDOM.render(
  <HashRouter >
    <Navbar />
    <App />
    <Footer />
  </HashRouter >,

  document.getElementById("root")
);

