import {useEffect, useRef} from "react";

const ScrollReveal = ({children, className = ""}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (
      !container ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const elements = container.querySelectorAll("[data-scroll-reveal]");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {threshold: 0.05, rootMargin: "0px 0px -32px 0px"}
    );

    elements.forEach((element, index) => {
      element.style.setProperty(
        "--scroll-reveal-delay",
        `${Math.min(index * 70, 280)}ms`
      );
      element.classList.add("scroll-reveal-pending");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
