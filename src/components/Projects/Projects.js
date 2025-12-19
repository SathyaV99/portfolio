import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">

      {/* LINKS PANEL */}
      <div className="panel">
        <p>
          Art Portfolio:{" "}
          <a href="https://artstation.com" target="_blank" rel="noreferrer">
            ArtStation
          </a>
        </p>
        <p>
          Experience:{" "}
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </div>

      {/* CURRENT WORK PANEL */}
      <div className="panel">
        <h3>What am I doing now?</h3>
        <ul>
          <li>Building creative, game-style web experiences</li>
          <li>Working on personal React projects</li>
          <li>Experimenting with pixel & indie UI design</li>
          <li>Leveling up frontend skills</li>
        </ul>
      </div>

      {/* FEATURED PROJECT */}
      <div className="game-card">
        <h3>Pixel Portfolio</h3>
        <p>
          A retro-inspired portfolio built with React and styled like an indie
          game UI.
        </p>

        <div className="game-actions">
          <a
            href="https://github.com/SathyaV99"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        <button className="play-btn" disabled>
            Live Demo (Coming Soon)
        </button>
        </div>
      </div>

    </section>
  );
}
