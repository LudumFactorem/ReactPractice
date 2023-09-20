import { useState } from "react";

interface Props {
  src: string;
  xOffset?: number;
  yOffset?: number;
}

export default function PanningBackground({
  src,
  xOffset = 0,
  yOffset = 0,
}: Props) {
  const [offset, setOffset] = useState(0);

  addEventListener("scroll", () => {
    setOffset(window.scrollY);
  });

  return (
    <img
      src={src}
      style={{
        position: "fixed",
        transform:
          "translate(" + xOffset + "px, " + (offset / -10 + yOffset) + "px)",
        zIndex: "-100",
        opacity: 0.1,
        width: "100vw",
        filter: "blur(5px)",
      }}
    />
  );
}
