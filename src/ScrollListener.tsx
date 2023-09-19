import { useState } from "react";

export default function ScrollListener() {
  const [scroll, setScroll] = useState(0);

  addEventListener("scroll", () => {
    setScroll(window.scrollY);
  });

  return (
    <img
      src="/images/arrow.png"
      style={{
        borderRadius: "50%",
        position: "fixed",
        transform: "rotate(" + scroll / 500 + "turn)",
      }}
    />
  );
}
