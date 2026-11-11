import {Canvas, useFrame} from "@react-three/fiber";
import {Float, Html, Line} from "@react-three/drei";
import {motion} from "motion/react";
import {Suspense, useMemo, useRef, useState} from "react";
import {
  AdditiveBlending,
  MathUtils,
  QuadraticBezierCurve3,
  Vector3,
} from "three";
import HeroDiagramFallback from "@/components/HeroDiagramFallback";

const CENTER = new Vector3(0, 0, 0);

const nodes = [
  {
    id: "models",
    label: "LLM Models",
    detail: "OpenAI · Gemini",
    dataPath: "Models → AI Core → Applications",
    flow: "inbound",
    position: [0, 2.05, 0.12],
    labelOffset: [0, -0.43, 0],
    delay: 0,
  },
  {
    id: "applications",
    label: "AI Applications",
    detail: "Intelligent Products",
    dataPath: "AI Core → Products → People",
    flow: "outbound",
    position: [-2.38, 0.8, -0.08],
    labelOffset: [0, -0.48, 0],
    delay: 0.06,
  },
  {
    id: "apis",
    label: "API Integrations",
    detail: "REST APIs",
    dataPath: "REST APIs → FastAPI → AI Core",
    flow: "inbound",
    position: [2.38, 0.8, 0.14],
    labelOffset: [0, -0.48, 0],
    delay: 0.12,
  },
  {
    id: "backend",
    label: "Python Backend",
    detail: "FastAPI · Services",
    dataPath: "Python → FastAPI → AI Services → Applications",
    flow: "inbound",
    position: [-1.34, -1.58, 0.18],
    labelOffset: [0, -0.48, 0],
    delay: 0.18,
  },
  {
    id: "data",
    label: "Data Systems",
    detail: "PostgreSQL · Storage",
    dataPath: "PostgreSQL → Context → AI Core",
    flow: "inbound",
    position: [1.34, -1.58, -0.08],
    labelOffset: [0, -0.48, 0],
    delay: 0.24,
  },
];

function getConnectionCurve(node) {
  const end = new Vector3(...node.position);
  const midpoint = end.clone().multiplyScalar(0.5);
  const perpendicular = new Vector3(-end.y, end.x, 0).normalize();
  const direction = node.position[0] < 0 ? -1 : 1;
  const control = midpoint
    .add(perpendicular.multiplyScalar(0.18 * direction))
    .add(new Vector3(0, 0, 0.42));

  return new QuadraticBezierCurve3(CENTER, control, end);
}

function Connection({node, active}) {
  const points = useMemo(
    () => getConnectionCurve(node).getPoints(48),
    [node],
  );
  const highlighted = active === node.id;

  return (
    <>
      <Line
        points={points}
        color={highlighted ? "#4e9aff" : "#7392c5"}
        lineWidth={highlighted ? 3.1 : 1.7}
        transparent
        opacity={highlighted ? 0.2 : 0.085}
        depthWrite={false}
      />
      <Line
        points={points}
        color={highlighted ? "#9bd5ff" : "#9ab8e9"}
        lineWidth={highlighted ? 1.35 : 0.7}
        transparent
        opacity={highlighted ? 0.95 : 0.44}
        depthWrite={false}
      />
    </>
  );
}

function DataStream({node, highlighted}) {
  const particles = useRef([]);
  const curve = useMemo(() => getConnectionCurve(node), [node]);
  const sizes = [0.032, 0.057, 0.087];
  const opacities = highlighted ? [1, 0.34, 0.12] : [0.84, 0.22, 0.07];

  useFrame(({clock}) => {
    const speed = highlighted ? 0.52 : 0.34;
    const progress = (clock.elapsedTime * speed) % 1;

    particles.current.forEach((particle, index) => {
      if (!particle) return;
      const packet = index < 3 ? 0 : 0.5;
      const trail = (index % 3) * 0.024;
      const directedProgress =
        node.flow === "outbound"
          ? progress + packet - trail
          : 1 - progress - packet + trail;
      const pathPosition = (directedProgress + 1) % 1;
      particle.position.copy(curve.getPoint(pathPosition));
    });
  });

  return (
    <>
      {sizes.map((size, index) => (
        <mesh
          key={size}
          ref={particle => {
            particles.current[index] = particle;
          }}
        >
          <sphereGeometry args={[size, 10, 10]} />
          <meshBasicMaterial
            color={highlighted ? "#9bdcff" : "#83aaff"}
            transparent
            opacity={opacities[index]}
            blending={AdditiveBlending}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      ))}
    </>
  );
}

