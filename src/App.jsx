import { useState } from 'react'
import './App.css'
import Rules from './Rules'
import { Routes, Route } from "react-router-dom"
import AnimatedCursor from "./component/cursor"
import Header from './Header'
import Ssp from './ssp'
import Coc from './coc'
import About from './About'
import Agm from './Agm'

function App()
{
  return (
    <div>
      <section className="auto-margin App">
        <AnimatedCursor />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/ssp" element={<Ssp />} />
          <Route path="/coc" element={<Coc />} />
          <Route path="/agm" element={<Agm />} />
        </Routes>
      </section>

    </div>
  )
}

export default App;
