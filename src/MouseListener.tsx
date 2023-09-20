import { useEffect, useState } from "react";

export default function MouseListener() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  function updateMouse(event: MouseEvent) {
    setMouse({ x: event.clientX, y: event.clientY });
  }

  useEffect(() => {
    addEventListener("mousemove", updateMouse);
    return () => {
      removeEventListener("mousemove", updateMouse);
    };
  });

  return (
    <div className="fill-width row">
      <div className="fill-width right">
        <div className="min-width">Mouse position:</div>
      </div>
      <div className="fill-width left">
        <div className="min-width">
          &nbsp;(x:{mouse.x}, y:{mouse.y})
        </div>
      </div>
    </div>
  );
}
