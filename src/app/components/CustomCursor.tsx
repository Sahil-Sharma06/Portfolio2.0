"use client";

import { useEffect } from "react";

const TRAIL = 8;

export default function CustomCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    // ── Create elements ──────────────────────────────────────────
    const orb = document.createElement("div");
    orb.id = "cc-orb";
    Object.assign(orb.style, {
      position: "fixed",
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      background: "#C8B89A",
      pointerEvents: "none",
      zIndex: "9999",
      top: "0",
      left: "0",
      willChange: "transform",
      transition: "width .25s, height .25s",
    });

    const ring = document.createElement("div");
    ring.id = "cc-ring";
    Object.assign(ring.style, {
      position: "fixed",
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      border: "1px solid rgba(200,184,154,0.35)",
      pointerEvents: "none",
      zIndex: "9998",
      top: "0",
      left: "0",
      willChange: "transform",
      transition: "width .3s, height .3s, border-color .3s",
    });

    const label = document.createElement("div");
    label.id = "cc-label";
    Object.assign(label.style, {
      position: "fixed",
      pointerEvents: "none",
      zIndex: "10000",
      fontSize: "11px",
      letterSpacing: ".12em",
      color: "#C8B89A",
      fontFamily: "'Syne', system-ui, sans-serif",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      top: "0",
      left: "0",
      willChange: "transform",
      opacity: "0",
      transition: "opacity .2s",
      fontWeight: "600",
    });

    // Trail dots
    const trail: { x: number; y: number; el: HTMLDivElement }[] = [];
    for (let i = 0; i < TRAIL; i++) {
      const el = document.createElement("div");
      const size = 8 - i * 0.75;
      Object.assign(el.style, {
        position: "fixed",
        width: size + "px",
        height: size + "px",
        borderRadius: "50%",
        background: "#C8B89A",
        pointerEvents: "none",
        zIndex: "9997",
        top: "0",
        left: "0",
        opacity: String((1 - i / TRAIL) * 0.2),
        willChange: "transform",
      });
      document.body.appendChild(el);
      trail.push({ x: -100, y: -100, el });
    }

    document.body.appendChild(orb);
    document.body.appendChild(ring);
    document.body.appendChild(label);

    // ── State ────────────────────────────────────────────────────
    let mx = -100, my = -100;   // raw mouse
    let rx = -100, ry = -100;   // ring (lagged)
    let ringR = 18;              // current ring radius (half of width)
    let raf = 0;

    // ── Mouse move ───────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    document.addEventListener("mousemove", onMove, { passive: true });

    // ── RAF loop ─────────────────────────────────────────────────
    const loop = () => {
      // Orb — instant
      orb.style.transform = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;

      // Ring — lerped
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(calc(${rx}px - 50%), calc(${ry}px - 50%))`;

      // Label — follows ring, sits below it with a gap
      label.style.transform = `translate(calc(${rx}px - 50%), calc(${ry}px + ${ringR + 10}px))`;

      // Trail — each follows the previous
      trail[0].x = mx;
      trail[0].y = my;
      for (let i = 1; i < TRAIL; i++) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * 0.35;
        trail[i].y += (trail[i - 1].y - trail[i].y) * 0.35;
        trail[i].el.style.transform = `translate(calc(${trail[i].x}px - 50%), calc(${trail[i].y}px - 50%))`;
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // ── Hover effects ────────────────────────────────────────────
    const onEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      orb.style.width = "6px";
      orb.style.height = "6px";
      ring.style.width = "52px";
      ring.style.height = "52px";
      ring.style.borderColor = "rgba(200,184,154,0.7)";
      ringR = 26; // half of 52px
      label.textContent = el.dataset.hover ?? "";
      label.style.opacity = el.dataset.hover ? "1" : "0";
    };
    const onLeave = () => {
      orb.style.width = "12px";
      orb.style.height = "12px";
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.borderColor = "rgba(200,184,154,0.35)";
      ringR = 18; // half of 36px
      label.style.opacity = "0";
    };

    const attachHovers = () => {
      document.querySelectorAll<HTMLElement>("[data-hover]").forEach((el) => {
        // Remove first to avoid duplicates
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    attachHovers();
    // Re-attach after reveals have animated in
    const t1 = setTimeout(attachHovers, 800);
    const t2 = setTimeout(attachHovers, 2000);

    // ── Cleanup ──────────────────────────────────────────────────
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      orb.remove();
      ring.remove();
      label.remove();
      trail.forEach((t) => t.el.remove());
    };
  }, []);

  return null; // everything is DOM-injected
}
