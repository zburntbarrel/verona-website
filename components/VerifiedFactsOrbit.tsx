"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { LogoGlyph } from "@/components/icons";
import {
  IconBox,
  IconBuilding,
  IconGlobeNode,
  IconRepeat,
  IconServer,
  IconShield,
  IconUserCheck,
  IconUsers,
} from "@/components/OrbitIcons";

type Loop = "core" | "scale";
type LabelPlacement =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

type NodeDef = {
  id: string;
  loop: Loop;
  angle: number;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  placement: LabelPlacement;
};

const CORE = { rx: 1.2, ry: 1.0 };
const SCALE = { rx: 2.5, ry: 2.4 };

const NODES: NodeDef[] = [
  {
    id: "agents",
    loop: "core",
    angle: Math.PI * 0.25,
    label: "Agents & Apps\nCreate Demand",
    Icon: IconBox,
    placement: "top",
  },
  {
    id: "demand",
    loop: "core",
    angle: Math.PI * 0.75,
    label: "Demand → Reason\nto Verify",
    Icon: IconUserCheck,
    placement: "top",
  },
  {
    id: "proof",
    loop: "core",
    angle: -Math.PI * 0.75,
    label: "Proof Generated\nat Source",
    Icon: IconShield,
    placement: "bottom",
  },
  {
    id: "users",
    loop: "core",
    angle: -Math.PI * 0.25,
    label: "Users Verify\nand Add Supply",
    Icon: IconUsers,
    placement: "bottom",
  },
  {
    id: "settle",
    loop: "scale",
    angle: 0,
    label: "Settlement and\nPayments Underneath",
    Icon: IconServer,
    placement: "top",
  },
  {
    id: "reused",
    loop: "scale",
    angle: Math.PI * 0.5,
    label: "Reused\nEverywhere",
    Icon: IconRepeat,
    placement: "top",
  },
  {
    id: "enterprises",
    loop: "scale",
    angle: Math.PI,
    label: "Enterprises Verify\nand Then Compute",
    Icon: IconBuilding,
    placement: "top",
  },
  {
    id: "morefacts",
    loop: "scale",
    angle: -Math.PI * 0.5,
    label: "More Facts\nMore Reach",
    Icon: IconGlobeNode,
    placement: "bottom",
  },
];

function ellipsePoint(angle: number, loop: Loop): THREE.Vector3 {
  const { rx, ry } = loop === "core" ? CORE : SCALE;
  return new THREE.Vector3(Math.cos(angle) * rx, Math.sin(angle) * ry, 0);
}

function buildEllipsePoints(loop: Loop, segments = 256): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = (i / segments) * Math.PI * 2;
    points.push(ellipsePoint(t, loop));
  }
  return points;
}

