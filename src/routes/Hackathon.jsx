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
                <a className="btn">Register Today</a>
                <a className="btn">Facebook Event</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="edges">
        <div style={{ paddingTop: "1rem" }}>
          <h2>What on earth is a Hackathon?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nobis? Eum optio eligendi nihil maiores quibusdam tempore
            ipsa sint corporis temporibus, aut animi facilis a ab ipsum doloremque hic deleniti.
          </p>
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
          <a className="btn">Register Today</a>
        </div>
      </div>
    </main>
  );
}
