"use client";

import { useEffect, useRef, type RefObject } from "react";
import { useReducedMotion } from "framer-motion";

type Point = { x: number; y: number; dx: number; dy: number; r: number };

/** Canvas capability visual: a responsive network that reacts to visitor proximity. */
export function NetworkField({ pointerTarget }: { pointerTarget?: RefObject<HTMLElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const parent = canvas.parentElement!;
    const mouse = { x: -1000, y: -1000 };
    let frame = 0;
    let points: Point[] = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = parent.clientWidth * ratio;
      canvas.height = parent.clientHeight * ratio;
      canvas.style.width = `${parent.clientWidth}px`;
      canvas.style.height = `${parent.clientHeight}px`;

      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.min(68, Math.max(30, Math.floor(parent.clientWidth / 18)));

      points = Array.from({ length: count }, () => ({
        x: Math.random() * parent.clientWidth,
        y: Math.random() * parent.clientHeight,
        dx: (Math.random() - 0.5) * 0.28,
        dy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.25 + 0.65,
      }));
    };

    const eventTarget = pointerTarget?.current ?? canvas;

    const onMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      mouse.x = event.clientX - bounds.left;
      mouse.y = event.clientY - bounds.top;
    };

    const draw = () => {
      const width = parent.clientWidth;
      const height = parent.clientHeight;

      context.clearRect(0, 0, width, height);

      points.forEach((point) => {
        if (!reduced) {
          point.x += point.dx;
          point.y += point.dy;

          if (point.x < 0 || point.x > width) point.dx *= -1;
          if (point.y < 0 || point.y > height) point.dy *= -1;
        }

        const distanceToMouse = Math.hypot(point.x - mouse.x, point.y - mouse.y);

        context.beginPath();
        context.arc(
          point.x,
          point.y,
          point.r + (distanceToMouse < 130 ? 0.8 : 0),
          0,
          Math.PI * 2
        );
        context.fillStyle =
          distanceToMouse < 130
            ? "rgba(94,234,212,.9)"
            : "rgba(94,234,212,.42)";
        context.fill();
      });

      for (let first = 0; first < points.length; first += 1) {
        for (let second = first + 1; second < points.length; second += 1) {
          const distance = Math.hypot(
            points[first].x - points[second].x,
            points[first].y - points[second].y
          );

          if (distance < 115) {
            context.beginPath();
            context.moveTo(points[first].x, points[first].y);
            context.lineTo(points[second].x, points[second].y);
            context.strokeStyle = `rgba(45,212,191,${0.13 * (1 - distance / 115)})`;
            context.lineWidth = 0.55;
            context.stroke();
          }
        }
      }

      if (!reduced) {
        frame = requestAnimationFrame(draw);
      }
    };

    const reset = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    eventTarget.addEventListener("pointermove", onMove);
    eventTarget.addEventListener("pointerleave", reset);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      eventTarget.removeEventListener("pointermove", onMove);
      eventTarget.removeEventListener("pointerleave", reset);
    };
  }, [pointerTarget, reduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-80"
    />
  );
}