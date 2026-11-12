import {useEffect, useRef, useState} from "react";

// Isometric "exploded layer" view of an AI application. Each plate is one
// layer of the stack; cards face the camera and wires carry the request path.
// Everything is CSS 3D (transforms only), so there is no WebGL cost and no
// extra dependency.

const nodes = [
  {
    id: "apps",
    index: "01",
    label: "Applications",
    meta: "Product interfaces",
    detail: "Interfaces where people use the AI feature.",
    layer: 0,
    ox: 0,
    oy: 0,
  },
  {
    id: "api",
    index: "02",
    label: "API Layer",
    meta: "REST contracts",
    detail: "The REST boundary between clients and Python services.",
    layer: 1,
    ox: 0,
    oy: 0,
  },
  {
    id: "backend",
    index: "03",
    label: "FastAPI",
    meta: "Python services",
    detail: "Python services that own workflow, validation, and orchestration.",
    layer: 2,
    ox: 0,
    oy: 0,
  },
  {
    id: "llm",
    index: "04",
    label: "LLM Processing",
    meta: "Prompts and streams",
    detail: "Prompt assembly, model calls, and streamed replies.",
    layer: 3,
    ox: -62,
    oy: -48,
  },
  {
    id: "models",
    index: "05",
    label: "AI Models",
    meta: "OpenAI · Gemini",
    detail: "Provider integrations such as OpenAI and Gemini.",
    layer: 3,
    ox: 62,
    oy: 48,
  },
  {
    id: "data",
    index: "06",
    label: "Database",
    meta: "PostgreSQL · MongoDB",
    detail: "PostgreSQL and MongoDB for the records those services use.",
    layer: 4,
    ox: 0,
    oy: 0,
  },
];

const nodeById = Object.fromEntries(nodes.map(node => [node.id, node]));
const PLATE_COUNT = 5;
const plateOwners = [["apps"], ["api"], ["backend"], ["llm", "models"], ["data"]];

// Vertical wires run between plates along the centre of the stack.
const wires = [
  {id: "apps-api", from: 0, to: 1, ids: ["apps", "api"], dur: "3.4s", delay: "-0.4s"},
  {id: "api-backend", from: 1, to: 2, ids: ["api", "backend"], dur: "3.4s", delay: "-1.6s"},
  {
    id: "backend-data",
    from: 2,
    to: 4,
    ids: ["backend", "llm", "models", "data"],
    dur: "4.6s",
    delay: "-2.3s",
  },
];

// Short stubs on the AI layer branch off the trunk toward each card.
const traces = [
  {id: "trace-llm", node: "llm", angle: 218, length: 24},
  {id: "trace-models", node: "models", angle: 38, length: 24},
];

const mobileOrder = nodes.map(node => node.id);

function NodeButton({node, active, floating, onHover, onHoverEnd, onFocus, onBlur}) {
  return (
    <button
      type='button'
      className={`arch-node${active ? " is-active" : ""}${floating ? " iso-card" : ""}`}
      style={
        floating
          ? {"--layer": node.layer, "--ox": node.ox, "--oy": node.oy}
          : undefined
      }
      aria-describedby='architecture-caption'
      onPointerEnter={onHover}
      onPointerLeave={onHoverEnd}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <span className='arch-index'>{node.index}</span>
      <span className='arch-copy'>
        <span className='arch-label'>{node.label}</span>
        <span className='arch-meta'>{node.meta}</span>
      </span>
    </button>
  );
}

