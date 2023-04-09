import { useRef, useEffect } from "react";
export function Blob() {
  const ref = useRef<HTMLDivElement>(null);
  window.onpointermove = (event) => {
    const { clientX, clientY } = event;
    if (ref.current == null) return;
    ref.current.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
    console.log(ref.current);
  };

  return (
    <>
      <div ref={ref} id="blob"></div>
      <div id="blur"></div>
    </>
  );
}