function EcosystemNode({
  node,
  active,
  selected,
  onHover,
  onSelect,
}) {
  const sphere = useRef(null);
  const halo = useRef(null);
  const highlighted = active === node.id || selected === node.id;

  useFrame(({clock}, delta) => {
    if (!sphere.current) return;
    const pulse = highlighted ? 0.04 * Math.sin(clock.elapsedTime * 5) : 0;
    const targetScale = (highlighted ? 1.23 : 1) + pulse;
    const scale = MathUtils.damp(sphere.current.scale.x, targetScale, 7, delta);
    sphere.current.scale.setScalar(scale);
    if (halo.current) {
      const haloScale = MathUtils.damp(
        halo.current.scale.x,
        highlighted ? 1.16 : 0.82,
        6,
        delta,
      );
      halo.current.scale.setScalar(haloScale);
      halo.current.material.opacity = MathUtils.damp(
        halo.current.material.opacity,
        highlighted ? 0.24 : 0.07,
        6,
        delta,
      );
    }
  });

  return (
    <Float
      speed={0.65}
      rotationIntensity={0.025}
      floatIntensity={0.055}
      position={node.position}
    >
      <group>
        <mesh ref={halo}>
          <sphereGeometry args={[0.34, 20, 20]} />
          <meshBasicMaterial
            color='#69a6ff'
            transparent
            opacity={0.07}
            depthWrite={false}
            blending={AdditiveBlending}
          />
        </mesh>
        <mesh
          ref={sphere}
          onPointerOver={event => {
            event.stopPropagation();
            onHover(node.id);
          }}
          onPointerOut={() =>
            onHover(current => (current === node.id ? null : current))
          }
        >
          <sphereGeometry args={[0.18, 20, 20]} />
          <meshStandardMaterial
            color={highlighted ? "#9abaff" : "#7593bd"}
            emissive={highlighted ? "#315fb8" : "#1d3153"}
            emissiveIntensity={highlighted ? 0.75 : 0.28}
            roughness={0.34}
            metalness={0.22}
          />
        </mesh>
        <Html
          position={node.labelOffset}
          center
          zIndexRange={[8, 0]}
          style={{pointerEvents: "auto"}}
        >
          <motion.button
            type='button'
            aria-label={`${node.label}: ${node.detail}`}
            aria-pressed={selected === node.id}
            onClick={() => onSelect(node.id)}
            onMouseEnter={() => onHover(node.id)}
            onMouseLeave={() =>
              onHover(current => (current === node.id ? null : current))
            }
            onFocus={() => onHover(node.id)}
            onBlur={() =>
              onHover(current => (current === node.id ? null : current))
            }
            initial={{opacity: 0, y: 5}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.32, delay: node.delay}}
            whileHover={{scale: 1.035}}
            whileFocus={{scale: 1.035}}
            className={`hero-node-label flex min-h-10 w-[8.25rem] flex-col items-center justify-center rounded-xl border px-2 py-1 text-center shadow-sm backdrop-blur-md transition-[border-color,background-color,box-shadow,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-primaryDark ${
              highlighted
                ? "border-primary/50 bg-white/95 shadow-primary/10 dark:border-primaryDark/60 dark:bg-[#20232b]/95"
                : "border-dark/10 bg-white/90 hover:border-primary/40 dark:border-light/15 dark:bg-[#202020]/90 dark:hover:border-primaryDark/50"
            }`}
          >
            <span className='whitespace-nowrap text-[10px] font-semibold leading-tight text-dark dark:text-light'>
              {node.label}
            </span>
            <span className='mt-0.5 whitespace-nowrap text-[9px] leading-tight text-dark/55 dark:text-light/55'>
              {node.detail}
            </span>
          </motion.button>
        </Html>
      </group>
    </Float>
  );
}