export default function VerifiedFactsOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodeRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const coreMedallionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });
    } catch {
      // No WebGL (older devices, headless contexts, hardened browsers): hide
      // the orbit so the hero collapses to its left column cleanly.
      container.style.display = "none";
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const group = new THREE.Group();
    group.rotation.x = -0.18;
    scene.add(group);

    const lineColor = new THREE.Color("#1e3a8a");

    const coreGeom = new THREE.BufferGeometry().setFromPoints(
      buildEllipsePoints("core"),
    );
    const coreMat = new THREE.LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: 0.68,
    });
    const coreLine = new THREE.Line(coreGeom, coreMat);
    coreLine.position.z = 0.05;
    group.add(coreLine);

    const scaleGeom = new THREE.BufferGeometry().setFromPoints(
      buildEllipsePoints("scale"),
    );
    const scaleMat = new THREE.LineDashedMaterial({
      color: lineColor,
      transparent: true,
      opacity: 0.55,
      dashSize: 0.18,
      gapSize: 0.12,
    });
    const scaleLine = new THREE.Line(scaleGeom, scaleMat);
    scaleLine.computeLineDistances();
    scaleLine.position.z = -0.35;
    group.add(scaleLine);

    const nodeWorld = new THREE.Vector3();
    const ndc = new THREE.Vector3();

    let frame = 0;
    let pointerOffsetX = 0;
    let pointerOffsetY = 0;
    let scrollProgress = 0;
    let smoothedScroll = 0;
    let curRotX = -0.18;
    let curRotY = 0;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const CORE_TRAVEL = reducedMotion ? 0 : Math.PI * 0.5;
    const SCALE_TRAVEL = reducedMotion ? 0 : -Math.PI * 0.4;

    const handlePointer = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointerOffsetX = (e.clientX - rect.left) / rect.width - 0.5;
      pointerOffsetY = (e.clientY - rect.top) / rect.height - 0.5;
    };
    const handleLeave = () => {
      pointerOffsetX = 0;
      pointerOffsetY = 0;
    };
    container.addEventListener("pointermove", handlePointer);
    container.addEventListener("pointerleave", handleLeave);

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const updateOverlay = (coreOffset: number, scaleOffset: number) => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      for (const node of NODES) {
        const el = nodeRefs.current.get(node.id);
        if (!el) continue;
        const offset = node.loop === "core" ? coreOffset : scaleOffset;
        nodeWorld.copy(ellipsePoint(node.angle + offset, node.loop));
        if (node.loop === "scale") nodeWorld.z = -0.35;
        else nodeWorld.z = 0.05;
        nodeWorld.applyMatrix4(group.matrixWorld);
        ndc.copy(nodeWorld).project(camera);
        const x = (ndc.x * 0.5 + 0.5) * w;
        const y = (-ndc.y * 0.5 + 0.5) * h;
        el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
    };

    let raf = 0;
    const animate = () => {
      frame++;

      const rect = container.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      const centerY = rect.top + rect.height / 2;
      scrollProgress = Math.max(
        -1,
        Math.min(1, (centerY - viewportH / 2) / (viewportH / 2)),
      );

      const targetRotX = -0.18 + pointerOffsetY * -0.08 + scrollProgress * 0.18;
      const targetRotY = pointerOffsetX * 0.16 + scrollProgress * 0.22;

      curRotX += (targetRotX - curRotX) * 0.08;
      curRotY += (targetRotY - curRotY) * 0.08;
      group.rotation.x = curRotX;
      group.rotation.y = curRotY + Math.sin(frame * 0.002) * 0.02;
      group.updateMatrixWorld();

      smoothedScroll += (scrollProgress - smoothedScroll) * 0.08;
      const coreOffset = smoothedScroll * CORE_TRAVEL;
      const scaleOffset = smoothedScroll * SCALE_TRAVEL;

      if (coreMedallionRef.current) {
        const panY = smoothedScroll * -500;
        coreMedallionRef.current.style.backgroundPosition = `50% calc(50% + ${panY}px)`;
      }

      renderer.render(scene, camera);
      updateOverlay(coreOffset, scaleOffset);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      container.removeEventListener("pointermove", handlePointer);
      container.removeEventListener("pointerleave", handleLeave);
      coreGeom.dispose();
      scaleGeom.dispose();
      coreMat.dispose();
      scaleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-square w-full select-none"
      aria-label="Verona network — two loops orbit one core"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div
        ref={coreMedallionRef}
        className="absolute left-1/2 top-1/2 z-10 flex h-[20%] aspect-square -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full"
        style={{
          backgroundColor: "var(--color-sea)",
          backgroundImage: "url('/assets/pattern-floral-blue.jpg')",
          backgroundSize: "180%",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          boxShadow:
            "0 18px 38px -22px rgba(25,37,80,0.55), inset 0 0 0 1px rgba(248,247,243,0.18)",
        }}
      >
        <LogoGlyph className="relative h-[40%] w-auto text-[color:var(--color-linen)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-20">
        {NODES.map((node) => (
          <div
            key={node.id}
            ref={(el) => {
              if (el) nodeRefs.current.set(node.id, el);
              else nodeRefs.current.delete(node.id);
            }}
            className="orbit-node absolute left-0 top-0 will-change-transform"
            data-placement={node.placement}
          >
            <div className="orbit-node-medallion">
              <node.Icon className="h-5 w-5 text-[color:var(--color-sea)]" />
            </div>
            <p className="orbit-node-label font-[family-name:var(--font-hedvig-sans)]">
              {node.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
