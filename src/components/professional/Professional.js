import "./Professional.css";

export default function Professional() {
  return (
    <section className="professional terminal-bg">
      <div className="terminal">

        <TerminalLine prompt="$" text="whoami" />
        <TerminalOutput>
          <span className="name">Sathya Venkat</span>
        </TerminalOutput>

        <TerminalLine prompt="$" text="role" />
        <TerminalOutput>
          Data Analyst · Financial Data Analyst
        </TerminalOutput>

        <TerminalLine prompt="$" text="about" />
        <TerminalOutput>
          I build data-driven, user-focused interfaces that turn complex
          information into clear, actionable insights — bridging analytics
          and frontend development.
        </TerminalOutput>

        <TerminalLine prompt="$" text="skills --data" />
        <TerminalOutput>
          SQL<br />
          Python (Pandas, NumPy)<br />
          Tableau<br />
          Power BI<br />
          Data Visualization
        </TerminalOutput>

        <TerminalLine prompt="$" text="skills --frontend" />
        <TerminalOutput>
          HTML5<br />
          CSS3<br />
          JavaScript (ES6+)<br />
          React<br />
          Canvas / Interactive UI
        </TerminalOutput>

        <TerminalLine prompt="$" text="links" />
        <TerminalOutput>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a><br />
          <a href="https://github.com/SathyaV99" target="_blank">GitHub</a>
        </TerminalOutput>

        <div className="cursor">█</div>
      </div>
    </section>
  );
}

function TerminalLine({ prompt, text }) {
  return (
    <div className="terminal-line">
      <span className="prompt">{prompt}</span> {text}
    </div>
  );
}

function TerminalOutput({ children }) {
  return <div className="terminal-output">{children}</div>;
}