import { useEffect, useRef } from "react";

const loadImage = (src) => {
  const img = new Image();
  img.src = src;
  return img;
};

export default function SpaceBattleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let viewWidth = 0;
    let viewHeight = 0;

    // ===== RESIZE =====
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;

      viewWidth = rect.width;
      viewHeight = rect.height;
    };

    resize();
    window.addEventListener("resize", resize);

    // ===== PLAYER =====
    const player = {
      x: viewWidth / 2,
      y: viewHeight - 60,
      size: 90,
      health: 3,
    };

    // ===== BULLETS =====
    const resumes = [];
    const shoot = { active: false };

    // ===== IMAGES =====
    const base = process.env.PUBLIC_URL;

    const playerImg = loadImage(`${base}/assets/player.png`);
    const resumeImg = loadImage(`${base}/assets/resume.png`);

    let playerReady = false;
    let resumeReady = false;

    playerImg.onload = () => (playerReady = true);
    resumeImg.onload = () => (resumeReady = true);


    playerImg.onerror = () => {
      console.error("FAILED TO LOAD player.png");
    };

    resumeImg.onerror = () => {
      console.error("FAILED TO LOAD resume.png");
    };
    // ===== INPUT =====
    const mouse = { x: player.x, y: player.y };

    const move = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    canvas.addEventListener("mousemove", move);
    window.addEventListener("mousedown", () => {
      resumes.push({
        x: player.x,
        y: player.y - player.size / 2,
        speed: 3,
        size: 70,
      });
    });

    // ===== SHOOTING =====
    const FIRE_RATE = 5; // shots per second
    const FIRE_DELAY = 1000 / FIRE_RATE; // ms between shots
    let lastShot = 0;
    const fire = (time) => {
      if (!shoot.active) return;

      if (time - lastShot >= FIRE_DELAY) {
        resumes.push({
          x: player.x,
          y: player.y - player.size / 2,
          speed: 3,
          size: 70,
        });

        lastShot = time;
      }
    };


    // ===== LOOP =====
    const loop = (time) => {
      fire(time);

      // Background
      ctx.fillStyle = "#ffff";
      ctx.fillRect(0, 0, viewWidth, viewHeight);

      // Debug border
      ctx.strokeStyle = "lime";
      ctx.strokeRect(0, 0, viewWidth, viewHeight);

      // Player movement
      player.x += (mouse.x - player.x) * 0.35;
      player.y += (mouse.y - player.y) * 0.35;

      player.x = Math.max(player.size / 2, Math.min(viewWidth - player.size / 2, player.x));
      player.y = Math.max(player.size / 2, Math.min(viewHeight - player.size / 2, player.y));

      // Draw player
      if (playerReady) {
        ctx.drawImage(
          playerImg,
          player.x - player.size / 2,
          player.y - player.size / 2,
          player.size,
          player.size
        );
      } else {
        ctx.fillStyle = "red";
        ctx.fillRect(player.x - 10, player.y - 10, 20, 20);
      }

      // Draw bullets
      for (let i = resumes.length - 1; i >= 0; i--) {
        const r = resumes[i];
        r.y -= r.speed;

        if (resumeReady) {
          ctx.drawImage(
            resumeImg,
            r.x - r.size / 2,
            r.y - r.size / 2,
            r.size,
            r.size
          );
        } else {
          ctx.fillStyle = "yellow";
          ctx.fillRect(r.x - 2, r.y - 8, 4, 12);
        }

        if (r.y < -20) resumes.splice(i, 1);
      }

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}
