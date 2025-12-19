import "./Divider.css";

const base = process.env.PUBLIC_URL;

const blocks = [
  `${base}/assets/red_lego.jpg`,
  `${base}/assets/blue_lego.jpg`,
  `${base}/assets/green_lego.jpg`,
  `${base}/assets/yellow_lego.jpg`,
];

export default function Divider() {
  return (
    <div className="divider">
      {Array.from({ length: 14 }).map((_, i) => {
        const img = blocks[Math.floor(Math.random() * blocks.length)];
        const rotation = Math.random() * 12 - 6;

        return (
          <img
            key={i}
            src={img}
            alt="lego block"
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
          />
        );
      })}
    </div>
  );
}