function Scene({
  hoveredNode,
  selectedNode,
  onActiveChange,
  onSelectedChange,
  activeNode,
}) {
  const ecosystem = useRef(null);

  useFrame((state, delta) => {
    if (!ecosystem.current) return;
    ecosystem.current.rotation.y = MathUtils.damp(
      ecosystem.current.rotation.y,
      state.pointer.x * 0.12,
      3.5,
      delta,
    );
    ecosystem.current.rotation.x = MathUtils.damp(
      ecosystem.current.rotation.x,
      -state.pointer.y * 0.075,
      3.5,
      delta,
    );
    ecosystem.current.rotation.z = MathUtils.damp(
      ecosystem.current.rotation.z,
      state.pointer.x * 0.016,
      3,
      delta,
    );
  });

  return (
    <>
      <ambientLight intensity={0.55} />
      <pointLight position={[0, 0.7, 3]} intensity={2.2} color='#b6d5ff' />
      <pointLight position={[-3, -1.8, 1]} intensity={1.15} color='#4778ff' />
      <pointLight position={[2.8, 1.8, -1]} intensity={0.75} color='#46c8e8' />

      <group ref={ecosystem}>
        {nodes.map(node => (
          <Connection key={`connection-${node.id}`} node={node} active={activeNode} />
        ))}
        {nodes.map(node => (
          <DataStream
            key={`stream-${node.id}`}
            node={node}
            highlighted={activeNode === node.id}
          />
        ))}

        <AICore active={Boolean(activeNode)} />

        {nodes.map(node => (
          <EcosystemNode
            key={node.id}
            node={node}
            active={hoveredNode}
            selected={selectedNode}
            onHover={onActiveChange}
            onSelect={onSelectedChange}
          />
        ))}
      </group>
      <AmbientParticles />
    </>
  );
}

