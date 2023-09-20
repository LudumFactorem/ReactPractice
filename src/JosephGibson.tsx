import PanningBackground from "./PanningBackground";

export default function JosephGibson() {
  return (
    <>
      <PanningBackground src="/images/JosephGibson.jpg" yOffset={-500} />
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
      </div>
    </>
  );
}
