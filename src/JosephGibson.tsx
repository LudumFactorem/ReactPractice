export default function JosephGibson() {
  return (
    <div
      className="content"
      style={{
        position: "relative",
        height:
          "90vh" /* Fill the window height.  TODO: Find a better, more reactive way to do this and accomodate topbar and footer */,
        overflow: "hidden",
      }}
    >
      <div>Joe's Page</div>
      <img
        src="/images/JosephGibson.jpg"
        style={{
          opacity: 0.05,
          width: "100vw" /* Fill the window width */,
          position:
            "absolute" /* Position the image absolutly, but because it's parent is relative, the new absolute is relative to the parent. */,
          top: "-30vw" /* Offset the image based on the width of the viewport */,
          zIndex: "-128",
        }}
      />
    </div>
  );
}
