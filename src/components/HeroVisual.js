import dynamic from "next/dynamic";
import {useEffect, useRef, useState} from "react";
import HeroDiagramFallback from "@/components/HeroDiagramFallback";

const AIEngineeringScene = dynamic(
  () => import("@/components/AIEngineeringScene"),
  {
    ssr: false,
    loading: () => <HeroDiagramFallback />,
  },
);

export default function HeroVisual() {
  const visualRef = useRef(null);
  const [isSmallViewport, setIsSmallViewport] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    const smallViewport = window.matchMedia("(max-width: 767px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreferences = () => {
      setIsSmallViewport(smallViewport.matches);
      setPrefersReducedMotion(reducedMotion.matches);
    };

    updatePreferences();
    smallViewport.addEventListener("change", updatePreferences);
    reducedMotion.addEventListener("change", updatePreferences);

    return () => {
      smallViewport.removeEventListener("change", updatePreferences);
      reducedMotion.removeEventListener("change", updatePreferences);
    };
  }, []);

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return undefined;

    if (!("IntersectionObserver" in window)) {
      const fallbackFrame = window.requestAnimationFrame(() =>
        setIsInView(true),
      );
      return () => window.cancelAnimationFrame(fallbackFrame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      {rootMargin: "120px"},
    );
    const updatePageVisibility = () =>
      setIsPageVisible(document.visibilityState === "visible");

    observer.observe(visual);
    document.addEventListener("visibilitychange", updatePageVisibility);
    updatePageVisibility();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePageVisibility);
    };
  }, []);

  const use3D =
    !isSmallViewport &&
    !prefersReducedMotion &&
    isInView;

  return (
    <div
      ref={visualRef}
      role='group'
      aria-label='Interactive AI engineering ecosystem'
      className='hero-enter hero-enter-3 hero-visual-card w-full max-w-[430px] rounded-[2rem] border border-dark/10 bg-white p-5 shadow-lg shadow-dark/5 dark:border-light/10 dark:bg-[#202020] dark:shadow-black/10 sm:p-3'
    >
      {use3D ? (
        <AIEngineeringScene active={isInView && isPageVisible} />
      ) : (
        <HeroDiagramFallback />
      )}
    </div>
  );
}
