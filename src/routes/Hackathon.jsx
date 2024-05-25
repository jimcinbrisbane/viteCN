import { useEffect } from "react";

// Stylesheets
import "@/styles/hackathon/snow.css";
import "@/styles/hackathon/hackathon.css";

// Components
import ProjectCard from "@/components/features/hackathon/ProjectCard";

export default function HackathonPage() {
  useEffect(() => (document.title = "Hackathon | Code Network"), []);
  return (
    <main className="container">
      <div style={{ background: "#0e091b", borderRadius: "0px" }}>
        <div className="snow">
          <div className="hero">
            <div>
              <img className="logo" src="/logo.png" alt="Code Network Logo" />
              <h1>Winter Hackathon</h1>
              <p className="font-bold">
                12-14 July 2024 <span className="px-2">|</span> The Precinct <span className="px-2">|</span> Fortitude Valley
              </p>
              <div className="buttons-list">
                <a className="btn" href="https://events.humanitix.com/code-network-winter-hackathon-2024">
                  Register Today
                </a>
                <a className="btn" href="https://www.facebook.com/events/742663191123606/">
                  Facebook Event
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="edges">
        <div>
          <h2 style={{ marginTop: "0" }}>What on earth is a Hackathon?</h2>
          <div style={{ maxWidth: "80ch" }}>
            <p>
              A hackathon is a collaborative event where you can put your IT skills to the test and build innovative projects quickly. It's
              a great chance to build and present your amazing tech concepts and ideas.
            </p>
            <p>
              In a hackathon you'll usually work in team of similiarly interested IT students and professionals. And you'll have the
              opportunity to learn new skills and network with other attendees. Oh and don't forget the food! The Code Network hackathon
              will include food to keep you energised and building.
            </p>
            <p>
              Code Network welcomes everyone interested in particpating to register, there is no minimum required skillset to be involved.
            </p>
            <br />
            <h3>How do I get involved?</h3>
            <p>
              Use one of the registration links on this page to purchase a ticket from our event page on Humanitix and just turn up Friday
              night ready to go! Stay tuned to our socials to more information, ask questions and be notified about any updates.
            </p>
          </div>
          {/* <p>
          <b>Top Teams Last Year</b>
        </p>
        <ul className="projects-list">
          <ProjectCard team="example team" link="/hackathon" />
          <ProjectCard team="example team" link="/hackathon" />
          <ProjectCard team="example team" link="/hackathon" />
          <ProjectCard team="example team" link="/hackathon" />
        </ul> */}
        </div>
        <br />
        <p>
          12-14 July 2024 <span className="px-2">|</span> The Precinct <span className="px-2">|</span> Fortitude Valley
        </p>
        <div className="end-cta">
          <p>Ready to just say yes!</p>
          <a className="btn" href="https://events.humanitix.com/code-network-winter-hackathon-2024">
            Register Today
          </a>
        </div>
      </div>
    </main>
  );
}