export default function ArchitectureDiagram() {
  const stageRef = useRef(null);
  const frameRef = useRef(0);
  const [hoverId, setHoverId] = useState(null);
  const [focusId, setFocusId] = useState(null);
  const [animateFlows, setAnimateFlows] = useState(false);
  const [inView, setInView] = useState(true);
  const activeId = hoverId || focusId;
  const activeNode = nodeById[activeId];

  useEffect(() => {
    const stage = stageRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const smallViewport = window.matchMedia("(max-width: 767px)");

    const sync = () => {
      const frozen =
        reducedMotion.matches || coarsePointer.matches || smallViewport.matches;
      stage?.setAttribute("data-static", frozen ? "true" : "false");
      if (frozen && stage) {
        stage.style.setProperty("--tilt-x", "0");
        stage.style.setProperty("--tilt-z", "0");
      }
      setAnimateFlows(!reducedMotion.matches && !smallViewport.matches);
    };

    sync();
    reducedMotion.addEventListener("change", sync);
    coarsePointer.addEventListener("change", sync);
    smallViewport.addEventListener("change", sync);

    // Pause the data-flow animation when the visual is off screen.
    let observer;
    if (stage && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        {threshold: 0.05},
      );
      observer.observe(stage);
    }

    return () => {
      reducedMotion.removeEventListener("change", sync);
      coarsePointer.removeEventListener("change", sync);
      smallViewport.removeEventListener("change", sync);
      observer?.disconnect();
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handlePointerMove = event => {
    if (event.pointerType !== "mouse") return;
    const stage = stageRef.current;
    if (!stage || stage.dataset.static !== "false") return;
    const bounds = stage.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;
    if (frameRef.current) return;
    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = 0;
      // Small, bounded changes to the camera angle (degrees).
      stage.style.setProperty("--tilt-x", (py * -8).toFixed(2));
      stage.style.setProperty("--tilt-z", (px * 12).toFixed(2));
    });
  };

  const resetTilt = () => {
    const stage = stageRef.current;
    stage?.style.setProperty("--tilt-x", "0");
    stage?.style.setProperty("--tilt-z", "0");
  };

  const bindNode = node => ({
    onHover: event => {
      if (event.pointerType === "mouse") setHoverId(node.id);
    },
    onHoverEnd: event => {
      if (event.pointerType === "mouse") {
        setHoverId(current => (current === node.id ? null : current));
      }
    },
    onFocus: () => setFocusId(node.id),
    onBlur: () => setFocusId(current => (current === node.id ? null : current)),
  });

  const flowing = animateFlows && inView;

  return (
    <figure className='arch-frame'>
      <figcaption className='arch-frame-bar'>
        <span>AI application architecture</span>
        <span>Request path</span>
      </figcaption>
      <div
        ref={stageRef}
        className='arch-stage'
        data-static='true'
        data-flowing={flowing ? "true" : "false"}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
      >
        <div className='arch-board'>
          <div className='iso-scene'>
            <div
              className='iso-world'
              role='group'
              aria-label='Layers of an AI application'
            >
              {Array.from({length: PLATE_COUNT}, (_, layer) => {
                const hot = activeNode && plateOwners[layer].includes(activeNode.id);
                return (
                  <div
                    key={layer}
                    aria-hidden='true'
                    className={`iso-plate${hot ? " is-active" : ""}`}
                    style={{"--layer": layer}}
                  />
                );
              })}

              {wires.map(wire => {
                const hot = activeId && wire.ids.includes(activeId);
                return (
                  <span
                    key={wire.id}
                    aria-hidden='true'
                    className={`iso-wire${hot ? " is-active" : ""}`}
                    style={{"--from": wire.from, "--to": wire.to}}
                  />
                );
              })}

              {traces.map(trace => {
                const hot = activeId && (activeId === trace.node || activeId === "backend");
                return (
                  <span
                    key={trace.id}
                    aria-hidden='true'
                    className={`iso-trace${hot ? " is-active" : ""}`}
                    style={{
                      "--layer": 3,
                      "--angle": `${trace.angle}deg`,
                      "--len": `${trace.length}px`,
                    }}
                  />
                );
              })}

              {flowing && (
                <>
                  {wires.map(wire => (
                    <span
                      key={`packet-${wire.id}`}
                      aria-hidden='true'
                      className='iso-packet'
                      style={{
                        "--z0": `calc((2 - ${wire.from}) * var(--pitch) - 12px)`,
                        "--z1": `calc((2 - ${wire.to}) * var(--pitch) + 44px)`,
                        "--x1": "0px",
                        "--y1": "0px",
                        animationDuration: wire.dur,
                        animationDelay: wire.delay,
                      }}
                    />
                  ))}
                </>
              )}

              {nodes.map(node => (
                <NodeButton
                  key={node.id}
                  node={node}
                  active={activeId === node.id}
                  floating
                  {...bindNode(node)}
                />
              ))}
            </div>
          </div>
        </div>
        <ol className='arch-stack'>
          {mobileOrder.map(id => {
            const node = nodeById[id];
            return (
              <li key={node.id}>
                <NodeButton
                  node={node}
                  active={activeId === node.id}
                  {...bindNode(node)}
                />
              </li>
            );
          })}
        </ol>
      </div>
      <div className='arch-caption' id='architecture-caption' aria-live='polite'>
        <span className='arch-caption-kicker'>
          {activeNode ? activeNode.label : "System"}
        </span>
        <p>
          {activeNode
            ? activeNode.detail
            : "Applications call the API. FastAPI coordinates LLM processing, model providers, and the database."}
        </p>
      </div>
    </figure>
  );
}
