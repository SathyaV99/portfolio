import "./Professional.css";

export default function Professional() {
  return (
    <section id="professional" className="professional terminal-bg">
      <div className="terminal">

        <div id="about">
          <TerminalLine prompt="$" text="whoami" />
          <TerminalOutput>
            <span className="name">Sathya Venkat</span>
          </TerminalOutput>

          <TerminalLine prompt="$" text="about" />
          <TerminalOutput>
            I build data-driven, user-focused interfaces that turn complex
            information into clear, actionable insights — bridging analytics
            and frontend development.
          </TerminalOutput>
        </div>

        <div id="skills">
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
        </div>

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
