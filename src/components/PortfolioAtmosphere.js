import {useEffect} from "react";

export default function PortfolioAtmosphere() {
  useEffect(() => {
    const root = document.documentElement;
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;

    const canTrack = () => finePointer.matches && !reducedMotion.matches;

    const handlePointerMove = event => {
      if (!canTrack()) return;
      if (frameId) return;
      const {clientX, clientY} = event;
      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        root.style.setProperty("--pointer-x", `${clientX}px`);
        root.style.setProperty("--pointer-y", `${clientY}px`);
      });
    };

    const resetPointer = () => {
      root.style.setProperty("--pointer-x", "-20%");
      root.style.setProperty("--pointer-y", "-20%");
    };

    window.addEventListener("pointermove", handlePointerMove, {passive: true});
    window.addEventListener("blur", resetPointer);
    finePointer.addEventListener("change", resetPointer);
    reducedMotion.addEventListener("change", resetPointer);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", resetPointer);
      finePointer.removeEventListener("change", resetPointer);
      reducedMotion.removeEventListener("change", resetPointer);
      resetPointer();
    };
  }, []);

  return (
    <div aria-hidden='true' className='site-backdrop'>
      <div className='site-backdrop-wash' />
      <div className='site-backdrop-grid' />
      <div className='site-backdrop-pointer' />
    </div>
  );
}
