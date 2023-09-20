import { useEffect, useState } from "react";

export default function ScrollListener() {
  const [scroll, setScroll] = useState(0);

  function updateScroll() {
    setScroll(window.scrollY);
  }

  useEffect(() => {
    addEventListener("scroll", updateScroll);
    return removeEventListener("scroll", updateScroll);
  });

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
