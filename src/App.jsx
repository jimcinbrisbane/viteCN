import { useState } from 'react'
import './App.css'
import Content from './Content'
import { Routes, Route } from "react-router-dom"
function Home()
{
  return (
    <div className="App" style={{ color: "#111", fontFamily: 'Open Sans' }}>

      <h1>We Are Code Network</h1>
      <h2>Build anything, as long as it&apos;s awesome</h2>
      <p>
        Our members are heavily involved in the local and international startup
        scene. Our goal as an organisation is to help create the best developer
        talent in the world, starting here in Brisbane. We’re based at QUT and
        are expanding to other universities and organisations in the area.
      </p>
      <p>
        This site is a work in progress. If you'd like to contribute, you can do
        so <a href="https://github.com/codenetwork/codenetwork.co">here</a>
      </p>

    </div>
  )
}
function App()
{

  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="content" element={<Content />} />

      </Routes>

    </div >
  )
}

export default App

