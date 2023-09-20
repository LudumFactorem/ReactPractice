import { useEffect, useState } from "react";

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

  function updateOffset() {
    setOffset(window.scrollY);
  }

  useEffect(() => {
    addEventListener("scroll", updateOffset);
    return removeEventListener("scroll", updateOffset);
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
