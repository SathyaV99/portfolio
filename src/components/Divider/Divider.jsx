import "./Divider.css";

export default function Divider() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="divider">
      {/* LEFT TRAIN – moves DOWN */}
      <img
        src={`${process.env.PUBLIC_URL}/assets/train_left.gif`}
        alt="Train Down"
        className="train train-left"
      />

      {/* LEGO STACK */}
      <div className="lego-stack">
        <button className="lego-btn" onClick={() => scrollTo("about")}>
          <img src={`${process.env.PUBLIC_URL}/assets/orange_lego.jpg`} alt="" />
          <span>About</span>
        </button>

        <button className="lego-btn" onClick={() => scrollTo("education")}>
          <img src={`${process.env.PUBLIC_URL}/assets/blue_lego.jpg`} alt="" />
          <span>Education</span>
        </button>

        <button className="lego-btn" onClick={() => scrollTo("experience")}>
          <img src={`${process.env.PUBLIC_URL}/assets/green_lego.jpg`} alt="" />
          <span>Experience</span>
        </button>

        <button className="lego-btn" onClick={() => scrollTo("skills")}>
          <img src={`${process.env.PUBLIC_URL}/assets/yellow_lego.jpg`} alt="" />
          <span>Skills</span>
        </button>

        <button className="lego-btn" onClick={() => scrollTo("contact")}>
          <img src={`${process.env.PUBLIC_URL}/assets/red_lego.jpg`} alt="" />
          <span>Contact</span>
        </button>
      </div>

      {/* RIGHT TRAIN – moves UP */}
      <img
        src={`${process.env.PUBLIC_URL}/assets/train_right.gif`}
        alt="Train Up"
        className="train train-right"
      />
    </div>
  );
}
