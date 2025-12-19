import "./Gamified.css";
import SpaceBattleCanvas from "./game/SpaceBattleCanvas";

export default function Gamified() {
  return (
    <section className="gamified">
      <div className="gamified-ui">
        <div className="panel">
          <h3>PLAYER STATUS</h3>
          <p>Data Level: 12</p>
          <p>Data XP: 3420</p>
        </div>

        <div className="panel">
          <h3>ACTIVE QUEST</h3>
          <p>Build a retro portfolio UI</p>
        </div>
      </div>

      {/* 🔥 GAME LIVES HERE */}
      <div className="game-area">
        <SpaceBattleCanvas />
      </div>
    </section>
  );
}
