import { ElementRef, useEffect, useRef, useState } from "react";

export default function PointerPointer() {
  const [rotation, setRotation] = useState(0);
  const ppref = useRef<ElementRef<"img">>(null);

  useEffect(() => {
    addEventListener("mousemove", updateRotation);
    return () => {
      removeEventListener("mousemove", updateRotation);
    };
  });

  function updateRotation(event: MouseEvent) {
    let mouse = { x: event.clientX, y: event.clientY };

    let box = ppref.current!.getBoundingClientRect();
    let center = {
      x: (box.right + box.left) / 2,
      y: (box.bottom + box.top) / 2,
    };

    let vec = { x: mouse.x - center.x, y: mouse.y - center.y };

    let rot = Math.atan2(vec.y, vec.x);

    setRotation(rot);
  }

  return (
    <img
      ref={ppref}
      src="/images/arrow.png"
      style={{
        position: "fixed",
        top: "400px",
        borderRadius: "50%",
        transform: "rotate(" + rotation / Math.PI / 2 + "turn)",
      }}
    />
  );
}
