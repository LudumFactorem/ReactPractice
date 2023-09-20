import MouseListener from "./MouseListener";
import PanningBackground from "./PanningBackground";
import PointerPointer from "./PointerPointer";
import ScrollListener from "./ScrollListener";

export default function ComponentTestPage() {
  return (
    <>
      <ScrollListener />
      <PanningBackground src="/images/krabs.jpg" />
      <div className="content">
        <h2>Component Test Page</h2>
        <div className="column">
          This page is used for testing new components.
          <MouseListener />
          <PointerPointer />
          <div className="fit-width">
            {[...Array(100).keys()].map((value) => {
              return (
                <div>
                  This is filler line #{value + 1}. I'm using it to fill some
                  space for the ScrollListener. Blah blah blah, more space
                  needed to be filled.
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
