import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="terminal-nav">
      <div className="terminal-brand">
        <span className="prompt">$</span> Sathya
      </div>

      <ul className="terminal-links">
        <li>&gt; Projects</li>
        <li>&gt; Contact</li>
      </ul>
    </nav>
  );
}
