import React, { useEffect, useRef } from "react";

const IsometricDotBackground: React.FC = () => {
  const dotSpacing = 30;
  const dotSize = 2;
  const speed = 0.5; // Increase or decrease the speed of the animation
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;

    const animate = () => {
      if (containerRef.current) {
        const x = (parseFloat(containerRef.current.style.backgroundPositionX) || 0) + speed;
        containerRef.current.style.backgroundPositionX = `${x % (dotSpacing * 2)}px`;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="dark:bg-slate-500"
      ref={containerRef}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        bottom: 0,
        width: "200%",
        height: "200%",
        overflow: "hidden",
        zIndex: -1,
        pointerEvents: "none",
        background: `
          radial-gradient(circle ${dotSize}px at 0 0, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0) 99%) 0 0 / ${dotSpacing * 2}px ${dotSpacing * 2}px,
          radial-gradient(circle ${dotSize}px at ${dotSpacing}px ${dotSpacing}px, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0) 99%) 0 0 / ${dotSpacing * 2}px ${dotSpacing * 2}px
        `,
        transform: "translate(-50%, -50%) rotate(45deg)",
        backgroundSize: `${dotSpacing * 2}px ${dotSpacing * 2}px`,
      }}
    ></div>
  );
};

export default IsometricDotBackground;
