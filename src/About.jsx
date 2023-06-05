import './App.css'
import Rules from './Rules'
import { Routes, Route } from "react-router-dom"
import AnimatedCursor from "./component/cursor"
import teamData from "./component/TeamData.json"
import './team.css';

function About()
{
  return (
    <div className="edges" style={{ color: "#111", fontFamily: 'Montserrat' }}>
        <div className = "global-padding">
          <h2>Build anything, as long as it&apos;s awesome</h2>
          <p>
            Code Network is a student-led organisation dedicated to fostering a strong developer community for anyone interested in code.
          </p>
           <p>
            We seek gradual and consistent development of our members' skills and knowledge through weekly meetups and workshops, providing a stage for them to shine via project engagement, industry-sponsored events and hackathons. We also offer networking opportunities and social spaces for like-minded and aspiring students to communicate, collaborate and most importantly, build and share something awesome.
          </p>
          <p>
            We are also active in the Brisbane startup scene, and collaborate frequently with other tech communities on various events, including talks and hackathons. We are confident that we can build an welcoming network that empowers our members to develop fantastic experiences with coding and the tech community.
          </p>
          <p>
            Our 6.5k and growing Facebook membership base is active in both the local and international startup communities.
          </p>
          <p>This site is a work in progress. If you'd like to contribute, you can do
            so <a href="https://github.com/codenetwork/viteCN">here</a>
          </p>
          <div className='padding'></div>
          <h1>Our Team</h1>
            <div className="team-section">
              {teamData.map((member, index) => (
                <div className="team-member" key={index}>
                  <img src={member.photo} alt={member.name} />
                  <h2>{member.name}</h2>
                  <p className="role">{member.role}</p>
                  <p className = "description">{member.description}</p>
                </div>
              ))}
            </div>
        </div>
    </div >
  )
}

export default About;