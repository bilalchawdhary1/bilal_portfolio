import {useEffect, useRef} from "react";

// A sparse field of small marks behind the page. At rest they are faint dots.
// Near the pointer they turn toward it, lengthen, brighten and are pushed
// gently away, then spring back. One canvas, one pointer listener, and the
// animation loop only runs while something is actually moving.

const SPACING = 32;
const MAX_DOTS = 2400;
const RADIUS = 180;
const MAX_PUSH = 14;
const REST_SIZE = 1.5;
const MAX_LEN = 11;

const lerpAngle = (from, to, amount) => {
  const diff = Math.atan2(Math.sin(to - from), Math.cos(to - from));
  return {angle: from + diff * amount, diff};
};

export default function CursorField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return undefined;

    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = {x: -9999, y: -9999, active: false};
    let dots = [];
    let width = 0;
    let height = 0;
    let frameId = 0;
    let resizeId = 0;

    const interactive = () => finePointer.matches && !reducedMotion.matches;

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      let spacing = SPACING;
      while (
        (Math.ceil(width / spacing) + 1) * (Math.ceil(height / spacing) + 1) >
        MAX_DOTS
      ) {
        spacing += 4;
      }

      dots = [];
      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          // Deterministic pseudo-random resting angle.
          const seed = ((dots.length * 9301 + 49297) % 233280) / 233280;
          const rest = seed * Math.PI;
          dots.push({
            bx: x,
            by: y,
            ox: 0,
            oy: 0,
            vx: 0,
            vy: 0,
            k: 0,
            rest,
            angle: rest,
          });
        }
      }
    };

    // Returns true while any mark is still moving.
    const draw = () => {
      const dark = document.documentElement.classList.contains("dark");
      const rgb = dark ? "120, 170, 255" : "44, 95, 208";
      ctx.clearRect(0, 0, width, height);

      const radiusSq = RADIUS * RADIUS;
      const live = [];
      let maxDelta = 0;

      ctx.fillStyle = `rgba(${rgb}, ${dark ? 0.16 : 0.22})`;
      ctx.beginPath();

      for (const d of dots) {
        const dx = d.bx - pointer.x;
        const dy = d.by - pointer.y;
        const distSq = dx * dx + dy * dy;
        let influence = 0;
        let tx = 0;
        let ty = 0;
        let target = d.rest;

        if (pointer.active && distSq < radiusSq) {
          const dist = Math.sqrt(distSq) || 1;
          influence = (1 - dist / RADIUS) ** 2;
          tx = (dx / dist) * MAX_PUSH * influence;
          ty = (dy / dist) * MAX_PUSH * influence;
          target = Math.atan2(-dy, -dx);
        }

        d.vx = (d.vx + (tx - d.ox) * 0.14) * 0.76;
        d.vy = (d.vy + (ty - d.oy) * 0.14) * 0.76;
        d.ox += d.vx;
        d.oy += d.vy;

        const turned = lerpAngle(d.angle, target, 0.18);
        d.angle = turned.angle;
        const prevK = d.k;
        d.k += (influence - d.k) * 0.2;

        const delta =
          Math.abs(d.vx) + Math.abs(d.vy) + Math.abs(d.k - prevK) * 10;
        if (delta > maxDelta) maxDelta = delta;

        if (d.k < 0.03 && Math.abs(d.ox) < 0.05 && Math.abs(d.oy) < 0.05) {
          ctx.rect(d.bx - REST_SIZE / 2, d.by - REST_SIZE / 2, REST_SIZE, REST_SIZE);
        } else {
          live.push(d);
        }
      }
      ctx.fill();

      ctx.lineCap = "round";
      ctx.lineWidth = 1.4;
      for (const d of live) {
        const half = (REST_SIZE + (MAX_LEN - REST_SIZE) * d.k) / 2;
        const x = d.bx + d.ox;
        const y = d.by + d.oy;
        const cos = Math.cos(d.angle) * half;
        const sin = Math.sin(d.angle) * half;
        ctx.strokeStyle = `rgba(${rgb}, ${(0.2 + 0.7 * d.k).toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(x - cos, y - sin);
        ctx.lineTo(x + cos, y + sin);
        ctx.stroke();
      }

      return maxDelta > 0.01;
    };

    const tick = () => {
      frameId = 0;
      if (draw()) frameId = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (!frameId && !document.hidden) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    const stop = () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      frameId = 0;
    };

    const handlePointerMove = event => {
      if (event.pointerType !== "mouse") return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
      start();
    };

    const release = () => {
      pointer.active = false;
      start();
    };

    const handleResize = () => {
      window.clearTimeout(resizeId);
      resizeId = window.setTimeout(() => {
        build();
        draw();
      }, 120);
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else draw();
    };

    const themeObserver = new MutationObserver(() => draw());

    build();
    draw();
    window.addEventListener("resize", handleResize);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const listeners = [];
    if (interactive()) {
      window.addEventListener("pointermove", handlePointerMove, {passive: true});
      document.documentElement.addEventListener("pointerleave", release);
      window.addEventListener("blur", release);
      document.addEventListener("visibilitychange", handleVisibility);
      listeners.push(true);
    }

    return () => {
      stop();
      window.clearTimeout(resizeId);
      themeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      if (listeners.length) {
        window.removeEventListener("pointermove", handlePointerMove);
        document.documentElement.removeEventListener("pointerleave", release);
        window.removeEventListener("blur", release);
        document.removeEventListener("visibilitychange", handleVisibility);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className='site-backdrop-field' />;
}
