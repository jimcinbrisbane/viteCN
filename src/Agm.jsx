import './App.css'
import Rules from './Rules'
import { Routes, Route } from "react-router-dom"
import AnimatedCursor from "./component/cursor"
import teamData from "./component/TeamData.json"
import './agm.css';

function Agm() {
  return (
    <div className="content-wrapper">
      <div className="edges" style={{ color: "#111", fontFamily: 'Montserrat' }}>
        <div className="global-padding">
          <h1>Code Network's 2023 AGM</h1>
          <p>We will be electing our 2024 Executive Team and voting on other business, including constitution amendments.</p>
          <p><b>When and Where:</b> 5-8pm Thursday 5/10/2023 at QUT GP-D106</p>
          <h2>Key Links</h2>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '4px', flexWrap: 'wrap' }} id="agmLinks">
            <a href="https://codenetwork.co/agmagenda" target="_blank">Agenda</a>
            <a href="https://codenetwork.co/agmpositions" target="_blank">Executive Positions</a>
            <a href="https://codenetwork.co/agmeoi" target="_blank">Executive EOI</a>
            <a href="https://codenetwork.co/agmconstitution" target="_blank">Constitution Amendments</a>
          </div>
        </div>
      </div >
    </div>
  )
}

export default Agm;