function AICore({active}) {
  const core = useRef(null);
  const shell = useRef(null);
  const orbitOne = useRef(null);
  const orbitTwo = useRef(null);
  const orbitThree = useRef(null);
  const coreMaterial = useRef(null);
  const coreScale = useRef(null);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    if (core.current) {
      core.current.rotation.x = MathUtils.damp(
        core.current.rotation.x,
        -state.pointer.y * 0.2 + Math.sin(time * 0.45) * 0.035,
        4,
        delta,
      );
      core.current.rotation.y = MathUtils.damp(
        core.current.rotation.y,
        state.pointer.x * 0.25 + time * 0.12,
        4,
        delta,
      );
    }

    if (shell.current) {
      shell.current.rotation.y -= delta * 0.16;
      shell.current.rotation.x += delta * 0.09;
    }
    if (orbitOne.current) {
      orbitOne.current.rotation.z += delta * 0.32;
      orbitOne.current.rotation.x = MathUtils.damp(
        orbitOne.current.rotation.x,
        0.7 + state.pointer.y * 0.08,
        3,
        delta,
      );
    }
    if (orbitTwo.current) {
      orbitTwo.current.rotation.y += delta * 0.24;
      orbitTwo.current.rotation.x = MathUtils.damp(
        orbitTwo.current.rotation.x,
        -0.88 + state.pointer.y * 0.06,
        3,
        delta,
      );
    }
    if (orbitThree.current) orbitThree.current.rotation.z -= delta * 0.4;

    const pulse = 1 + Math.sin(time * 1.8) * 0.035 + (active ? 0.09 : 0);
    if (coreScale.current) {
      const scale = MathUtils.damp(coreScale.current.scale.x, pulse, 5, delta);
      coreScale.current.scale.setScalar(scale);
    }
    if (coreMaterial.current) {
      coreMaterial.current.emissiveIntensity = MathUtils.damp(
        coreMaterial.current.emissiveIntensity,
        0.55 + (0.18 + (active ? 0.45 : 0)) * (0.5 + 0.5 * Math.sin(time * 2.2)),
        4,
        delta,
      );
    }
  });

  return (
    <group ref={core} position={[0, 0, 0.22]}>
      <mesh ref={coreScale}>
        <sphereGeometry args={[0.47, 40, 40]} />
        <meshPhysicalMaterial
          ref={coreMaterial}
          color='#2464e8'
          emissive='#1552d3'
          emissiveIntensity={0.6}
          roughness={0.18}
          metalness={0.32}
          clearcoat={1}
          clearcoatRoughness={0.12}
        />
      </mesh>
      <mesh scale={0.72}>
        <sphereGeometry args={[0.51, 32, 32]} />
        <meshBasicMaterial
          color='#8ae4ff'
          transparent
          opacity={0.24}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh ref={shell}>
        <icosahedronGeometry args={[0.66, 2]} />
        <meshBasicMaterial
          color='#7dd9ff'
          wireframe
          transparent
          opacity={0.2}
          depthWrite={false}
        />
      </mesh>
      <NeuralLattice />

      <group ref={orbitOne} rotation={[0.7, 0.15, 0.2]}>
        <mesh>
          <torusGeometry args={[0.73, 0.012, 8, 96]} />
          <meshBasicMaterial
            color='#9bdcff'
            transparent
            opacity={0.8}
            blending={AdditiveBlending}
          />
        </mesh>
        <mesh position={[0.73, 0, 0]}>
          <sphereGeometry args={[0.037, 12, 12]} />
          <meshBasicMaterial color='#d3f5ff' toneMapped={false} />
        </mesh>
      </group>
      <group ref={orbitTwo} rotation={[-0.88, 0.1, -0.2]}>
        <mesh>
          <torusGeometry args={[0.94, 0.008, 8, 96]} />
          <meshBasicMaterial
            color='#638ff9'
            transparent
            opacity={0.68}
            blending={AdditiveBlending}
          />
        </mesh>
        <mesh position={[0, 0.94, 0]}>
          <sphereGeometry args={[0.028, 10, 10]} />
          <meshBasicMaterial color='#b5caff' toneMapped={false} />
        </mesh>
      </group>
      <group ref={orbitThree} rotation={[1.1, 0.2, 0.3]}>
        <mesh>
          <torusGeometry args={[0.58, 0.006, 6, 80]} />
          <meshBasicMaterial color='#45bde2' transparent opacity={0.58} />
        </mesh>
      </group>
      <pointLight position={[0, 0, 0.1]} color='#4c9dff' intensity={1.5} distance={2.2} />
      <Html position={[0, 0, 0.58]} center zIndexRange={[9, 0]}>
        <span
          aria-hidden='true'
          className='pointer-events-none text-sm font-bold tracking-wide text-white'
        >
          AI
        </span>
      </Html>
    </group>
  );
}

