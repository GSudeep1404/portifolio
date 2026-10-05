import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device or small screens to disable custom cursor
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsHovered(true);
    const onMouseUp = () => setIsHovered(false);

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);

    // Smooth trailing animation loop
    let animationFrameId;
    const animateTrailing = () => {
      setTrailing((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animationFrameId = requestAnimationFrame(animateTrailing);
    };
    animationFrameId = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer subtle warm mocha glow ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${trailing.x - (isHovered ? 20 : 14)}px, ${
            trailing.y - (isHovered ? 20 : 14)
          }px, 0)`,
        }}
      >
        <div
          className={`rounded-full border border-[#8c6b52]/40 bg-[#8c6b52]/[0.05] transition-all duration-200 ${
            isHovered
              ? 'w-10 h-10 scale-110 border-[#4a3427]/60 bg-[#4a3427]/[0.1]'
              : 'w-7 h-7'
          }`}
        />
      </div>

      {/* Inner sharp espresso dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          transform: `translate3d(${position.x - 2.5}px, ${position.y - 2.5}px, 0)`,
        }}
      >
        <div
          className={`w-1.5 h-1.5 rounded-full bg-[#2b1e17] transition-transform duration-100 ${
            isHovered ? 'scale-125 bg-[#9a3412]' : 'opacity-90'
          }`}
        />
      </div>
    </>
  );
}
