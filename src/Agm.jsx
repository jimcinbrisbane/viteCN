import './App.css'
import Rules from './Rules'
import { Routes, Route } from "react-router-dom"
import AnimatedCursor from "./component/cursor"
import teamData from "./component/TeamData.json"
import './team.css';

function Agm() {
  return (
    <div className="content-wrapper">
      <div className="edges" style={{ color: "#111", fontFamily: 'Montserrat' }}>
        <div className="global-padding">
          <h1>Code Network will be holding the 2023 AGM on Thursday, 5th October 2023.</h1>
          <p>We will be electing our 2024 Executive Team and voting on other business, including constitution amendments.</p>
          <h2>Key Links</h2>
          <table>
            <tr>
              <th>Document</th>
              <th>Link</th>
            </tr>
            <tr>
              <td>Agenda</td>
              <td><a class="link" href="https://codenetwork.co/agmagenda" target="_blank">https://codenetwork.co/agmagenda</a></td>
            </tr>
            <tr>
              <td>Executive Team Positions</td>
              <td><a class="link" href="https://codenetwork.co/agmpositions" target="_blank">https://codenetwork.co/agmpositions</a></td>
            </tr>
            <tr>
              <td>Executive Team EOI Form</td>
              <td><a class="link" href="https://codenetwork.co/agmeoi" target="_blank">https://codenetwork.co/agmeoi</a></td>
            </tr>
            <tr>
              <td>Proposed Constitution Amendments</td>
              <td><a class="link" href="https://codenetwork.co/agmconstitution" target="_blank">https://codenetwork.co/agmconstitution</a></td>
            </tr>
          </table>
        </div>
      </div >
    </div>
  )
}

export default Agm;