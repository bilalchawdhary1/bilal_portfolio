import {useEffect, useMemo, useRef, useState} from "react";

const BOARD = {width: 500, height: 500};
const NODE = {w: 0.28, h: 0.13};

const nodes = [
  {
    id: "apps",
    index: "01",
    label: "Applications",
    meta: "Product interfaces",
    detail: "Interfaces where people use the AI feature.",
    x: 0.5,
    y: 0.15,
  },
  {
    id: "llm",
    index: "02",
    label: "LLM Processing",
    meta: "Prompts and streams",
    detail: "Prompt assembly, model calls, and streamed replies.",
    x: 0.16,
    y: 0.4,
  },
  {
    id: "api",
    index: "03",
    label: "API Layer",
    meta: "REST contracts",
    detail: "The REST boundary between clients and Python services.",
    x: 0.5,
    y: 0.4,
  },
  {
    id: "models",
    index: "04",
    label: "AI Models",
    meta: "OpenAI · Gemini",
    detail: "Provider integrations such as OpenAI and Gemini.",
    x: 0.84,
    y: 0.4,
  },
  {
    id: "backend",
    index: "05",
    label: "FastAPI",
    meta: "Python services",
    detail: "Python services that own workflow, validation, and orchestration.",
    x: 0.5,
    y: 0.65,
  },
  {
    id: "data",
    index: "06",
    label: "Database",
    meta: "PostgreSQL · MongoDB",
    detail: "PostgreSQL and MongoDB for the records those services use.",
    x: 0.5,
    y: 0.88,
  },
];

const links = [
  {id: "apps-api", from: "apps", to: "api", start: "bottom", end: "top", dur: "6.6s"},
  {id: "llm-api", from: "llm", to: "api", start: "right", end: "left", dur: "5.8s"},
  {id: "api-models", from: "api", to: "models", start: "right", end: "left", dur: "6.9s"},
  {id: "api-backend", from: "api", to: "backend", start: "bottom", end: "top", dur: "6.2s"},
  {id: "backend-data", from: "backend", to: "data", start: "bottom", end: "top", dur: "7.2s"},
];

const nodeById = Object.fromEntries(nodes.map(node => [node.id, node]));
const mobileOrder = ["apps", "api", "llm", "models", "backend", "data"];

function sidePoint(node, side) {
  const cx = node.x * BOARD.width;
  const cy = node.y * BOARD.height;
  const halfW = (NODE.w / 2) * BOARD.width;
  const halfH = (NODE.h / 2) * BOARD.height;

  if (side === "top") return [cx, cy - halfH];
  if (side === "bottom") return [cx, cy + halfH];
  if (side === "left") return [cx - halfW, cy];
  return [cx + halfW, cy];
}

function linkPath(link) {
  const [x1, y1] = sidePoint(nodeById[link.from], link.start);
  const [x2, y2] = sidePoint(nodeById[link.to], link.end);
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

function NodeButton({node, active, positioned, onHover, onHoverEnd, onFocus, onBlur}) {
  return (
    <button
      type='button'
      className={`arch-node${active ? " is-active" : ""}`}
      style={positioned ? {left: `${node.x * 100}%`, top: `${node.y * 100}%`} : undefined}
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
  const activeId = hoverId || focusId;
  const activeNode = nodes.find(node => node.id === activeId);
  const paths = useMemo(
    () => links.map(link => ({...link, d: linkPath(link)})),
    [],
  );

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
        stage.style.setProperty("--arch-x", "0px");
        stage.style.setProperty("--arch-y", "0px");
      }
      setAnimateFlows(!reducedMotion.matches && !smallViewport.matches);
    };

    sync();
    reducedMotion.addEventListener("change", sync);
    coarsePointer.addEventListener("change", sync);
    smallViewport.addEventListener("change", sync);

    return () => {
      reducedMotion.removeEventListener("change", sync);
      coarsePointer.removeEventListener("change", sync);
      smallViewport.removeEventListener("change", sync);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handlePointerMove = event => {
    if (event.pointerType !== "mouse") return;
    const stage = stageRef.current;
    if (!stage || stage.dataset.static !== "false") return;
    const bounds = stage.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 6;
    if (frameRef.current) return;
    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = 0;
      stage.style.setProperty("--arch-x", `${x.toFixed(2)}px`);
      stage.style.setProperty("--arch-y", `${y.toFixed(2)}px`);
    });
  };

  const resetParallax = () => {
    const stage = stageRef.current;
    stage?.style.setProperty("--arch-x", "0px");
    stage?.style.setProperty("--arch-y", "0px");
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
        onPointerMove={handlePointerMove}
        onPointerLeave={resetParallax}
      >
        <div className='arch-board'>
          <div className='arch-depth' aria-hidden='true' />
          <div className='arch-graph' role='group' aria-label='Layers of an AI application'>
            <svg
              className='arch-svg'
              viewBox={`0 0 ${BOARD.width} ${BOARD.height}`}
              aria-hidden='true'
            >
              {paths.map(link => {
                const hot = activeId === link.from || activeId === link.to;
                return (
                  <path
                    key={link.id}
                    d={link.d}
                    className={`arch-link${hot ? " is-active" : ""}`}
                  />
                );
              })}
              {animateFlows &&
                paths.map((link, index) => (
                  <circle key={`flow-${link.id}`} r='3.1' fill='currentColor'>
                    <animateMotion
                      dur={link.dur}
                      begin={`-${index * 1.15}s`}
                      repeatCount='indefinite'
                      path={link.d}
                    />
                  </circle>
                ))}
            </svg>
            {nodes.map(node => (
              <NodeButton
                key={node.id}
                node={node}
                active={activeId === node.id}
                positioned
                {...bindNode(node)}
              />
            ))}
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
