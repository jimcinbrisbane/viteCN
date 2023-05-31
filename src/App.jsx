import { useState } from 'react'
import './App.css'
import Rules from './Rules'
import { Routes, Route } from "react-router-dom"
import AnimatedCursor from "./component/cursor"
import Header from './Header'
import Ssp from './ssp'
import Coc from './coc'

function About()
{
  return (

    <div className="edges" style={{ color: "#111", fontFamily: 'Montserrat' }}>
      <h2>Build anything, as long as it&apos;s awesome</h2>
      <p>
        Code Network is a student-led organisation dedicated to fostering a strong developer community for anyone interested in code.
      </p>
      <p> </p>
      <p>
        We seek gradual and consistent development of our members' skills and knowledge through weekly meetups and workshops, providing a stage for them to shine via project engagement, industry-sponsored events and hackathons. We also offer networking opportunities and social spaces for like-minded and aspiring students to communicate, collaborate and most importantly, build and share something awesome.
      </p>
      <p> </p>
      <p>
        We are also active in the Brisbane startup scene, and collaborate frequently with other tech communities on various events, including talks and hackathons. We are confident that we can build an welcoming network that empowers our members to develop fantastic experiences with coding and the tech community.
      </p>
      <p> </p>
      <p>
        Our 6.5k and growing Facebook membership base is active in both the local and international startup communities.
      </p>

      <p> </p>
      <p>This site is a work in progress. If you'd like to contribute, you can do
        so <a href="https://github.com/codenetwork/viteCN">here</a>
      </p>
    </div >
  )
}

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
        </Routes>
      </section>

    </div>
  )
}

export default App;