function NeuralLattice() {
  const lattice = useRef(null);
  const {positions, edges} = useMemo(() => {
    const count = 10;
    const points = Array.from({length: count}, (_, index) => {
      const angle = index * Math.PI * (3 - Math.sqrt(5));
      const y = 1 - (index / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y) * 0.55;
      return new Vector3(Math.cos(angle) * radius, y * 0.55, Math.sin(angle) * radius);
    });
    const connections = new Set();

    points.forEach((point, index) => {
      const nearest = points
        .map((candidate, candidateIndex) => ({
          candidateIndex,
          distance: point.distanceTo(candidate),
        }))
        .filter(({candidateIndex}) => candidateIndex !== index)
        .sort((first, second) => first.distance - second.distance)
        .slice(0, 3);

      nearest.forEach(({candidateIndex}) => {
        connections.add(
          [index, candidateIndex].sort((first, second) => first - second).join("-"),
        );
      });
    });

    return {
      positions: points,
      edges: Array.from(connections, edge =>
        edge.split("-").map(Number),
      ),
    };
  }, []);

  useFrame((_, delta) => {
    if (!lattice.current) return;
    lattice.current.rotation.y -= delta * 0.11;
    lattice.current.rotation.x += delta * 0.045;
  });

  return (
    <group ref={lattice}>
      {edges.map(([start, end]) => (
        <Line
          key={`neural-edge-${start}-${end}`}
          points={[positions[start], positions[end]]}
          color='#79d5fa'
          lineWidth={0.75}
          transparent
          opacity={0.48}
          depthWrite={false}
        />
      ))}
      {positions.map((position, index) => (
        <mesh key={`neural-node-${index}`} position={position}>
          <sphereGeometry args={[0.026, 8, 8]} />
          <meshBasicMaterial
            color={index % 3 === 0 ? "#d5f7ff" : "#8ccfff"}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function AmbientParticles() {
  const points = useRef(null);
  const positions = useMemo(() => {
    const count = 32;
    const values = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const angle = index * 2.399963;
      const radius = 1.5 + ((index * 37) % 100) / 100 * 2.15;
      values[index * 3] = Math.cos(angle) * radius;
      values[index * 3 + 1] = Math.sin(angle) * radius * 0.68;
      values[index * 3 + 2] = ((index * 17) % 31 - 15) / 12;
    }

    return values;
  }, []);

  useFrame((_, delta) => {
    if (!points.current) return;
    points.current.rotation.y += delta * 0.012;
    points.current.rotation.z = MathUtils.damp(
      points.current.rotation.z,
      0.012,
      2,
      delta,
    );
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach='attributes-position' args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color='#a9c7ff'
        size={0.022}
        sizeAttenuation
        transparent
        opacity={0.56}
        depthWrite={false}
      />
    </points>
  );
}

export default function AIEngineeringScene({active}) {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [webglReady, setWebglReady] = useState(false);
  const activeNode = hoveredNode || selectedNode;
  const activeDetails = nodes.find(node => node.id === activeNode);

  return (
    <div className='overflow-hidden rounded-[1.35rem] bg-[#0a1220]'>
      <div className='relative aspect-[4/3]'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 z-[1] opacity-40'
          style={{
            backgroundImage:
              "linear-gradient(rgba(158, 189, 244, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(158, 189, 244, 0.08) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 76%)",
          }}
        />
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 z-[1]'
          style={{
            background:
              "radial-gradient(ellipse at 50% 46%, rgba(35, 91, 190, 0.28), transparent 49%), linear-gradient(145deg, rgba(16, 29, 49, 0.3), rgba(7, 13, 24, 0.82))",
          }}
        />
        <Canvas
          camera={{position: [0, 0, 9], fov: 36}}
          dpr={[1, 1.35]}
          frameloop={active ? "always" : "never"}
          fallback={<HeroDiagramFallback />}
          gl={{antialias: true, alpha: true, powerPreference: "low-power"}}
          onCreated={() => setWebglReady(true)}
          onPointerMissed={() => setHoveredNode(null)}
          style={{position: "absolute", inset: 0, zIndex: 2}}
        >
          <Suspense fallback={null}>
            <Scene
              hoveredNode={hoveredNode}
              selectedNode={selectedNode}
              onActiveChange={setHoveredNode}
              onSelectedChange={setSelectedNode}
              activeNode={activeNode}
            />
          </Suspense>
        </Canvas>
      </div>
      {webglReady && (
        <div
          role='status'
          className='flex min-h-11 flex-col items-center justify-center border-t border-white/10 bg-[#07101d]/75 px-3 py-1.5 text-center'
        >
          <span className='text-[8px] font-semibold uppercase tracking-[0.16em] text-blue-200/70'>
            {activeDetails?.label || "System data path"}
          </span>
          <span className='mt-0.5 text-[9px] leading-tight text-white/85'>
            {activeDetails
              ? activeDetails.dataPath
              : "Select a node to inspect its connection"}
          </span>
        </div>
      )}
      <p className='sr-only'>
        Select an ecosystem node to highlight its connection to the AI core.
      </p>
    </div>
  );
}
