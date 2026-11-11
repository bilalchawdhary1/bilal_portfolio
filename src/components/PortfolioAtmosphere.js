import {useEffect, useRef} from "react";

const CRYSTAL_COUNT = 20;
const PARTICLE_COUNT = 24;

function createParticles() {
  return Array.from({length: CRYSTAL_COUNT + PARTICLE_COUNT}, (_, index) => ({
    x: ((index * 0.61803398875) % 1) * 1.08 - 0.04,
    y: ((index * 0.75487766625 + 0.173) % 1) * 1.08 - 0.04,
    radius: index < CRYSTAL_COUNT ? 3.2 + (index % 4) * 1.2 : 1 + (index % 3) * 0.35,
    sides: 4 + (index % 3),
    phase: index * 2.399963,
    offsetX: 0,
    offsetY: 0,
    crystal: index < CRYSTAL_COUNT,
  }));
}

export default function PortfolioAtmosphere() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", {alpha: true});
    if (!canvas || !context) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    const particles = createParticles();
    const pointer = {x: -1000, y: -1000};
    let frameId = 0;
    let lastFrameTime = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;

    const draw = time => {
      if (!width || !height) return;
      context.clearRect(0, 0, width, height);

      const positions = particles.map(particle => {
        const baseX =
          ((particle.x + Math.sin(time * 0.00016 + particle.phase) * 0.012 + 1) %
            1) *
          width;
        const baseY =
          ((particle.y +
            Math.sin(time * 0.00012 + particle.phase * 1.3) * 0.016 +
            1) %
            1) *
          height;
        const deltaX = baseX - pointer.x;
        const deltaY = baseY - pointer.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const influence = Math.max(0, 1 - distance / 170);
        const force = influence * (particle.crystal ? 15 : 9);
        const targetX = distance > 0 ? (deltaX / distance) * force : 0;
        const targetY = distance > 0 ? (deltaY / distance) * force : 0;

        particle.offsetX += (targetX - particle.offsetX) * 0.045;
        particle.offsetY += (targetY - particle.offsetY) * 0.045;

        return {
          x: baseX + particle.offsetX,
          y: baseY + particle.offsetY,
          particle,
        };
      });

      for (let index = 0; index < CRYSTAL_COUNT; index += 1) {
        const first = positions[index];
        let nearest = null;
        let nearestDistance = 150;

        for (let otherIndex = index + 1; otherIndex < CRYSTAL_COUNT; otherIndex += 1) {
          const second = positions[otherIndex];
          const distance = Math.hypot(first.x - second.x, first.y - second.y);
          if (distance < nearestDistance) {
            nearest = second;
            nearestDistance = distance;
          }
        }

        if (nearest) {
          context.beginPath();
          context.moveTo(first.x, first.y);
          context.lineTo(nearest.x, nearest.y);
          context.strokeStyle = "rgba(104, 151, 221, 0.055)";
          context.lineWidth = 0.7;
          context.stroke();
        }
      }

      positions.forEach(({x, y, particle}, index) => {
        const drift = Math.sin(time * 0.0005 + particle.phase) * 0.22;

        if (!particle.crystal) {
          const glow = context.createRadialGradient(x, y, 0, x, y, 5);
          glow.addColorStop(0, "rgba(112, 163, 238, 0.48)");
          glow.addColorStop(1, "rgba(112, 163, 238, 0)");
          context.fillStyle = glow;
          context.beginPath();
          context.arc(x, y, 5, 0, Math.PI * 2);
          context.fill();
          return;
        }

        const rotation = particle.phase + drift + time * 0.00008;
        const brightness = 0.12 + ((index % 4) * 0.025);
        const points = [];

        for (let side = 0; side < particle.sides; side += 1) {
          const angle = rotation + (side / particle.sides) * Math.PI * 2;
          points.push([
            x + Math.cos(angle) * particle.radius,
            y + Math.sin(angle) * particle.radius * 1.25,
          ]);
        }

        context.beginPath();
        context.moveTo(points[0][0], points[0][1]);
        points.slice(1).forEach(([pointX, pointY]) => context.lineTo(pointX, pointY));
        context.closePath();
        context.fillStyle = `rgba(97, 146, 220, ${brightness * 0.24})`;
        context.fill();
        context.strokeStyle = `rgba(105, 157, 231, ${brightness})`;
        context.lineWidth = 0.8;
        context.stroke();

        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(points[index % points.length][0], points[index % points.length][1]);
        context.strokeStyle = `rgba(133, 177, 235, ${brightness * 0.68})`;
        context.lineWidth = 0.6;
        context.stroke();
      });
    };

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.25);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      draw(performance.now());
    };

    const stop = () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      frameId = 0;
    };

    const animate = time => {
      frameId = 0;
      if (document.visibilityState !== "visible") return;
      if (time - lastFrameTime >= 1000 / 30) {
        draw(time);
        lastFrameTime = time;
      }
      frameId = window.requestAnimationFrame(animate);
    };

    const start = () => {
      stop();
      if (
        document.visibilityState !== "visible" ||
        reducedMotion.matches ||
        !finePointer.matches ||
        window.innerWidth < 768
      ) {
        draw(performance.now());
        return;
      }
      lastFrameTime = 0;
      frameId = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = event => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };
    const resetPointer = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };
    const handleVisibilityChange = () => start();

    resize();
    start();
    window.addEventListener("resize", resize, {passive: true});
    window.addEventListener("pointermove", handlePointerMove, {passive: true});
    window.addEventListener("blur", resetPointer);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    reducedMotion.addEventListener("change", start);
    finePointer.addEventListener("change", start);

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", resetPointer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      reducedMotion.removeEventListener("change", start);
      finePointer.removeEventListener("change", start);
    };
  }, []);

  return (
    <div
      aria-hidden='true'
      className='portfolio-atmosphere pointer-events-none fixed inset-0 z-0 overflow-hidden'
    >
      <div className='portfolio-atmosphere-glow absolute inset-0' />
      <canvas ref={canvasRef} className='absolute inset-0 h-full w-full' />
    </div>
  );
}
